<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class CardMedia extends Component
{

  public string $src;
  public string $variant;
  
  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(string $src, string $variant = '16-9')
  {
    $this->src = $src;
    $this->variant = $variant;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('MaterialBlade::card-media');
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    $attributes = $attributes->merge(['style' => $attributes->prepends('background-image: url(\'' .  $this->src . '\');')]);
    
    return $attributes->class([
      'mdc-card__media',
      'mdc-card__media--' . $this->variant
    ]);
  }
}
