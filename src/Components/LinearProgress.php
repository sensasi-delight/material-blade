<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

/**
 * Material Blade Linear Progress Component
 *
 * @see https://m2.material.io/components/progress-indicators
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-linear-progress
 * @see https://github.com/sensasi-delight/material-blade
 * @see https://material-components.github.io/material-components-web-catalog/#/component/linear-progress-indicator
 */
class LinearProgress extends Component
{
    public string $color;

    public ?float $value;

    public ?float $bufferValue;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $color = 'primary',
        ?float $value = null,
        ?float $bufferValue = null
    ) {
        $this->color = $color;
        $this->value = $value;
        $this->bufferValue = $bufferValue;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::linear-progress';
    }

    private function validateComponent(ComponentAttributeBag $attributes)
    {
        if (! $attributes->has('aria-label')) {
            throw new \Exception('Progress bars is conform to the WAI-ARIA Progressbar Specification, the \'aria-label\' attribute is required');
        }

        if ($this->value !== null && ($this->value < 0 || $this->value > 1)) {
            throw new \Exception('The "value" attribute must be between 0 and 1');
        }

        if ($this->bufferValue !== null && ($this->bufferValue < 0 || $this->bufferValue > 1)) {
            throw new \Exception('The "bufferValue" attribute must be between 0 and 1');
        }
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $this->validateComponent($attributes);

        $attributes = $attributes->merge([
            'role' => 'progressbar',
            'data-mdc-auto-init' => 'MDCLinearProgress',
            'data-value' => $this->value ?: 0,
        ]);

        if ($this->bufferValue !== null) {
            $attributes = $attributes->merge([
                'data-buffer-value' => $this->bufferValue,
            ]);
        }

        if ($this->color !== 'primary') {
            $attributes = $attributes->merge(['style' => $attributes->prepends('--mdc-theme-primary: '.Helper::getColor($this->color))]);
        }

        return $attributes->class([
            'mdc-linear-progress',
            'mdc-linear-progress--indeterminate' => $this->value === null,
        ]);
    }
}
