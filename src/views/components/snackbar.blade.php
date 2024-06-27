@php $validateComponent($slot); @endphp

<aside {{ $attributesPreprocess($attributes) }}>
    <div
        class="mdc-snackbar__surface"
        role="status"
        aria-relevant="additions"
    >
        <div
            class="mdc-snackbar__label"
            aria-atomic="false"
        >
            {{ $message ?? $slot }}
        </div>

        @if (isset($action))
            <div
                class="mdc-snackbar__actions"
                aria-atomic="true"
            >
                {{ $action }}
            </div>
        @endif
    </div>
</aside>
