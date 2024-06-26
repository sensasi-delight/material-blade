<button {{ $attributesPreprocess($attributes) }}>
    <div class="mdc-switch__track"></div>
    <div class="mdc-switch__handle-track">
        <div class="mdc-switch__handle">
            <div class="mdc-switch__shadow">
                <div class="mdc-elevation-overlay"></div>
            </div>
            <div class="mdc-switch__ripple"></div>

            @if ($icon || $offIcon)
                <div class="mdc-switch__icons">
                    @if ($icon)
                        <x-mbc::Icon class="mdc-switch__icon mdc-switch__icon--on"
                                     color="#fff"
                                     :icon="$icon" />
                    @endif

                    @if ($offIcon)
                        <x-mbc::Icon class="mdc-switch__icon mdc-switch__icon--off"
                                     color="#fff"
                                     :icon="$offIcon" />
                    @endif
                </div>
            @endif
        </div>
    </div>
</button>
