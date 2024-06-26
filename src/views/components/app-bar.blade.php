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
