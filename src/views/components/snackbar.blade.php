@php $validateComponent($slot); @endphp

<aside {{ $attributesPreprocess($attributes) }}>
    <div class="mdc-snackbar__surface" role="status" aria-relevant="additions">
        <div class="mdc-snackbar__label" aria-atomic="false">
            {{ $message ?? $slot }}
        </div>

        @if (isset($action))
            <div class="mdc-snackbar__actions" aria-atomic="true">
                {{ $action }}
            </div>
        @endif
    </div>
</aside>

@once
    @push('MaterialBlade-scripts-on-ready')
        [...document.querySelectorAll('.mdc-snackbar')].map(el => {
        el.MDCSnackbar = new mdc.snackbar.MDCSnackbar(el);

        if (el.hasAttribute('timeout')) {
        el.MDCSnackbar.foundation.setTimeoutMs(el.getAttribute('timeout'))
        }

        if (el.hasAttribute('open')) {
        el.MDCSnackbar.open();
        }
        });
    @endpush
@endonce
