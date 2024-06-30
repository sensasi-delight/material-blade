<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Banner extends Component
{
    public string $text;

    public ?string $actions;

    public bool $isFixed;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $text,
        bool $fixed,
        ?string $actions,
        public string|array|null $icon
    ) {
        $this->text = $text;
        $this->actions = $actions;
        $this->isFixed = $fixed;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::banner';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $attributes = $attributes->merge([
            'role' => 'banner',
        ]);

        return $attributes->class([
            'mdc-banner mdc-banner--mobile-stacked mdc-banner--centered',
        ]);
    }
}
