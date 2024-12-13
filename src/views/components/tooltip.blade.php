@isset($body)
    <span class="mdc-tooltip-wrapper--rich">
    @endisset
    {!! $childPreprocess($slot->__tostring()) !!}

    <div {{ $attributesPreprocess($attributes)->class([
        'mdc-tooltip--rich' => isset($body),
    ]) }}>
        <div class="mdc-tooltip__surface mdc-tooltip__surface-animation">
            @if (is_a($title, 'Illuminate\View\ComponentSlot'))
                <h2 {{ $title->attributes->class(['mdc-tooltip__title']) }}>{{ $title }}</h2>
            @endif

            @isset($body)
                <p {{ $body->attributes->class(['mdc-tooltip__content']) }}>
                    {{ $body }}
                </p>
            @else
                {{ $title }}
            @endisset

            @isset($action)
                <span {{ $action->attributes->class(['mdc-tooltip--rich-actions']) }}>
                    {{ $action }}
                </span>
            @endisset
        </div>
    </div>
    @isset($body)
    </span>
@endisset
