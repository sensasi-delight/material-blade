<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Checkbox extends Component
{
    public ?string $color;
    public ?string $label;
    public bool $isIndeterminate;
    // public bool $isDisabled;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        bool $indeterminate = false,
        string $color = 'primary',
        ?string $label = null
    ) {
        $this->color = $color;
        $this->label = $label;
        $this->isIndeterminate = $indeterminate;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::checkbox';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $attributes = $attributes->merge(['type' => 'checkbox']);

        if ($this->isIndeterminate) {
            $attributes = $attributes->merge(['data-indeterminate' => 'true']);
        }

        return $attributes->class([
            'mdc-checkbox__native-control'
        ]);
    }
}
