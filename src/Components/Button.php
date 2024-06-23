<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use Illuminate\View\ComponentSlot;
use MaterialBlade\Helper;

class Button extends Component
{
    public string $color;
    public bool $isFullwidth;
    public bool $isRipple;
    public bool $withWrapper;
    public ?string $endIcon;
    public ?string $label;
    // public string $size;
    public ?string $startIcon;
    public ?string $variant;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        bool $fullwidth = false,
        // string $size = null,
        string $variant = 'text',
        bool $withWrapper = false,
        string $color = 'primary',
        bool $disableRipple = false,
        ?string $endIcon = null,
        ?string $label = null,
        ?string $startIcon = null
    ) {
        $this->color = $color;
        $this->endIcon = $endIcon;
        $this->isFullwidth = $fullwidth;
        $this->label = $label;
        $this->isRipple = !$disableRipple;
        $this->startIcon = $startIcon;
        $this->variant = $variant;
        $this->withWrapper = $withWrapper;
        // $this->size = $size;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::button';
    }

    public function validateComponent(ComponentSlot $slot)
    {
        if (!$this->label && $slot->isEmpty()) {
            throw new \Exception('Please fill the "label" attribute or the component slot', 1);
        }
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        if ($this->color !== 'primary') {
            $attributes = $attributes->merge([
                'style' => $attributes->prepends('--mdc-theme-primary: ' . Helper::getColor($this->color))
            ]);
        }

        return $attributes->class([
            'mdc-button',
            'mdc-button--touch' => $this->withWrapper,
            'mdc-button--' . ($this->variant) => $this->variant !== 'text' && in_array($this->variant, ['raised', 'unelevated', 'outlined']),
            'mdc-button--icon-leading' => $this->startIcon ? true : false,
            'mdc-button--icon-trailing' => $this->endIcon ? true : false,
            'fullwidth' => $this->isFullwidth,
        ]);
    }
}
