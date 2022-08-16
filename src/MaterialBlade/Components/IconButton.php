<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;

class IconButton extends Component
{
  public ?string $color;
  public string $icon;
  public ?bool $toggle;
  public ?string $offIcon;
  public bool $ripple;
  // public $size;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    string $icon,
    ?string $color = null,
    ?string $toggle = null,
    ?string $offIcon = null,
    string $ripple = "true"
    // string $size = null
  ) {
    $this->color = $color;
    $this->toggle = is_null($toggle) ? null : ($toggle == 'on' ? true : false);
    $this->icon = $icon;
    $this->offIcon = $offIcon;
    $this->ripple = filter_var($ripple, FILTER_VALIDATE_BOOLEAN);
    // $this->size = $size;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('MaterialBlade::icon-button');
  }
}
