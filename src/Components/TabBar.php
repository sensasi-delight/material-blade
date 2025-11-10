<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Helper;

/**
 * @see https://mui.com/material-ui/react-tabs/
 * @see https://m2.material.io/components/tabs/web
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-tab-bar
 * @see https://material-components.github.io/material-components-web-catalog/#/component/tabs
 */
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
        $mergeAttributes = [
            'data-mdc-auto-init' => 'MDCTabBar',
            'role' => 'tablist',
        ];

        if ($this->color !== 'initial') {
            $mergeAttributes['style'] = $attributes->prepends('background-color: '.Helper::getColor($this->color));
        }

        $attributes = $attributes->merge($mergeAttributes);

        return $attributes->class([
            'mdc-tab-bar',
            'mdc-elevation--z'.$this->elevation => $this->elevation,
        ]);
    }
}
