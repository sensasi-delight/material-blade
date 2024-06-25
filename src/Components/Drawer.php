<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Components\Drawer\Properties\Variant;

/**
 * @see https://mui.com/material-ui/react-drawer/
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-drawer
 * @see https://m2.material.io/components/navigation-drawer
 * @see https://material-components.github.io/material-components-web-catalog/#/component/drawer
 */
class Drawer extends Component
{
    private Variant $variant;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $variant = Variant::PERMANENT->value,

        public ?string $title = null,
        public ?string $subtitle = null,
    ) {
        $this->variant = Variant::fromString($variant);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::drawer';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes): ComponentAttributeBag
    {
        if ($this->variant !== Variant::PERMANENT) {
            $attributes->setAttributes([
                'data-mdc-auto-init' => 'MDCDrawer',
            ]);
        }

        return $attributes->style([
            'height: auto',
            'border-left-width: 1px',
            'border-left-style: solid',
        ])->class([
            'mdc-drawer',
            'mdc-drawer--modal' => $this->variant === Variant::MODAL,
            'mdc-drawer--dismissible' => $this->variant === Variant::DISMISSIBLE,
        ]);
    }
}
