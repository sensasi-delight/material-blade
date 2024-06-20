<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class CardHeader extends Component
{
  public string $title;
  public string $titleElement;
  public string $subtitle;
  public string $subtitleElement;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    string $title,
    ?string $subtitle = null,
    string $titleElement = 'div',
    string $subtitleElement = 'div'
  ) {
    $this->title = $title;
    $this->subtitle = $subtitle;
    $this->titleElement = $titleElement;
    $this->subtitleElement = $subtitleElement;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('mbv::card-header');
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    return $attributes->class([
      'mdc-card__header'
    ]);
  }
}
