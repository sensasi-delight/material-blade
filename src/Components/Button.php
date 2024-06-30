<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use Illuminate\View\ComponentSlot;
use InvalidArgumentException;
use MaterialBlade\Components\Button\Properties\Variant;
use MaterialBlade\Helper;

class Button extends Component
{
    private Variant $variant;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $variant = 'unelevated',
        public bool $withWrapper = false,
        public string|array|null $startIcon = null,
        public string|array|null $endIcon = null,

        private string $color = 'primary',
        private bool $fullwidth = false,

        // on view only
        public bool $disableRipple = false,
        public ?string $label = null,
        private ?string $htmlTag = null,

        // private string $size = null,
    ) {
        $this->label = $label;
        $this->variant = Variant::fromString($variant);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::button';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes, ComponentSlot $slot)
    {
        $this->validateSlot($slot);

        if ($this->color !== 'primary') {
            $attributes = $attributes->merge([
                'style' => $attributes->prepends('--mdc-theme-primary: '.Helper::getColor($this->color)),
            ]);
        }

        return $attributes->merge([
            'data-mdc-auto-init' => 'MDCRipple',
            'aria-label' => $this->label ?? $slot->__toString(),
        ])->class([
            'mdc-button',
            'mdc-button--touch' => $this->withWrapper,
            'mdc-button--'.($this->variant->value) => $this->variant !== Variant::TEXT,
            'mdc-button--icon-leading' => (bool) $this->startIcon,
            'mdc-button--icon-trailing' => (bool) $this->endIcon,
            'fullwidth' => $this->fullwidth,
        ]);
    }

    public function getHtmlTag(ComponentAttributeBag $attributes)
    {
        if ($this->htmlTag) {
            return $this->htmlTag;
        }

        return $attributes->has('href') ? 'a' : 'button';
    }

    private function validateSlot(ComponentSlot $slot)
    {
        throw_if(
            ! $this->label && $slot->isEmpty(),
            new InvalidArgumentException('Please fill the "label" attribute or the component slot')
        );

        throw_if(
            $this->label && $slot->hasActualContent(),
            new InvalidArgumentException('You cannot use both "label" attribute and the component slot')
        );
    }
}
