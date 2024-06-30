@php
    $attributes = $attributesPreprocess($attributes);

    $isDisabled = $attributes->has('disabled');
@endphp

@if ($withWrapper)
    <div class="mdc-touch-target-wrapper">
@endif

@if ($attributes->has('href') && !$isDisabled)
    <a {{ $attributes }}>
    @else
        <button {{ $attributes }}>
@endif

@if (!$disableRipple)
    <div class="mdc-icon-button__ripple"></div>
@endif

@if ($toggle !== null)
    @php
        $onColor = $color === 'var(--mdc-theme-text-secondary-on-background)' ? 'primary' : $color;

        if ($isDisabled) {
            $onColor = null;
        }
    @endphp
    <x-mbc::Icon
        class="mdc-icon-button__icon mdc-icon-button__icon--on"
        :name="$icon"
        :color="$onColor"
    />

    <x-mbc::Icon
        class="mdc-icon-button__icon"
        :name="$offIcon ?: $icon"
        :color="$isDisabled ? null : ($offColor ?: $color)"
    />
@else
    <x-mbc::Icon
        :name="$icon"
        :color="$isDisabled ? null : $color"
    />
@endif

@if ($withWrapper)
    <div class="mdc-icon-button__touch"></div>
@endif

@if ($attributes->has('href') && !$isDisabled)
    </a>
@else
    </button>
@endif

@if ($withWrapper)
    </div>
@endif
