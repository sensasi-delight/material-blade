<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use InvalidArgumentException;
use MaterialBlade\Helper;

class FAB extends Component
{
    public string $variant;

    public bool $isWithWrapper;

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
        ?string $label = null,

        public string|array|null $icon = null,
    ) {
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

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $this->validateComponent();

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

    private function validateComponent()
    {
        throw_if(
            $this->variant === 'mini' && $this->label,
            new InvalidArgumentException('"mini" variant can\'t have a label')
        );

        throw_if(
            ! $this->icon && ! $this->label,
            new InvalidArgumentException('Please add the \'icon\' or \'label\' props')
        );
    }
}
