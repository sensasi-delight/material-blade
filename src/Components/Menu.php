<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * Material Design Menu Component
 *
 * @see https://m2.material.io/components/menus/web
 * @see https://github.com/material-components/material-components-web/tree/master/packages/mdc-menu
 */
class Menu extends Component
{
    /**
     * Create a new component instance.
     *
     * @param  bool  $open  Whether the menu is open by default
     * @param  string|null  $anchorCorner  Corner of the anchor to align the menu (TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT)
     * @param  bool  $fixed  Whether the menu is in a fixed position
     * @return void
     */
    public function __construct(
        public bool $open = false,
        public ?string $anchorCorner = null,
        public bool $fixed = false,
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
        return 'mbv::menu';
    }

    /**
     * Preprocess attributes for the menu container
     *
     * @return ComponentAttributeBag
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        return $attributes->merge([
            'data-mdc-auto-init' => 'MDCMenu',
        ])->class([
            'mdc-menu',
            'mdc-menu-surface',
            'mdc-menu--open' => $this->open,
            'mdc-menu-surface--fixed' => $this->fixed,
        ]);
    }
}
