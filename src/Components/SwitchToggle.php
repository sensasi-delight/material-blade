<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

class SwitchToggle extends Component
{
  public string $color;
  public bool $isOn;
  public ?string $icon;
  public ?string $offIcon;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    string $color = 'primary',
    bool $on = false,
    ?string $icon = null,
    ?string $offIcon = null
  ) {
    $this->color = $color;
    $this->isOn = $on;
    $this->icon = $icon;
    $this->offIcon = $offIcon;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('mbv::switch');
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    $attributes = $attributes->merge([      
      'type' => 'button',
      'role' => 'switch',
      'aria-checked' => $this->isOn
    ]);

    if ($this->color !== 'primary') {
      $attributes = $attributes->merge(['style' => $attributes->prepends('--mdc-theme-primary: ' . Helper::getColor($this->color))]);
    }

    return $attributes->class([
      'mdc-switch',
      'mdc-switch--' . ($this->isOn ? 'selected' : 'unselected'),
    ]);
  }
}
