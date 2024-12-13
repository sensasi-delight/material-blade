@aware(['disableRipple' => false])

<{{ $htmlTag }} {{ $attributesPreprocess($attributes, $disableRipple) }}>
    <span class="mdc-deprecated-list-item__ripple"></span>

    @if ($startIcon)
        @if (filter_var($startIcon, FILTER_VALIDATE_URL))
            <img src="{{ $startIcon }}" class="mdc-deprecated-list-item__graphic" alt="icon">
        @else
            <x-mbc::icon aria-hidden="true" :name="$startIcon" class="mdc-deprecated-list-item__graphic" element="span" />
        @endif
    @endif

    <span class="mdc-deprecated-list-item__text">
        @if ($primaryText)
            <span class="mdc-deprecated-list-item__primary-text">{{ $primaryText }}</span>
        @endif

        @if ($secondaryText)
            <span class="mdc-deprecated-list-item__secondary-text">{{ $secondaryText }}</span>
        @endif

        @isset($slot)
            {{ $slot }}
        @endisset
    </span>

    @if ($endIcon)

        @if (filter_var($endIcon, FILTER_VALIDATE_URL))
            <img src="{{ $endIcon }}" class="mdc-deprecated-list-item__meta" alt="icon">
        @else
            <x-mbc::icon aria-hidden="true" :name="$endIcon" class="mdc-deprecated-list-item__meta" element="span" />
        @endif
    @endif

    </{{ $htmlTag }}>
