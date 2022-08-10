<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;

class Button extends Component
{
  // public $color;
  public $endIcon;
  public $fullwidth;
  public $label;
  public $ripple;
  // public $size;
  public $startIcon;
  public $variant;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    string $endIcon = null,
    bool $fullwidth = false,
    string $label = null,
    bool $ripple = true,
    string $startIcon = null,
    string $variant = 'contained'
  ) {
    $this->endIcon = $endIcon;
    $this->fullwidth = $fullwidth;
    $this->label = $label;
    $this->ripple = $ripple;
    $this->startIcon = $startIcon;
    $this->variant = $variant;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('MaterialBlade::components.button');
  }
}
