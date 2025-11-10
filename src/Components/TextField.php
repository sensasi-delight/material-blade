<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Components\TextField\Properties\Variant;

/**
 * Material Design Text Field Component
 *
 * @see https://m2.material.io/components/text-fields/web
 * @see https://github.com/material-components/material-components-web/tree/master/packages/mdc-textfield
 */
class TextField extends Component
{
    private Variant $variant;

    /**
     * Create a new component instance.
     *
     * @param  string  $variant  The variant of the text field (filled, outlined)
     * @param  string|null  $label  The label text for the text field
     * @param  string|null  $helperText  Helper text to display below the text field
     * @param  bool  $helperTextPersistent  Whether helper text should always be visible
     * @param  bool  $helperTextValidation  Whether helper text is a validation message
     * @param  bool  $textarea  Whether to render as textarea
     * @param  int|null  $rows  Number of rows for textarea
     * @param  int|null  $cols  Number of columns for textarea
     * @param  string|null  $prefix  Prefix text (e.g., currency symbol)
     * @param  string|null  $suffix  Suffix text (e.g., unit of mass)
     * @param  string|array|null  $leadingIcon  Leading icon
     * @param  string|array|null  $trailingIcon  Trailing icon
     * @param  bool  $characterCounter  Whether to show character counter
     * @param  bool  $endAligned  Whether to align text to end
     * @return void
     */
    public function __construct(
        string $variant = 'filled',
        public ?string $label = null,
        public ?string $helperText = null,
        public bool $helperTextPersistent = false,
        public bool $helperTextValidation = false,
        public bool $textarea = false,
        public ?int $rows = null,
        public ?int $cols = null,
        public ?string $prefix = null,
        public ?string $suffix = null,
        public string|array|null $leadingIcon = null,
        public string|array|null $trailingIcon = null,
        public bool $characterCounter = false,
        public bool $endAligned = false,
    ) {
        $this->variant = Variant::fromString($variant);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::text-field';
    }

    /**
     * Preprocess attributes for the text field container
     *
     * @return ComponentAttributeBag
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        return $attributes->merge([
            'data-mdc-auto-init' => 'MDCTextField',
        ])->class([
            'mdc-text-field',
            'mdc-text-field--filled' => $this->variant === Variant::FILLED,
            'mdc-text-field--outlined' => $this->variant === Variant::OUTLINED,
            'mdc-text-field--textarea' => $this->textarea,
            'mdc-text-field--disabled' => $attributes->has('disabled'),
            'mdc-text-field--no-label' => ! $this->label,
            'mdc-text-field--with-leading-icon' => $this->leadingIcon !== null,
            'mdc-text-field--with-trailing-icon' => $this->trailingIcon !== null,
            'mdc-text-field--end-aligned' => $this->endAligned,
        ]);
    }

    /**
     * Get the input element type
     */
    public function getInputElement(): string
    {
        return $this->textarea ? 'textarea' : 'input';
    }

    /**
     * Check if this is outlined variant
     */
    public function isOutlined(): bool
    {
        return $this->variant === Variant::OUTLINED;
    }

    /**
     * Check if helper line should be shown
     */
    public function hasHelperLine(): bool
    {
        return $this->helperText !== null || $this->characterCounter;
    }
}
