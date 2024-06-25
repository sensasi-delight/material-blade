<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Components\MbcList\Enum\Variant;

/**
 * @see https://mui.com/material-ui/react-list/
 * @see https://m2.material.io/components/lists/
 * @see https://material-components.github.io/material-components-web-catalog/#/component/list
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-list
 */
class MbcList extends Component
{
    private bool $isDense;

    private Variant $variant = Variant::SINGLE_LINE;

    public string $htmlElement;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        bool $dense = false,

        string $variant = null,
        string $element = null,

        public bool $disableRipple = false,
        public ?string $icon = null
    ) {
        $this->isDense = $dense;

        if ($variant) {
            $this->variant = Variant::from($variant);
        }

        $this->htmlElement = $element ?? 'ul';
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
        return $attributes->merge([
            'data-mdc-auto-init' => 'MDCList'
        ])->class([
            'mdc-deprecated-list',
            'mdc-deprecated-list--two-line' => $this->variant === Variant::TWO_LINE,
            'mdc-deprecated-list--dense' => $this->isDense,
        ]);
    }
}
