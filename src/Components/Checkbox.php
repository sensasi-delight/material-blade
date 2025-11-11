<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * @see https://mui.com/material-ui/react-checkbox/
 * @see https://m2.material.io/components/checkboxes/web
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-checkbox
 * @see https://material-components.github.io/material-components-web-catalog/#/component/checkbox
 */
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

    public function wrapperAttributesPreprocess(ComponentAttributeBag $attributes)
    {
        return [
            'class' => 'mdc-checkbox '.($attributes->has('disabled') ? 'mdc-checkbox--disabled' : ''),
            'data-mdc-auto-init' => 'MDCCheckbox',
        ];
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $attributes = $attributes->merge(['type' => 'checkbox']);

        if ($this->isIndeterminate) {
            $attributes = $attributes->merge(['data-indeterminate' => 'true']);
        }

        return $attributes->class([
            'mdc-checkbox__native-control',
        ]);
    }
}
