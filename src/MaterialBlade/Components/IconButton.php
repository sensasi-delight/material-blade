<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class IconButton extends Component
{
  public ?string $color;
  public string $icon;
  public ?bool $isToggle;
  public ?string $offIcon;
  public bool $isRipple;
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
    $this->isToggle = is_null($toggle) ? null : ($toggle == 'on' ? true : false);
    $this->icon = $icon;
    $this->offIcon = $offIcon;
    $this->isRipple = filter_var($ripple, FILTER_VALIDATE_BOOLEAN);
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

  public function attributesPreprocess(ComponentAttributeBag $attributes) {
    $attributes = $attributes->class([
      'mdc-icon-button',
      is_null($this->isToggle) ? null : 'mdc-icon-button-toggle',
      'mdc-icon-button--on' => $this->isToggle,
      $attributes->has('disabled') ? 'mdc-theme--text-disabled-on-light' : 'mdc-theme--text-secondary-on-light'
    ]);
    
    $attributes = $attributes->merge(['aria-label' => $this->icon]);
    
    if (! is_null($this->isToggle)) {
        $attributes = $attributes->merge(['aria-pressed' => $this->isToggle]);
    }

    return $attributes;
  }
}
