<div {{ $attributesPreprocess($attributes) }}>
    @if ($slot->isNotEmpty())
        <div class="mdc-card__media-content">
            {{ $slot }}
        </div>
    @endif
</div>
