<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Components\ListDivider\Properties\Variant;

/**
 * @see https://mui.com/material-ui/react-list/
 * @see https://m2.material.io/components/lists/
 * @see https://material-components.github.io/material-components-web-catalog/#/component/list
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-list
 */
class ListDivider extends Component
{
    public string $htmlElement;
    private Variant $variant;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $element = null,
        string $variant = null
    ) {
        $this->htmlElement = $element ?? 'li';

        $this->variant = $variant
            ? Variant::fromString($variant)
            : Variant::STANDARD;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::_plain-div';
    }

    /**
     * All available classes are not yet implemented
     * 
     * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-list#style-customization
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes): ComponentAttributeBag
    {
        return $attributes->class([
            'mdc-deprecated-list-divider',
            'mdc-deprecated-list-divider--padded' => $this->variant === Variant::PADDED,
        ]);
    }
}
