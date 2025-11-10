<?php

declare(strict_types=1);

namespace MaterialBlade\Components\ImageList\Properties;

use MaterialBlade\Traits\PropertyEnum;

enum Variant: string
{
    use PropertyEnum;

    case STANDARD = 'standard';
    case MASONRY = 'masonry';
}
