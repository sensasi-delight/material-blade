<?php

namespace MaterialBlade\Components\Button\Properties;

use MaterialBlade\Traits\PropertyEnum;

enum Variant: string
{
    use PropertyEnum;

    case RAISED = 'raised';
    case OUTLINED = 'outlined';
    case UNELEVATED = 'unelevated';
    case TEXT = 'text';
}
