<?php

namespace MaterialBlade\Components\Alert\Properties;

use MaterialBlade\Traits\PropertyEnum;

enum Variant: string
{
    use PropertyEnum;

    case FILLED = 'filled';
    case OUTLINED = 'outlined';
    case STANDARD = 'standard';
}
