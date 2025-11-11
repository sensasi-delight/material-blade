<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use InvalidArgumentException;
use MaterialBlade\Components\Alert\Properties\Severity;
use MaterialBlade\Components\Alert\Properties\Variant;
use MaterialBlade\Helper;

/**
 * Alert Component
 *
 * Displays an alert message with optional icon, title, and customizable styling.
 * Supports different severity levels, variants, and Material Design elevation.
 *
 * @property Severity $severity The severity level of the alert (success, info, warning, error)
 * @property Variant $variant The visual variant (standard, filled, outlined)
 * @property string $cssColor The computed CSS color value
 * @property string|array|null $icon Custom icon or auto-selected based on severity
 * @property string|null $title Optional title text
 * @property int $elevation Material Design elevation level (0-24)
 *
 * @see https://mui.com/material-ui/react-alert/
 * @see https://m2.material.io/design/components/elevation.html
 */
class Alert extends Component
{
    private string $cssColor;

    private Severity $severity = Severity::SUCCESS;

    private Variant $variant = Variant::STANDARD;

    /**
     * Create a new component instance.
     *
     * @param  string|null  $severity  The severity level: 'success', 'info', 'warning', or 'error'
     * @param  string|null  $color  Custom color (theme color or CSS color value)
     * @param  string|null  $variant  Display variant: 'standard', 'filled', or 'outlined'
     * @param  string|array|null  $icon  Custom icon name or [name, variant] array
     * @param  string|null  $title  Optional title text displayed above the message
     * @param  int  $elevation  Material Design elevation level (0-24)
     * @return void
     *
     * @throws InvalidArgumentException If elevation is out of range
     */
    public function __construct(
        ?string $severity = null,
        ?string $color = null,
        ?string $variant = null,

        private string|array|null $icon = null,
        public ?string $title = null,
        private int $elevation = 0,
    ) {
        // Validate elevation range
        if ($this->elevation < 0 || $this->elevation > 24) {
            throw new InvalidArgumentException(
                "Elevation must be between 0 and 24, got {$this->elevation}. ".
                'See Material Design elevation specification: https://m2.material.io/design/environment/elevation.html'
            );
        }

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

    /**
     * Preprocess component attributes to apply styling and classes.
     *
     * Applies appropriate styling based on variant (standard, filled, outlined),
     * adds Material Design elevation classes, and sets typography.
     *
     * @param  ComponentAttributeBag  $attributes  Component attributes
     * @return ComponentAttributeBag Processed attributes with classes and styles
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes): ComponentAttributeBag
    {
        $attributes = $attributes->class([
            "mdc-elevation--z{$this->elevation}" => $this->elevation > 0 && $this->elevation <= 24,
        ]);

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

    /**
     * Get the icon to display in the alert.
     *
     * Returns custom icon if provided, otherwise returns default icon
     * based on severity level with 'outlined' variant.
     *
     * @return string|array Icon name as string or [name, variant] array
     */
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
