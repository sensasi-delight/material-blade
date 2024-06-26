<div {{ $attributesPreprocess($attributes) }}>

    @if ($isFixed)
        <div class="mdc-banner__fixed">
    @endif
    <div class="mdc-banner__content"
         role="alertdialog"
         aria-live="assertive">
        <div class="mdc-banner__graphic-text-wrapper">

            @if ($icon)
                <div class="mdc-banner__graphic"
                     role="img"
                     alt="">
                    <x-mbc::Icon class="mdc-banner__icon"
                                 :icon="$icon" />
                </div>
            @endif

            <div class="mdc-banner__text">
                {{ $text }}
            </div>
        </div>

        @if ($slot)
            <div class="mdc-banner__actions">

                {{ $slot }}
            </div>
        @endif
    </div>

    @if ($isFixed)
</div>
@endif
</div>
