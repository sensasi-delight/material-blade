<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * Material Design Radio Button Component
 *
 * @see https://m2.material.io/components/radio-buttons/web
 * @see https://github.com/material-components/material-components-web/tree/master/packages/mdc-radio
 */
class Radio extends Component
{
    /**
     * Create a new component instance.
     *
     * @param  string  $color  The color theme (primary, secondary, etc.)
     * @param  string|null  $label  The label text for the radio button
     * @param  bool  $touch  Whether to add touch target wrapper for 48x48 touch target
     * @return void
     */
    public function __construct(
        public string $color = 'secondary',
        public ?string $label = null,
        public bool $touch = false,
    ) {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::radio';
    }

    /**
     * Preprocess attributes for the radio input
     *
     * @return ComponentAttributeBag
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        return $attributes->merge([
            'type' => 'radio',
        ])->class([
            'mdc-radio__native-control',
        ]);
    }
}
