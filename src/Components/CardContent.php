<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class CardContent extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct() {}

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
            'mdc-card__content',
        ]);
    }
}
