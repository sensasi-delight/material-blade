<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * @see https://mui.com/material-ui/react-icon-button/
 * @see https://m2.material.io/develop/web/components/buttons/icon-buttons
 * @see https://github.com/material-components/material-components-web/blob/v14.0.0/packages/mdc-icon-button/README.md
 * @see https://material-components.github.io/material-components-web-catalog/#/component/icon-button
 */
class IconButton extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public string|array $icon,
        public bool $withWrapper = false,
        public bool $disableRipple = false,
        public string|array|null $offIcon = null,
        public string $color = 'var(--mdc-theme-text-secondary-on-background)',
        public ?string $toggle = null,

        // only on view
        public string $offColor = 'var(--mdc-theme-text-secondary-on-background)'

        // string $size = null
    ) {}

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::icon-button';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $attributes = $attributes->class([
            'mdc-icon-button',
            'mdc-icon-button--touch' => $this->withWrapper,
            'mdc-icon-button--on' => $this->toggle === 'on',
        ]);

        $attributes = $attributes->merge(['aria-label' => $this->icon]);

        if ($this->toggle !== null) {
            $attributes = $attributes->merge(['aria-pressed' => $this->toggle]);
        }

        return $attributes;
    }
}
