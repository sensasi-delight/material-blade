<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Components\Alert\Properties\Severity;
use MaterialBlade\Components\Alert\Properties\Variant;
use MaterialBlade\Helper;

/**
 * @see https://mui.com/material-ui/react-alert/
 */
class Alert extends Component
{
    private string $cssColor;

    private Severity $severity = Severity::SUCCESS;

    private Variant $variant = Variant::STANDARD;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        ?string $severity = null,
        ?string $color = null,
        ?string $variant = null,

        private string|array|null $icon = null,
        public ?string $title = null,
    ) {
        if ($variant) {
            $this->variant = Variant::fromString($variant);
        }

        if ($severity) {
            $this->severity = Severity::fromString($severity);
        }

        $this->cssColor = Helper::getColor($color ?? $this->severity->value);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::alert';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes): ComponentAttributeBag
    {
        if ($this->variant === Variant::FILLED) {
            return $attributes->style([
                "background-color: {$this->cssColor}",
                'color: var(--mdc-theme-surface)',
                'border: 0px',
            ])->class('mdc-typography--body1');
        }

        if ($this->variant === Variant::OUTLINED) {
            return $attributes->style([
                'background-color: transparent',
                "color: {$this->cssColor}",
                "border: 1px solid color-mix(in srgb, {$this->cssColor} 70%, var(--mdc-theme-surface))",
            ])->class('mdc-typography--body1');
        }

        return $attributes->style([
            "background-color: color-mix(in srgb, {$this->cssColor} 25%, var(--mdc-theme-surface))",
            "color: {$this->cssColor}",
            'border: 0px',
        ])->class('mdc-typography--body1');
    }

    public function getIcon(): string|array
    {
        return $this->icon ?? match ($this->severity) {
            Severity::ERROR => ['error', 'outlined'],
            Severity::INFO => ['info', 'outlined'],
            Severity::SUCCESS => ['check_circle', 'outlined'],
            Severity::WARNING => ['warning', 'outlined'],
        };
    }
}
