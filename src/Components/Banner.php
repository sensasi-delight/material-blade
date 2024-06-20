<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

class Banner extends Component
{
    public string $text;
    public ?string $icon;
    public ?string $actions;
    public bool $isFixed;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $text,
        bool $fixed = false,
        ?string $icon = null,
        ?string $actions = null
    ) {
        $this->text = $text;
        $this->icon = $icon;
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
            'role' => 'banner'
        ]);

        return $attributes->class([
            'mdc-banner mdc-banner--mobile-stacked mdc-banner--centered'
        ]);
    }
}
