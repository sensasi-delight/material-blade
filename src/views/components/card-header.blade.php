<div {{ $attributesPreprocess($attributes) }}>
    @if (isset($title))
        <x-mbc::Typography class="mdc-card__header-title"
                           variant="h6"
                           :element="$titleElement"
                           :slot="$title" />
    @endif

    @if (isset($subtitle))
        <x-mbc::Typography class="mdc-card__header-subtitle"
                           variant="subtitle2"
                           :element="$subtitleElement"
                           :slot="$subtitle" />
    @endif
</div>
