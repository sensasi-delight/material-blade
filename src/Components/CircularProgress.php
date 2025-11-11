<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

/**
 * Material Blade Circular Progress Component
 *
 * @see https://m2.material.io/components/progress-indicators
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-circular-progress
 * @see https://github.com/sensasi-delight/material-blade
 * @see https://material-components.github.io/material-components-web-catalog/#/component/circular-progress-indicator
 */
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
        return 'mbv::circular-progress';
    }

    private function validateComponent(ComponentAttributeBag $attributes)
    {
        if (! $attributes->has('aria-label')) {
            throw new \Exception('Progress bars is conform to the WAI-ARIA Progressbar Specification, the \'aria-label\' attribute is required');
        }

        if ($this->value !== null && ($this->value < 0 || $this->value > 1)) {
            throw new \Exception('The "value" attribute must be between 0 and 1');
        }
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $this->validateComponent($attributes);

        $attributes = $attributes->merge([
            'role' => 'progressbar',
            'data-mdc-auto-init' => 'MDCCircularProgress',
            'data-value' => $this->value ?: '0',
        ]);

        if ($this->color !== 'primary') {
            $attributes = $attributes->merge(['style' => $attributes->prepends('--mdc-theme-primary: '.Helper::getColor($this->color))]);
        }

        return $attributes->class([
            'mdc-circular-progress',
            'mdc-circular-progress--indeterminate' => $this->value === null,
        ]);
    }
}
