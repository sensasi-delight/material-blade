<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

class CircularProgress extends Component
{
  public string $color;
  public string $size;
  public ?float $value;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    string $color = 'primary',
    string $size = '48px',
    ?float $value = null
  ) {
    $this->color = $color;
    $this->value = $value;
    $this->size = $size;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    return view('mbv::circular-progress');
  }

  private function validateComponent(ComponentAttributeBag $attributes)
  {
    if (!$attributes->has('aria-label')) {
      throw new \Exception('Progress bars is conform to the WAI-ARIA Progressbar Specification, the \'aria-label\' attribute is required');
    }
  }

  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    $this->validateComponent($attributes);

    $attributes = $attributes->merge([
      'role' => 'progressbar',
      'aria-valuemin' => 0,
      'aria-valuemax'=> 1,
      'aria-valuenow' => $this->value ?: 0
    ]);

    if ($this->color !== 'primary') {
      $attributes = $attributes->merge(['style' => $attributes->prepends('--mdc-theme-primary: ' . Helper::getColor($this->color))]);
    }

    return $attributes->class([
      'mdc-circular-progress',
      'mdc-circular-progress--indeterminate' => $this->value === null,
    ]);
  }
}
