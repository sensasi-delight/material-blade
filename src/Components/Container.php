<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Container extends Component
{
    public string $maxWidth;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $maxWidth = 'md'
    ) {
        $this->maxWidth = $maxWidth;

        $this->validateProps();
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::_plain-div';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        return $attributes->class([
            'mbc-container',
            'mbc-container--'.$this->maxWidth,
        ]);
    }

    private function validateProps()
    {
        $this->validateMaxWidth($this->maxWidth);
    }

    private function validateMaxWidth(string $maxWidth)
    {
        $allowedMaxWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
        if (! in_array($maxWidth, $allowedMaxWidths)) {
            throw new \Exception('Invalid max width value. Allowed values are: '.implode(', ', $allowedMaxWidths));
        }
    }
}
