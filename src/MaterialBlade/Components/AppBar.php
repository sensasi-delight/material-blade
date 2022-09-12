<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

class AppBar extends Component
{
  public ?string $title;
  public ?string $variant;
  public bool $isFixed;
  public ?string $color;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    bool $fixed = false,
    ?string $title = null,
    ?string $variant = null,
    ?string $color = null
  ) {
    $this->isFixed = $fixed;
    $this->title = $title;
    $this->variant = $variant;
    $this->color = $color;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('MaterialBlade::app-bar');
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    if ($this->color) {
      $attributes = $attributes->merge([
        'style' => $attributes->prepends('--mdc-theme-primary: ' . Helper::getColor($this->color))
      ]);
    }
    
    return $attributes->class([
      'mdc-top-app-bar',
      'mdc-top-app-bar--fixed' => $this->isFixed,
      'mdc-top-app-bar--' . ($this->variant === 'short-collapsed' ? 'short mdc-top-app-bar--short-collapsed' : $this->variant) => $this->variant
    ]);
  }


  public function startAttributesPreprocess(ComponentAttributeBag $attributes)
  {
    return $attributes->class([
      'mdc-top-app-bar__section',
      'mdc-top-app-bar__section--align-start'
    ]);
  }

  public function endAttributesPreprocess(ComponentAttributeBag $attributes)
  {
    $attributes = $attributes->merge(['role' => $attributes->get('role', 'toolbar')]);

    return $attributes->class([
      'mdc-top-app-bar__section',
      'mdc-top-app-bar__section--align-end'
    ]);
  }
}
