<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;

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
