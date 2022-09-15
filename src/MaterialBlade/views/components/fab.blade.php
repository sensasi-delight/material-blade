@if ($isWithWrapper)
    <div class="mdc-touch-target-wrapper">
@endif

<button {{ $attributesPreprocess($attributes) }}>
    <div class="mdc-fab__ripple"></div>
    
    @if ($iconString)
        <x-MaterialBlade::Icon :icon="$iconString" class="mdc-fab__icon" />
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
@once
    @push('MaterialBlade-scripts-on-ready')
        [...document.querySelectorAll('.mdc-fab')].map(fabEl => {
        mdc.ripple.MDCRipple.attachTo(fabEl);
        });
    @endpush
@endonce
