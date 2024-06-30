<?php

namespace MaterialBlade\Components\Icon\Properties;

use MaterialBlade\Traits\PropertyEnum;

enum Variant: string
{
    use PropertyEnum;

    case FILLED = 'filled';
    case OUTLINED = 'outlined';
    case ROUND = 'round';
    case TWO_TONE = 'two-tone';
    case SHARP = 'sharp';
}
