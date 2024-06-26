<aside {{ $attributesPreprocess($attributes) }}>
    @if ($title || $subtitle)
        <div class="mdc-drawer__header">
            @if ($title)
                <div class="mdc-drawer__title">{{ $title }}</div>
            @endif

            @if ($subtitle)
                <div class="mdc-drawer__subtitle">{{ $subtitle }}</div>
            @endif
        </div>
    @endif

    <div class="mdc-drawer__content">
        {{ $slot }}
    </div>
</aside>
