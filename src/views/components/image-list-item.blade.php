<li {{ $attributesPreprocess($attributes) }}>
    @if ($src)
        <{{ $getWrapperTag() }} class="mdc-image-list__image-aspect-container" @if($href) href="{{ $href }}" @endif>
            <img class="mdc-image-list__image" src="{{ $src }}" alt="{{ $alt ?? '' }}">
        </{{ $getWrapperTag() }}>
    @else
        {{ $slot }}
    @endif

    @if ($label)
        <div class="mdc-image-list__supporting">
            <span class="mdc-image-list__label">{{ $label }}</span>
        </div>
    @endif
</li>
