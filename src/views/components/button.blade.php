@if ($withWrapper)
    <div class="mdc-touch-target-wrapper">
@endif

<{{ $getHtmlTag($attributes) }} {{ $attributesPreprocess($attributes, $slot) }}>

    @if (!$disableRipple)
        <span class="mdc-button__ripple"></span>
    @endif

    @if ($startIcon)
        <x-mbc::Icon
            :name="$startIcon"
            class="mdc-button__icon"
            aria-hidden="true"
        />
    @endif

    <span class="mdc-button__label">{{ $label ?: $slot }}</span>

    @if ($endIcon)
        <x-mbc::Icon
            :name="$endIcon"
            class="mdc-button__icon"
            aria-hidden="true"
        />
    @endif

    </{{ $getHtmlTag($attributes) }}>

    @if ($withWrapper)
        </div>
    @endif
