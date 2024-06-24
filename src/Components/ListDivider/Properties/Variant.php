<?php

namespace MaterialBlade\Components\ListDivider\Properties;

use MaterialBlade\Traits\PropertyEnum;

enum Variant: string
{
    use PropertyEnum;

    case STANDARD = 'standard';
    case PADDED = 'padded';
}
