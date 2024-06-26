@aware(['variant'])

@if ($isWithWrapper)
    <div class="mdc-touch-target-wrapper">
@endif

<div {{ $attributesPreprocess($attributes->class(['mdc-chip--deletable' => $variant === 'input' && !$isDisabled])) }}>
    <div class="mdc-chip__ripple"></div>

    @if ($icon)
        <x-mbc::Icon :icon="$icon"
                     class="mdc-chip__icon mdc-chip__icon--leading{{ $isSelected ? ' mdc-chip__icon--leading-hidden' : null }}" />
    @endif

    @if ($variant === 'filter')
        <span class="mdc-chip__checkmark">
            <svg class="mdc-chip__checkmark-svg"
                 viewBox="-2 -3 30 30">
                <path class="mdc-chip__checkmark-path"
                      fill="none"
                      stroke="black"
                      d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
        </span>
    @endif

    <span role="gridcell">
        <span role="{{ $variant === 'filter' ? 'checkbox' : 'button' }}"
              tabindex="0"
              class="mdc-chip__primary-action"@if ($variant === 'filter') aria-checked="{{ $isSelected }}" @endif>

            @if ($isWithWrapper)
                <div class="mdc-chip__touch"></div>
            @endif

            <span class="mdc-chip__text">{{ $label }}</span>
        </span>
    </span>

    @if ($variant === 'input' && !$isDisabled)
        <span role="gridcell">
            <i class="material-icons mdc-chip__icon mdc-chip__icon--trailing mdc-chip__action--trailing"
               tabindex="-1"
               role="button">cancel</i>
        </span>
    @endif
</div>

@if ($isWithWrapper)
    <div class="mdc-touch-target-wrapper">
@endif
