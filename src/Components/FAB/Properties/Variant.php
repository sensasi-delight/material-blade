<?php

namespace MaterialBlade\Components\FAB\Properties;

use MaterialBlade\Traits\PropertyEnum;

enum Variant: string
{
    use PropertyEnum;

    case REGULAR = 'regular';
    case MINI = 'mini';
}
