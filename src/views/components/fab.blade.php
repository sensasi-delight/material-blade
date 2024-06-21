@if ($isWithWrapper)
<div class="mdc-touch-target-wrapper">
    @endif

    <button {{ $attributesPreprocess($attributes) }}>
        <div class="mdc-fab__ripple"></div>

        @if ($iconString)
        <x-mbc::Icon :icon="$iconString" class="mdc-fab__icon" />
        @endif

        @if ($label)
        <span class="mdc-fab__label">{{ $label }}</span>
        @endif

        @if ($isWithWrapper)
        <div class="mdc-fab__touch"></div>
        @endif

    </button>

    @if ($isWithWrapper)
</div>
@endif