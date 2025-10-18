<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use InvalidArgumentException;
use MaterialBlade\Components\FAB\Properties\Variant;
use MaterialBlade\Helper;

/**
 * @see https://mui.com/material-ui/react-floating-action-button/
 * @see https://m2.material.io/components/buttons-floating-action-button/web
 * @see https://github.com/material-components/material-components-web/blob/v14.0.0/packages/mdc-fab/README.md
 * @see https://material-components.github.io/material-components-web-catalog/#/component/fab
 */
class Fab extends Component
{
    private Variant $variant;

    public bool $isWithWrapper;

    public ?string $label;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $variant = 'regular',
        bool $withWrapper = false,
        ?string $label = null,

        private string $color = 'secondary',
        public string|array|null $icon = null,
    ) {
        $this->variant = Variant::fromString($variant);
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

        return $attributes->merge([
            'data-mdc-auto-init' => 'MDCRipple',
        ])->class([
            'mdc-fab',
            'mdc-fab--mini' => $this->variant === Variant::MINI,
            'mdc-fab--extended' => $this->label,
            'mdc-fab--touch' => $this->isWithWrapper,
        ]);
    }

    private function validateComponent()
    {
        throw_if(
            $this->variant === Variant::MINI && $this->label,
            new InvalidArgumentException('"mini" variant can\'t have a label')
        );

        throw_if(
            ! $this->icon && ! $this->label,
            new InvalidArgumentException('Please add the \'icon\' or \'label\' props')
        );
    }
}
