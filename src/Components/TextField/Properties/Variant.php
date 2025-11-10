<?php

declare(strict_types=1);

namespace MaterialBlade\Components\TextField\Properties;

use MaterialBlade\Traits\PropertyEnum;

enum Variant: string
{
    use PropertyEnum;

    case FILLED = 'filled';
    case OUTLINED = 'outlined';
}
