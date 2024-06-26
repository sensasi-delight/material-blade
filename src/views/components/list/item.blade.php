@aware(['disableRipple' => false])

<{{ $htmlElement }} {{ $attributesPreprocess($attributes, $disableRipple) }}>
    <span class="mdc-deprecated-list-item__ripple"></span>

    @if ($icon)
        <x-mbc::icon aria-hidden="true"
                     :icon="$icon"
                     class="mdc-deprecated-list-item__graphic" />
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
    </{{ $htmlElement }}>
