<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Components\Card\Enums\Variant;

/**
 * @property Variant $variant
 *
 * @see https://mui.com/material-ui/react-card/
 * @see https://m2.material.io/components/cards
 * @see https://material-components.github.io/material-components-web-catalog/#/component/elevation
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-elevation
 * @see https://material-components.github.io/material-components-web-catalog/#/component/card
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-card
 */
class Card extends Component
{
    public Variant $variant = Variant::ELEVATED;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        ?string $variant = null
    ) {
        if ($variant) {
            $this->variant = Variant::from($variant);
        }
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

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        return $attributes->class([
            'mdc-card',
            'mdc-card--outlined' => $this->variant === Variant::OUTLINED,
        ]);
    }
}
