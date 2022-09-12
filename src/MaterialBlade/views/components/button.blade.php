<?php
$attributes = $attributesPreprocess($attributes)->merge(['aria-label' => $label ?: $slot]);
?>

@if ($attributes->has('href'))
    <a {{ $attributes }}>
    @else
        <button {{ $attributes }}>
@endif

@if ($isRipple)
    <span class="mdc-button__ripple"></span>
@endif

@if ($startIcon)
    <x-MaterialBlade::Icon :icon="$startIcon" class="mdc-button__icon" aria-hidden="true" />
@endif

<span class="mdc-button__label">{{ $label ?: $slot }}</span>

@if ($endIcon)
    <x-MaterialBlade::Icon :icon="$endIcon" class="mdc-button__icon" aria-hidden="true" />
@endif

@if ($attributes->has('href'))
    </a>
@else
    </button>
@endif

@once
    @push('MaterialBlade-scripts-on-ready')
        [...document.querySelectorAll('.mdc-button')].map(buttonEl => {
        (mdc.ripple.MDCRipple.attachTo(buttonEl))
        .unbounded = true;
        });
    @endpush
@endonce
