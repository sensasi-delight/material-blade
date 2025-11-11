<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;

/**
 * Material Blade Data Table Component
 *
 * @see https://m2.material.io/components/data-tables
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-data-table
 * @see https://github.com/sensasi-delight/material-blade
 * @see https://material-components.github.io/material-components-web-catalog/#/component/data-table
 */
class DataTable extends Component
{
    public bool $isWithCheckbox;

    public array $header;

    public array $tableData;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        bool $withCheckbox = false,
        array $header = [],
        array $data = []
    ) {
        $this->isWithCheckbox = $withCheckbox;
        $this->tableData = $data;
        $this->header = $header;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::data-table';
    }
}
