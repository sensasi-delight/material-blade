@php
    $wh = '48px';
    $viewBox = '0 0 48 48';
    $cx = 'cx="24" cy="24" r="18"';
    $strokeWidth = 4;
    $strokeWidth2 = 3.2;
    $strokeDasharray = 113.097;
    $strokeDashoffset = 56.549;

    if ($size === 'medium') {
        $wh = '36px';
        $viewBox = '0 0 32 32';
        $cx = 'cx="16" cy="16" r="12.5"';
        $strokeWidth = 3;
        $strokeWidth2 = 2.4;
        $strokeDasharray = 78.54;
        $strokeDashoffset = 39.27;
    }

    if ($size === 'small') {
        $wh = '24px';
        $viewBox = '0 0 24 24';
        $cx = 'cx="12" cy="12" r="8.75"';
        $strokeWidth = 2.5;
        $strokeWidth2 = 2;
        $strokeDasharray = 54.978;
        $strokeDashoffset = 27.489;
    }
@endphp

<div
    {{ $attributesPreprocess($attributes->merge(['style' => $attributes->prepends('width: ' . $wh . '; height: ' . $wh . ';')])) }}>
    <div class="mdc-circular-progress__determinate-container">
        <svg
            class="mdc-circular-progress__determinate-circle-graphic"
            viewBox="{{ $viewBox }}"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                class="mdc-circular-progress__determinate-track"
                {!! $cx !!}
                stroke-width="{{ $strokeWidth }}"
            />
            <circle
                class="mdc-circular-progress__determinate-circle"
                {!! $cx !!}
                stroke-dasharray="{{ $strokeDasharray }}"
                stroke-dashoffset="{{ $strokeDasharray }}"
                stroke-width="{{ $strokeWidth }}"
            />
        </svg>
    </div>
    <div class="mdc-circular-progress__indeterminate-container">
        <div class="mdc-circular-progress__spinner-layer">
            <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
                <svg
                    class="mdc-circular-progress__indeterminate-circle-graphic"
                    viewBox="{{ $viewBox }}"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        {!! $cx !!}
                        stroke-dasharray="{{ $strokeDasharray }}"
                        stroke-dashoffset="{{ $strokeDashoffset }}"
                        stroke-width="{{ $strokeWidth }}"
                    />
                </svg>
            </div>
            <div class="mdc-circular-progress__gap-patch">
                <svg
                    class="mdc-circular-progress__indeterminate-circle-graphic"
                    viewBox="{{ $viewBox }}"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        {!! $cx !!}
                        stroke-dasharray="{{ $strokeDasharray }}"
                        stroke-dashoffset="{{ $strokeDashoffset }}"
                        stroke-width="{{ $strokeWidth2 }}"
                    />
                </svg>
            </div>
            <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
                <svg
                    class="mdc-circular-progress__indeterminate-circle-graphic"
                    viewBox="{{ $viewBox }}"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        {!! $cx !!}
                        stroke-dasharray="{{ $strokeDasharray }}"
                        stroke-dashoffset="{{ $strokeDashoffset }}"
                        stroke-width="{{ $strokeWidth }}"
                    />
                </svg>
            </div>
        </div>
    </div>
</div>
