<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * Class Banner
 *
 * @property bool $isFixed Flag to determine if the banner is fixed
 * @property bool $isOpen Flag to determine if the banner is open
 * @property string|array|null $icon The icon to display in the banner
 */
class Banner extends Component
{
    public bool $isFixed;

    public bool $isOpen;

    /**
     * Create a new component instance.
     *
     * @param  bool  $fixed  Flag to determine if the banner is fixed
     * @param  bool  $open  Flag to determine if the banner is open
     * @param  string|array|null  $icon  The icon to display in the banner
     * @return void
     */
    public function __construct(
        bool $fixed = false,
        bool $open = false,
        public string|array|null $icon = null,
    ) {
        $this->isFixed = $fixed;
        $this->isOpen = $open;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return function (array $data): string {
            throw_if(
                $data['slot']->isEmpty(),
                new \InvalidArgumentException('<mbc::banner /> component requires a child element'));

            return 'mbv::banner';
        };
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $attributes = $attributes->merge([
            'data-mdc-auto-init' => 'MDCBanner',
            'role' => 'banner',
        ]);

        return $attributes->class([
            'mdc-banner mdc-banner--mobile-stacked mdc-banner--centered',
            'mbc-banner--open' => $this->isOpen,
        ]);
    }
}
