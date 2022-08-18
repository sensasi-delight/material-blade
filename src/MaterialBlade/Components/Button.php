<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Button extends Component
{
  public ?string $color;
  public ?string $endIcon;
  public bool $isFullwidth;
  public ?string $label;
  public bool $isRipple;
  // public string $size;
  public ?string $startIcon;
  public ?string $variant;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    ?string $color = null,
    ?string $endIcon = null,
    bool $fullwidth = false,
    ?string $label = null,
    ?bool $ripple = true,
    // string $size = null,
    ?string $startIcon = null,
    string $variant = 'contained'
  ) {
    $this->color = $color;
    $this->endIcon = $endIcon;
    $this->isFullwidth = $fullwidth;
    $this->label = $label;
    $this->isRipple = $ripple;
    // $this->size = $size;
    $this->startIcon = $startIcon;
    $this->variant = $variant;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return function (array $data) {
      $data['attributes'] = $this->attributesPreprocess($data['attributes']);

      return 'MaterialBlade::button';
    };
  }

  public function conponentValidation(array $data)
  {
    if (! $data['attributes']->has('label') && $data['slot']->isEmpty()) {
      throw new \Exception('Please fill the "label" attribute or the component slot', 1);
    }
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {

    if ($this->color) {
      $attributes = $attributes->class([
        'materialblade-theme--' . $this->color
      ]);
    }

    return $attributes->class([
      'mdc-button',
      'mdc-button--touch',
      'mdc-button--raised' => $this->variant === 'contained',
      'mdc-button--unelevated' => $this->variant === 'unelevated',
      'mdc-button--outlined' => $this->variant === 'outlined',
      'mdc-button--icon-leading' => $this->startIcon ? true : false,
      'mdc-button--icon-trailing' => $this->endIcon ? true : false,
      'fullwidth' => $this->isFullwidth,
    ]);
  }
}
