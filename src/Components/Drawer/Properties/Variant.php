<?php

namespace MaterialBlade\Components\Drawer\Properties;

use MaterialBlade\Traits\PropertyEnum;

enum Variant: string
{
    use PropertyEnum;

    case PERMANENT = 'permanent';
    case DISMISSIBLE = 'dismissible';
    case MODAL = 'modal';
}
