<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Typography extends Component
{
  public ?string $element;
  public ?string $variant;
  public ?string $propSlot;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    ?string $element = null,
    ?string $slot = null,
    ?string $variant = null
  ) {
    [$elementTemp, $variant] = $this->variantPreprocess($variant);

    $this->element = $element ?: $elementTemp;
    $this->variant = $variant;
    $this->propSlot = $slot;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('MaterialBlade::typography');
  }

  public function variantPreprocess(?string $variant)
  {
    if (in_array($variant, ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])) {
      return [$variant, 'headline' . substr($variant, -1)];
    }


    if (in_array($variant, ['subtitle1', 'subtitle2'])) {
      return ['h6', $variant];
    }

    if (!in_array($variant, ['body1', 'body2', 'button', 'caption', 'overline'])) {
      $variant = null;
    }

    return ['p', $variant];
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    return $attributes->class([
      'mdc-typography' . ($this->variant ? '--' . $this->variant : null)
    ]);
  }
}
