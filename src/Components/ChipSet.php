<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * @see https://mui.com/material-ui/react-chip/
 * @see https://m2.material.io/components/chips/web
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-chips/deprecated
 * @see https://material-components.github.io/material-components-web-catalog/#/component/chips
 */
class ChipSet extends Component
{
    public string $variant;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $variant = 'basic'
    ) {
        $this->variant = $variant;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::chip-set';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $attributes = $attributes->merge([
            'data-mdc-auto-init' => 'MDCChipSet',
            'role' => 'grid',
        ]);

        return $attributes->class([
            'mdc-chip-set',
            'mdc-chip-set--'.$this->variant => $this->variant !== 'basic',
        ]);
    }
}
