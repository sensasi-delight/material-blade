@php
$attributes = $attributesPreprocess($attributes);

$isDisabled = $attributes->has('disabled');
$isDefaultColor = $color === 'var(--mdc-theme-text-secondary-on-light)';

@endphp


@if ($attributes->has('href') && !$isDisabled)
    <a {{ $attributes }}>
    @else
        <button {{ $attributes }}>
@endif

@if ($isRipple)
    <div class="mdc-icon-button__ripple"></div>
@endif

@if (!is_null($isToggle))
    @php
        $onColor = $isDefaultColor ? 'primary' : $color;
        
        if ($isDisabled) {
            $onColor = null;
        }
    @endphp
    <x-MaterialBlade::Icon class="mdc-icon-button__icon mdc-icon-button__icon--on" :icon="$icon" :color="$onColor" />

    <x-MaterialBlade::Icon class="mdc-icon-button__icon" :icon="$offIcon ?: $icon" :color="$isDisabled ? null : ($offColor ?: $color)" />
@else
    <x-MaterialBlade::Icon :icon="$icon" :color="$isDisabled ? null : $color" />
@endif

@if ($attributes->has('href') && !$isDisabled)
    </a>
@else
    </button>
@endif

@once
    @push('MaterialBlade-scripts-on-ready')
        [...document.querySelectorAll('.mdc-icon-button')].map(button => {

        if (button.querySelector('.mdc-icon-button__icon--on')) {
        return mdc.iconButton.MDCIconButtonToggle.attachTo(button);
        }

        if (button.querySelector('.mdc-icon-button__ripple')) {
        return mdc.ripple.MDCRipple.attachTo(button).unbounded = true;
        }
        });
    @endpush
@endonce
