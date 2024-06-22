<div {{ $attributes->class(['mdc-data-table']) }}>
    <div class="mdc-data-table__table-container">
        <table class="mdc-data-table__table" {{ $attributes->has('aria-label') ? ' aria-label=' . $attributes->get('aria-label') : ''}}>
            @if ($header)
            <thead>
                <tr class="mdc-data-table__header-row">
                    @if ($isWithCheckbox)
                    <th class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox" role="columnheader" scope="col">
                        <div class="mdc-checkbox mdc-data-table__header-row-checkbox">
                            <input type="checkbox" class="mdc-checkbox__native-control" aria-label="Toggle all rows" />
                            <div class="mdc-checkbox__background">
                                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                    <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                </svg>
                                <div class="mdc-checkbox__mixedmark"></div>
                            </div>
                            <div class="mdc-checkbox__ripple"></div>
                        </div>
                    </th>
                    @endif
                    @foreach ($header as $key => $col)
                    <th class="mdc-data-table__header-cell{{ $col === 'numeric' ? ' mdc-data-table__header-cell--numeric' : null }}" role="columnheader" scope="col">{{ $col === 'numeric' ? $key : $col }}</th>
                    @endforeach
                </tr>
            </thead>
            @endif

            @if ($tableData)
            <tbody class="mdc-data-table__content">
                @foreach ($tableData as $row)
                @php
                $uuid = uniqid();
                @endphp

                <tr class="mdc-data-table__row" data-row-id="{{ $uuid }}" {{ $isWithCheckbox && $row[0] ? ' mdc-data-table__row--selected" aria-selected="true"' : '' }}>
                    @if ($isWithCheckbox)
                    <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                        <div class="mdc-checkbox mdc-data-table__row-checkbox{{ $row[0] ? ' mdc-checkbox--selected' : '' }}">
                            <input type="checkbox" class="mdc-checkbox__native-control" {{ $row[0] ? ' checked' : '' }} aria-labelledby="{{ $uuid }}" />
                            <div class="mdc-checkbox__background">
                                <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                    <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
                                </svg>
                                <div class="mdc-checkbox__mixedmark"></div>
                            </div>
                            <div class="mdc-checkbox__ripple"></div>
                        </div>
                    </td>

                    @php
                    array_shift($row);
                    @endphp
                    @endif

                    @foreach ($row as $key => $cell)
                    @php
                    $el = 'td';
                    $scope = '';

                    if ($loop->first) {
                    $el = 'th';
                    $scope = ' scope="row"';
                    }

                    $classAdd = is_numeric($cell) ? ' mdc-data-table__cell--numeric' : '';
                    @endphp

                    <{{ $el }} id="{{ $uuid }}" class="mdc-data-table__cell{{ $classAdd }}" {{ $scope }}>
                        {!! $cell !!}
                    </{{ $el }}>
                    @endforeach
                </tr>
                @endforeach
            </tbody>
        </table>
        @endif
    </div>
</div>

{{-- TODO: data tabel with pagination --}}
{{-- TODO: data tabel with progress indicator --}}