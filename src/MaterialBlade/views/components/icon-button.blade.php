@php
  $attributes = $attributesPreprocess($attributes);
@endphp

@if ($attributes->has('href') && ! $attributes->has('disabled'))
    <a {{ $attributes }}>
@else
    <button {{ $attributes }}>
@endif

    @if ($isRipple)
        <div class="mdc-icon-button__ripple"></div>
    @endif

    @if (! is_null($isToggle))
      <x-MaterialBlade::Icon :icon="$icon" :color="$attributes->has('disabled') ? null : ($color ?: 'primary')" class="mdc-icon-button__icon mdc-icon-button__icon--on" />
      <x-MaterialBlade::Icon :icon="$offIcon ?: $icon" class="mdc-icon-button__icon" />
    @else
      <x-MaterialBlade::Icon :icon="$icon" :color="$attributes->has('disabled') ? null : $color" />
    @endif

@if ($attributes->has('href') && ! $attributes->has('disabled'))
    </a>
@else
    </button>
@endif

@once
  @push('MaterialBlade-scripts-on-ready')
    
    [...document.querySelectorAll('.mdc-icon-button')].map(button => {

      const isToggleButton = button.classList.contains('mdc-icon-button-toggle');

      if (isToggleButton) {
        return mdc.iconButton.MDCIconButtonToggle.attachTo(button);
      }
      
      if (button.querySelector('.mdc-icon-button__ripple')) {
        return mdc.ripple.MDCRipple.attachTo(button).unbounded = true;
      }
    });

  @endpush
@endonce