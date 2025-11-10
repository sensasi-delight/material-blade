<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use MaterialBlade\Components\ImageList\Properties\Variant;

/**
 * Material Design Image List Component
 *
 * @see https://m2.material.io/components/image-lists/web
 * @see https://github.com/material-components/material-components-web/tree/master/packages/mdc-image-list
 */
class ImageList extends Component
{
    private Variant $variant;

    /**
     * Create a new component instance.
     *
     * @param  string  $variant  The variant of the image list (standard, masonry)
     * @param  bool  $withTextProtection  Whether to add text protection scrim for labels
     * @return void
     */
    public function __construct(
        string $variant = 'standard',
        public bool $withTextProtection = false,
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
        return 'mbv::image-list';
    }

    /**
     * Preprocess attributes for the image list container
     *
     * @return ComponentAttributeBag
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        return $attributes->class([
            'mdc-image-list',
            'mdc-image-list--masonry' => $this->variant === Variant::MASONRY,
            'mdc-image-list--with-text-protection' => $this->withTextProtection,
        ]);
    }
}
