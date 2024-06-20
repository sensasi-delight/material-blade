<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Chip extends Component
{
  public string $label;
  public ?string $icon;
  public bool $isSelected;
  public bool $isWithWrapper;
  public bool $isDisabled;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    string $label,
    ?string $icon = null,
    bool $selected = false,
    bool $withWrapper = false,
    bool $disabled = false
  ) {
    $this->label = $label;
    $this->icon = $icon;
    $this->isSelected = $selected;
    $this->isWithWrapper = $withWrapper;
    $this->isDisabled = $disabled;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('mbv::chip');
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    $attributes = $attributes->merge(['role' => 'row']);
    
    return $attributes->class([
      'mdc-chip',
      'mdc-chip--selected' => $this->isSelected,
      'mdc-chip--touch' => $this->isWithWrapper
    ]);
  }
}
