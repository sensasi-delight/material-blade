<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class CardPrimaryAction extends Component
{
  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct()
  {
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('MaterialBlade::card-primary-action');
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    $attributes = $attributes->merge(['tabindex' => 0]);

    return $attributes->class([
      'mdc-card__primary-action'
    ]);
  }
}
