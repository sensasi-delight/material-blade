<div {{ $attributesPreprocess($attributes) }}>

    <div class="mdc-top-app-bar__row">

        <div {{ $startAttributesPreprocess($start->attributes) }}>
            @if ($start)
                {{ $start }}
            @endif

            @if ($title || isset($titleSlot))
                <span class="mdc-top-app-bar__title">
                    @isset($titleSlot)
                        {{ $titleSlot }}
                    @else
                        {{ $title }}
                    @endisset
                </span>
            @endif
        </div>


        @isset($end)
            <div {{ $endAttributesPreprocess($end->attributes) }}>
                {{ $end }}
            </div>
        @endisset
    </div>
</div>