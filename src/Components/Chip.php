<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Chip extends Component
{
    public string $label;

    public bool $isSelected;

    public bool $isWithWrapper;

    public bool $isDisabled;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $label,
        bool $selected = false,
        bool $withWrapper = false,
        bool $disabled = false,

        public string|array|null $icon = null
    ) {
        $this->label = $label;
        $this->isSelected = $selected;
        $this->isWithWrapper = $withWrapper;
        $this->isDisabled = $disabled;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::chip';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $attributes = $attributes->merge(['role' => 'row']);

        return $attributes->class([
            'mdc-chip',
            'mdc-chip--selected' => $this->isSelected,
            'mdc-chip--touch' => $this->isWithWrapper,
        ]);
    }
}
