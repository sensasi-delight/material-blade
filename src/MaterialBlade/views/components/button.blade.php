@php
  // if ($size) {
  //   $attributes = $attributes->class([
  //     'materialblade-size--' . $size
  //   ]);
  // }

  $attributes = $attributes->class([
    'mdc-button',
    'mdc-button--touch',
    'mdc-button--raised' => $variant === 'contained',
    'mdc-button--unelevated' => $variant === 'unelevated',
    'mdc-button--outlined' => $variant === 'outlined',
    'mdc-button--icon-leading' => $startIcon ? true : false,
    'mdc-button--icon-trailing' => $endIcon ? true : false,
    'fullwidth' => $fullwidth,
  ]);

  if ($color) {
    $attributes = $attributes->class([
      'materialblade-theme--' . $color
    ]);
  }
@endphp


<div class="mdc-touch-target-wrapper">
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

        <span class="mdc-button__label">{{ $slot == '' ? $label : $slot }}</span>

        @if ($endIcon)
            <span class="material-icons mdc-button__icon" aria-hidden="true">{{ $endIcon }}</span>
        @endif

    @if ($attributes['href'])
        </a>
    @else
        </button>
    @endif
</div>

@once
  @push('scripts')
      <script>
        [...document.querySelectorAll('.mdc-button')].map(button => {
          (new mdc.ripple.MDCRipple.attachTo(button)).unbounded = true;
        });
      </script>
  @endpush
@endonce