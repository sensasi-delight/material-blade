<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * @see https://mui.com/material-ui/react-list/
 * @see https://m2.material.io/components/lists/
 * @see https://material-components.github.io/material-components-web-catalog/#/component/list
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-list
 */
class ListItem extends Component
{
    private bool $isActivated;
    private bool $isDisabled;

    public string $htmlElement;
    public ?string $primaryText;
    public ?string $secondaryText;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        bool $activated = false,
        bool $disabled = false,

        string $primary = null,
        string $secondary = null,

        string $element = null,

        public ?string $icon = null
    ) {
        $this->isActivated = $activated;
        $this->isDisabled = $disabled;

        $this->primaryText = $primary;
        $this->secondaryText = $secondary;

        $this->htmlElement = $element ?? 'li';
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::list.item';
    }

    /**
     * All available classes are not yet implemented
     * 
     * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-list#style-customization
     */
    public function attributesPreprocess(
        ComponentAttributeBag $attributes,
        bool $disableRipple
    ): ComponentAttributeBag {
        if (!$disableRipple) {
            $attributes = $attributes->merge([
                'data-mdc-auto-init' => 'MDCRipple'
            ]);
        }

        return $attributes->class([
            'mdc-deprecated-list-item',
            'mdc-deprecated-list-item--activated' => $this->isActivated,
            'mdc-deprecated-list-item--disabled' => $this->isDisabled,
        ]);
    }
}
