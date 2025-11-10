@if ($touch)
    <div class="mdc-touch-target-wrapper">
@endif

<div class="mdc-form-field">
    <div class="mdc-radio {{ $attributes->has('disabled') ? 'mdc-radio--disabled' : '' }} {{ $touch ? 'mdc-radio--touch' : '' }}">
        <input {{ $attributesPreprocess($attributes) }}>
        <div class="mdc-radio__background" style="--mdc-radio-selected-color: {{ MaterialBlade\Helper::getColor($color) }}">
            <div class="mdc-radio__outer-circle"></div>
            <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
    </div>

    @if ($label)
        <label for="{{ $attributes->get('id') }}">{{ $label }}</label>
    @endif
</div>

@if ($touch)
    </div>
@endif
