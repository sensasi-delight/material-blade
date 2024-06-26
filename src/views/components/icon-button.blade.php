@php
    $attributes = $attributesPreprocess($attributes);

    $isDisabled = $attributes->has('disabled');
    $isDefaultColor = $color === 'var(--mdc-theme-text-secondary-on-light)';

@endphp

@if ($isWithWrapper)
    <div class="mdc-touch-target-wrapper">
@endif

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
    <x-mbc::Icon class="mdc-icon-button__icon mdc-icon-button__icon--on"
                 :icon="$icon"
                 :color="$onColor" />

    <x-mbc::Icon class="mdc-icon-button__icon"
                 :icon="$offIcon ?: $icon"
                 :color="$isDisabled ? null : ($offColor ?: $color)" />
@else
    <x-mbc::Icon :icon="$icon"
                 :color="$isDisabled ? null : $color" />
@endif

@if ($isWithWrapper)
    <div class="mdc-icon-button__touch"></div>
@endif

@if ($attributes->has('href') && !$isDisabled)
    </a>
@else
    </button>
@endif

@if ($isWithWrapper)
    </div>
@endif
