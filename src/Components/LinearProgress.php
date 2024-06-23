<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

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
            'aria-valuemax' => 1,
            'aria-valuenow' => $this->value ?: 0
        ]);

        if ($this->bufferValue !== null) {
            $attributes = $attributes->merge([
                'data-buffer-value' => $this->bufferValue
            ]);
        }

        if ($this->color !== 'primary') {
            $attributes = $attributes->merge(['style' => $attributes->prepends('--mdc-theme-primary: ' . Helper::getColor($this->color))]);
        }

        return $attributes->class([
            'mdc-linear-progress',
            'mdc-linear-progress--indeterminate' => $this->value === null,
        ]);
    }
}
