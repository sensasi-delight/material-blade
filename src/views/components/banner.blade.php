@props(['actions'])

<div {{ $attributesPreprocess($attributes) }}>

    @if ($isFixed)
        <div class="mdc-banner__fixed">
    @endif

    <div
        class="mdc-banner__content"
        role="alertdialog"
        aria-live="assertive"
    >
        <div class="mdc-banner__graphic-text-wrapper">

            @if ($icon)
                <div
                    class="mdc-banner__graphic"
                    alt=""
                    role="img"
                >
                    <x-mbc::Icon
                        class="mdc-banner__icon"
                        :name="$icon"
                    />
                </div>
            @endif

            <div class="mdc-banner__text">
                {{ $slot }}
            </div>
        </div>

        @if ($actions)
            <div class="mdc-banner__actions">
                {{ $actions }}
            </div>
        @endif
    </div>

    @if ($isFixed)
</div>
@endif

</div>
