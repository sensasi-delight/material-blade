@props(['variant', 'ripple', 'label'])

@php
    $attributes = $attributes->class([
        'mdc-button',
        'mdc-button--raised' => $variant === 'contained',
        'mdc-button--unelevated' => $variant === 'unelevated',
        'mdc-button--outlined' => $variant === 'outlined',
        'mdc-button--icon-leading' => $startIcon ? true : false,
        'mdc-button--icon-trailing' => $endIcon ? true : false
    ]);

    if ($fullwidth) {
      $attributes = $attributes->merge(['style' => 'width: 100%']);
    }
@endphp



@if ($attributes['href'])
    <a {{ $attributes }}>
@else
    <button {{ $attributes }}>
@endif

    @if ($ripple)
        <span class="mdc-button__ripple"></span>
    @endif

    @if ($startIcon)
        <span class="material-icons mdc-button__icon" aria-hidden="true">{{ $startIcon }}</span>
    @endif

    <span class="mdc-button__label">{{ $slot }}</span>

    @if ($endIcon)
        <span class="material-icons mdc-button__icon" aria-hidden="true">{{ $endIcon }}</span>
    @endif

@if ($attributes['href'])
    </a>
@else
    </button>
@endif

@once
  @push('scripts')
      <script>
        (new mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'))).unbounded = true;
      </script>    
  @endpush
@endonce