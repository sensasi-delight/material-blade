<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * Material Design Image List Item Component
 *
 * @see https://m2.material.io/components/image-lists/web
 * @see https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list
 */
class ImageListItem extends Component
{
    /**
     * Create a new component instance.
     *
     * @param  string|null  $src  The image source URL
     * @param  string|null  $alt  The image alt text
     * @param  string|null  $label  The image label/caption
     * @param  string|null  $href  Optional link href for clickable items
     * @return void
     */
    public function __construct(
        public ?string $src = null,
        public ?string $alt = null,
        public ?string $label = null,
        public ?string $href = null,
    ) {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::image-list-item';
    }

    /**
     * Preprocess attributes for the image list item
     *
     * @return ComponentAttributeBag
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        return $attributes->class([
            'mdc-image-list__item',
        ]);
    }

    /**
     * Get the HTML tag for the wrapper element
     */
    public function getWrapperTag(): string
    {
        return $this->href ? 'a' : 'div';
    }
}
