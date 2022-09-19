<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Card extends Component
{
  public string $variant;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    string $variant = 'elevated'
  ) {
    $this->variant = $variant;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('mbv::_plain-div');
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    return $attributes->class([
      'mdc-card',
      'mdc-card--outlined' => $this->variant === 'outlined'
    ]);
  }
}
