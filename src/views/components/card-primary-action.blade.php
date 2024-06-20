<div {{ $attributesPreprocess($attributes) }}>
  {{ $slot }}
  <div class="mdc-card__ripple"></div>
</div>


@once
    @push('MaterialBlade-scripts-on-ready')
        [...document.querySelectorAll('.mdc-card__primary-action')].map(el => {
        mdc.ripple.MDCRipple.attachTo(el);
        });
    @endpush
@endonce
