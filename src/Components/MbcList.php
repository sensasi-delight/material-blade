<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Components\MbcList\Enum\Variant;

/**
 * @see https://mui.com/material-ui/react-list/
 * @see https://m2.material.io/components/lists/
 * @see https://material-components.github.io/material-components-web-catalog/#/component/list
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-list
 */
class MbcList extends Component
{
    private bool $isWrapper;
    private bool $isDivider;
    private bool $isDense;
    private Variant $variant = Variant::SINGLE_LINE;

    public string $htmlElement;
    public ?string $primaryText;
    public ?string $secondaryText;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        bool $wrapper = false,
        bool $divider = false,
        bool $dense = false,

        string $primary = null,
        string $secondary = null,

        string $variant = null,
        string $element = null,

        public bool $disableRipple = false,
        public ?string $icon = null
    ) {
        $this->isWrapper = $wrapper;
        $this->isDivider = $divider;
        $this->isDense = $dense;

        $this->primaryText = $primary;
        $this->secondaryText = $secondary;

        if ($variant) {
            $this->variant = Variant::from($variant);
        }

        $this->htmlElement = $element ?? ($this->isWrapper ? 'ul' : 'li');

        $this->validateProps();
    }

    function validateProps()
    {
        if ($this->isWrapper && $this->isDivider) {
            throw new \Exception('List cannot be a wrapper and a divider at the same time');
        }

        if ($this->isDivider && $this->isDense) {
            throw new \Exception('Divider cannot be dense');
        }

        if ($this->isDivider && $this->variant === Variant::TWO_LINE) {
            throw new \Exception('Divider cannot have two lines');
        }

        if (!$this->isDivider && $this->variant === Variant::PADDED) {
            throw new \Exception('Only divider can be padded');
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        if ($this->isWrapper || $this->isDivider) {
            return 'mbv::_plain-div';
        }

        return 'mbv::list.item';
    }

    /**
     * All available classes are not yet implemented
     * 
     * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-list#style-customization
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes): ComponentAttributeBag
    {
        if ($this->isDivider) {
            return $attributes->class([
                'mdc-deprecated-list-divider',
                'mdc-deprecated-list-divider--padded' => $this->variant === Variant::PADDED,
            ]);
        }

        if ($this->isWrapper) {
            return $attributes->class([
                'mdc-deprecated-list',
                'mdc-deprecated-list--two-line' => $this->variant === Variant::TWO_LINE,
                'mdc-deprecated-list--dense' => $this->isDense,
            ]);
        }

        return $attributes->class([
            'mdc-deprecated-list-item',
        ]);
    }
}
