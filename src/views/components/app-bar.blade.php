<div {{ $attributesPreprocess($attributes) }}>

    <div class="mdc-top-app-bar__row">

        @if ($start)
            <div {{ $startAttributesPreprocess($start->attributes) }}>
                {{ $start }}
            </div>
        @endif

        @isset($end)
            <div {{ $endAttributesPreprocess($end->attributes) }}>
                {{ $end }}
            </div>
        @endisset
    </div>
</div>

@once
    @push('MaterialBlade-scripts-on-ready')
        [...document.querySelectorAll('.mdc-top-app-bar')].map(appBarTopEl => {
        mdc.topAppBar.MDCTopAppBar.attachTo(appBarTopEl);
        });
    @endpush
@endonce
