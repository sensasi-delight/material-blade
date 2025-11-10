<div {{ $attributesPreprocess($attributes) }}>
    <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface">
            @if ($title)
                <h2 class="mdc-dialog__title" id="dialog-title">{{ $title }}</h2>
            @endif

            <div class="mdc-dialog__content" id="dialog-content">
                {{ $slot }}
            </div>

            @isset($actions)
                <div class="mdc-dialog__actions">
                    {{ $actions }}
                </div>
            @endisset
        </div>
    </div>

    <div class="mdc-dialog__scrim"></div>
</div>
