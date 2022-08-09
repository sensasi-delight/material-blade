<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;

class Button extends Component
{
  public $label;
  public $variantClass;

  public $VARIANTS_CLASSMAP = [
    'contained' => 'mdc-button--raised',
    'outlined' => 'mdc-button--outlined',
    'text' => ''
  ];

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct()
  {
    //
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('MaterialBlade::button');
  }
}
