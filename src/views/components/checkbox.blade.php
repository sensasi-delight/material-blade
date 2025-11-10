<div class="mdc-form-field" data-mdc-auto-init="MDCFormField">
    <div @foreach ($wrapperAttributesPreprocess($attributes) as $key => $value) {{ $key }}="{{ $value }}" @endforeach>
        <input {{ $attributesPreprocess($attributes) }} />
        <div class="mdc-checkbox__background"
            style="--mdc-checkbox-checked-color: {{ MaterialBlade\Helper::getColor($color) }}">
            <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
            </svg>
            <div class="mdc-checkbox__mixedmark"></div>
        </div>
        <div class="mdc-checkbox__ripple"></div>
    </div>

    <label for="{{ $attributes->get('id') }}">{{ $label }}</label>
</div>