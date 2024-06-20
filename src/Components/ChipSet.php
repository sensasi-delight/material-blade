<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class ChipSet extends Component
{
  public string $variant;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    string $variant = 'basic'
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
    return view('mbv::chip-set');
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    $attributes = $attributes->merge(['role' => 'grid']);

    
    return $attributes->class([
      'mdc-chip-set',
      'mdc-chip-set--' . $this->variant =>  $this->variant !== 'basic',
    ]);
  }
}
