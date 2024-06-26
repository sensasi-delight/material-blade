<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

class FAB extends Component
{
    public string $variant;

    public bool $isWithWrapper;

    public ?string $iconString;

    public ?string $color;

    public ?string $label;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $variant = 'regular',
        string $color = 'secondary',
        bool $withWrapper = false,
        ?string $icon = null,
        ?string $label = null
    ) {
        $this->iconString = $icon;
        $this->variant = $variant;
        $this->color = $color;
        $this->isWithWrapper = $withWrapper;
        $this->label = $label;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::fab';
    }

    public function validateComponent()
    {
        if ($this->variant === 'mini' && $this->label) {
            throw new \Exception('"mini" variant can\'t have a label', 1);
        }

        if (! $this->iconString && ! $this->label) {
            throw new \Exception('please add the \'icon\' or \'label\' props', 1);
        }
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $this->validateComponent();

        $attributes = $attributes->merge([
            'aria-label' => ucfirst(Helper::parseIconString($this->iconString)[0]),
        ]);

        if ($this->color !== 'secondary') {
            $attributes = $attributes->merge(['style' => $attributes->prepends('--mdc-theme-secondary: '.Helper::getColor($this->color))]);
        }

        return $attributes->class([
            'mdc-fab',
            'mdc-fab--mini' => $this->variant === 'mini',
            'mdc-fab--extended' => $this->label,
            'mdc-fab--touch' => $this->isWithWrapper,
        ]);
    }
}
