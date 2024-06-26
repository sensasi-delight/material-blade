<div {{ $attributesPreprocess($attributes) }}>
    @if (isset($buttons))
        <div {{ $buttons->attributes->class(['mdc-card__action-buttons']) }}>
            {{ $buttons }}
        </div>
    @endif

    @if (isset($iconButtons))
        <div {{ $iconButtons->attributes->class(['mdc-card__action-icons']) }}>
            {{ $iconButtons }}
        </div>
    @endif
</div>
