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

@once
    @push('MaterialBlade-scripts-on-ready')
        [...document.querySelectorAll('.mdc-card__action-buttons button')].map(el => {
        el.classList.add('mdc-card__action', 'mdc-card__action--button')
        });

        [...document.querySelectorAll('.mdc-card__action-icons button, .mdc-card__action-icons a')].map(el => {
        el.classList.add('mdc-card__action', 'mdc-card__action--icon');
        });
    @endpush
@endonce
