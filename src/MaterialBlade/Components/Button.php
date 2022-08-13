<?php

// namespace MaterialBlade\Components;
namespace App\View\Components;


use Illuminate\View\Component;

class Button extends Component
{
  public $color;
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
    string $color = null,
    string $endIcon = null,
    bool $fullwidth = false,
    string $label = null,
    bool $ripple = true,
    // string $size = null,
    string $startIcon = null,
    string $variant = 'contained'
  ) {
    $this->color = $color;
    $this->endIcon = $endIcon ?: null;
    $this->fullwidth = $fullwidth;
    $this->label = $label ?: null;
    $this->ripple = $ripple;
    // $this->size = $size;
    $this->startIcon = $startIcon ?: null;
    $this->variant = $variant ?: 'contained';
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
