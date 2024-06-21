<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * @see https://m2.material.io/develop/web/supporting/layout-grid
 * @see https://material-components.github.io/material-components-web-catalog/#/component/layout-grid
 * @see https://mui.com/material-ui/react-grid2/
 */
class Grid extends Component
{
    private bool $isContainer;
    private int $colSize;
    private string $align;
    private float $padding;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        bool $container = false,
        float $padding = 0,
        int $colSize = 4,
        string $align = null
    ) {
        $this->isContainer = $container;
        $this->colSize = $colSize;
        $this->align = $align ?? ($this->isContainer ? 'left' : 'top');
        $this->padding = $padding;

        $this->validateProps();
    }

    private function validateProps()
    {
        $this->validateColSizeProp();
        $this->validateAlignProp();
        $this->validatePaddingProp();
    }

    private function validateColSizeProp()
    {
        if ($this->colSize < 1 || $this->colSize > 12) {
            throw new \Exception('Column size must be between 1 and 12');
        }
    }

    private function validateAlignProp()
    {
        $itemValidAlign = ['top', 'middle', 'bottom'];
        $containerValidAlign = ['left', 'right', 'center'];

        if (!in_array($this->align, $this->isContainer ? $containerValidAlign : $itemValidAlign)) {
            throw new \Exception('Invalid align property, must be one of: ' . implode(', ', $this->isContainer ? $containerValidAlign : $itemValidAlign));
        }
    }

    private function validatePaddingProp()
    {
        if ($this->padding < 0) {
            throw new \Exception('Padding must be a positive number');
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        if ($this->isContainer) {
            return 'mbv::grid.container';
        }

        return 'mbv::grid.item';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        return $attributes->style([
            'padding: ' . ($this->padding * 16) . 'px',
        ])->class(
            $this->isContainer ? [
                'mdc-layout-grid',
                'mdc-layout-grid--align-' . $this->align,
            ] : [
                'mdc-layout-grid__cell',
                'mdc-layout-grid__cell--span-' . $this->colSize,
                'mdc-layout-grid__cell--align-' . $this->align,
            ]
        );
    }
}
