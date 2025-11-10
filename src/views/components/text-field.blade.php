<label {{ $attributesPreprocess($attributes) }}>
    @if ($leadingIcon)
        <x-mbc::icon :name="$leadingIcon" class="mdc-text-field__icon mdc-text-field__icon--leading" tabindex="0" role="button" />
    @endif

    @if ($isOutlined())
        {{-- Outlined variant --}}
        <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading"></span>
            @if ($label)
                <span class="mdc-notched-outline__notch">
                    <span class="mdc-floating-label" id="{{ $attributes->get('id') }}-label">{{ $label }}</span>
                </span>
            @endif
            <span class="mdc-notched-outline__trailing"></span>
        </span>
    @else
        {{-- Filled variant --}}
        <span class="mdc-text-field__ripple"></span>
        @if ($label)
            <span class="mdc-floating-label" id="{{ $attributes->get('id') }}-label">{{ $label }}</span>
        @endif
    @endif

    @if ($prefix)
        <span class="mdc-text-field__affix mdc-text-field__affix--prefix">{{ $prefix }}</span>
    @endif

    @if ($textarea)
        @if (!$isOutlined())
            <span class="mdc-text-field__resizer">
        @endif
                <textarea 
                    class="mdc-text-field__input" 
                    @if($rows) rows="{{ $rows }}" @endif
                    @if($cols) cols="{{ $cols }}" @endif
                    @if($label) aria-labelledby="{{ $attributes->get('id') }}-label" @else aria-label="{{ $attributes->get('placeholder', 'Text field') }}" @endif
                    @if($helperText) aria-controls="{{ $attributes->get('id') }}-helper" aria-describedby="{{ $attributes->get('id') }}-helper" @endif
                    {{ $attributes->except(['class', 'data-mdc-auto-init']) }}
                ></textarea>
        @if (!$isOutlined())
            </span>
        @endif
    @else
        <input 
            class="mdc-text-field__input" 
            type="{{ $attributes->get('type', 'text') }}"
            @if($label) aria-labelledby="{{ $attributes->get('id') }}-label" @else aria-label="{{ $attributes->get('placeholder', 'Text field') }}" @endif
            @if($helperText) aria-controls="{{ $attributes->get('id') }}-helper" aria-describedby="{{ $attributes->get('id') }}-helper" @endif
            {{ $attributes->except(['class', 'data-mdc-auto-init', 'type']) }}
        >
    @endif

    @if ($suffix)
        <span class="mdc-text-field__affix mdc-text-field__affix--suffix">{{ $suffix }}</span>
    @endif

    @if ($trailingIcon)
        <x-mbc::icon :name="$trailingIcon" class="mdc-text-field__icon mdc-text-field__icon--trailing" tabindex="0" role="button" />
    @endif

    @if (!$isOutlined())
        <span class="mdc-line-ripple"></span>
    @endif
</label>

@if ($hasHelperLine())
    <div class="mdc-text-field-helper-line">
        @if ($helperText)
            <div 
                class="mdc-text-field-helper-text {{ $helperTextPersistent ? 'mdc-text-field-helper-text--persistent' : '' }} {{ $helperTextValidation ? 'mdc-text-field-helper-text--validation-msg' : '' }}"
                id="{{ $attributes->get('id') }}-helper"
                aria-hidden="true"
            >{{ $helperText }}</div>
        @endif

        @if ($characterCounter)
            <div class="mdc-text-field-character-counter">0 / {{ $attributes->get('maxlength', 0) }}</div>
        @endif
    </div>
@endif
