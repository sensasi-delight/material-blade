<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

class TabBar extends Component
{
    public string $color;

    public bool $isFadeIndicator;

    public bool $isIconOnly;

    public bool $isStacked;

    public bool $isLightText;

    public ?int $activeTabNo;

    public ?int $elevation;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        public array $tabs,
        string $color = 'initial',
        bool $fadeIndicator = false,
        bool $stacked = false,
        bool $lightText = false,
        ?int $activeTabNo = null,
        ?int $elevation = null,

        bool $iconOnly = false,
        public string|array|null $indicatorIcon = null
    ) {
        $this->color = $color;
        $this->isLightText = $lightText;
        $this->isFadeIndicator = $fadeIndicator;
        $this->isIconOnly = $iconOnly;
        $this->isStacked = $stacked;
        $this->activeTabNo = $activeTabNo;
        $this->elevation = $elevation;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::tab-bar';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        if ($this->color !== 'initial') {
            $attributes = $attributes->merge(['style' => $attributes->prepends('background-color: '.Helper::getColor($this->color))]);
        }

        $attributes = $attributes->merge(['role' => 'tablist']);

        return $attributes->class([
            'mdc-tab-bar',
            'mdc-elevation--z'.$this->elevation => $this->elevation,
        ]);
    }
}
