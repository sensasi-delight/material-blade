<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class IconButton extends Component
{
    public bool $isRipple;

    public bool $isWithWrapper;

    public ?string $color;

    public ?bool $isToggle;

    public ?string $offColor;

    // public $size;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $color,
        string $offColor,
        bool $disableRipple,
        bool $withWrapper,
        ?string $toggle,
        // string $size = null

        public string|array $icon,
        public string|array|null $offIcon = null
    ) {
        $this->color = $color;
        $this->isToggle = is_null($toggle) ? null : ($toggle == 'on' ? true : false);
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

        if (! is_null($this->isToggle)) {
            $attributes = $attributes->merge(['aria-pressed' => $this->isToggle]);
        }

        return $attributes;
    }
}
