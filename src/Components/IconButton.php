<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class IconButton extends Component
{
    public string $icon;

    public bool $isRipple;

    public bool $isWithWrapper;

    public ?string $color;

    public ?bool $isToggle;

    public ?string $offIcon;

    public ?string $offColor;

    // public $size;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $icon,
        string $color = 'var(--mdc-theme-text-secondary-on-light)',
        string $offColor = 'var(--mdc-theme-text-secondary-on-light)',
        bool $disableRipple = false,
        bool $withWrapper = false,
        ?string $toggle = null,
        ?string $offIcon = null
        // string $size = null
    ) {
        $this->color = $color;
        $this->isToggle = is_null($toggle) ? null : ($toggle == 'on' ? true : false);
        $this->icon = $icon;
        $this->offIcon = $offIcon;
        $this->offColor = $offColor;
        $this->isRipple = ! $disableRipple;
        $this->isWithWrapper = $withWrapper;
        // $this->size = $size;
    }

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
            'mdc-icon-button--touch' => $this->isWithWrapper,
            'mdc-icon-button--on' => $this->isToggle,
        ]);

        $attributes = $attributes->merge(['aria-label' => $this->icon]);

        if (! is_null($this->isToggle)) {
            $attributes = $attributes->merge(['aria-pressed' => $this->isToggle]);
        }

        return $attributes;
    }
}
