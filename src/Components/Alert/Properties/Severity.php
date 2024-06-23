<?php

namespace MaterialBlade\Components\Alert\Properties;

use MaterialBlade\Traits\PropertyEnum;

enum Severity: string
{
    use PropertyEnum;

    case ERROR = 'error';
    case INFO = 'info';
    case SUCCESS = 'success';
    case WARNING = 'warning';
}
