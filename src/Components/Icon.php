<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

class Icon extends Component
{
  public ?string $color;
  public string $icon;
  public string $variant;
  // public $size;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    string $icon,
    ?string $color = null,
    string $variant = 'filled'
    // string $size = null,
  ) {

    [$icon, $variantTemp] = Helper::parseIconString($icon);

    $this->icon = $icon;
    $this->variant = $variantTemp ?: $variant;
    $this->color = $color;
    // $this->size = $size;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('mbv::icon');
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    if ($this->color) {
      $attributes = $attributes->merge(['style' => $attributes->prepends('color: ' . Helper::getColor($this->color) . ';')]);
    }

    return $attributes->class([
      'material-icons' . ($this->variant != 'filled' ? '-' . $this->variant : '')
    ]);
  }
}
