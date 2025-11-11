<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

/**
 * @see https://mui.com/material-ui/react-switch/
 * @see https://m2.material.io/components/switches/web
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-switch
 * @see https://material-components.github.io/material-components-web-catalog/#/component/switch
 */
class SwitchToggle extends Component
{
    public string $color;

    public bool $isOn;

    public ?string $offIcon;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $color = 'primary',
        bool $on = false,
        ?string $offIcon = null,

        public string|array|null $icon = null,
    ) {
        $this->color = $color;
        $this->isOn = $on;
        $this->offIcon = $offIcon;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::switch';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $mergeAttributes = [
            'data-mdc-auto-init' => 'MDCSwitch',
            'type' => 'button',
            'role' => 'switch',
            'aria-checked' => $this->isOn,
        ];

        if ($this->color !== 'primary') {
            $mergeAttributes['style'] = $attributes->prepends('--mdc-theme-primary: '.Helper::getColor($this->color));
        }

        $attributes = $attributes->merge($mergeAttributes);

        return $attributes->class([
            'mdc-switch',
            'mdc-switch--'.($this->isOn ? 'selected' : 'unselected'),
        ]);
    }
}
