<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;

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
    ?string $color = null,
    string $icon,
    string $variant = 'filled'
    // string $size = null,
  ) {

    $explodedIcon = explode(':', $icon);

    if (count($explodedIcon) === 2) {
      [$icon, $variant] = $explodedIcon;
    }

    $this->icon = $icon;
    $this->variant = $variant;
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
    return view('MaterialBlade::icon');
  }
}
