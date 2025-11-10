<div {{ $attributesPreprocess($attributes) }}>
    <div class="mdc-slider__track">
        <div class="mdc-slider__track--inactive"></div>
        <div class="mdc-slider__track--active">
            <div class="mdc-slider__track--active_fill"></div>
        </div>
        
        @if ($tickMarks && $discrete)
            @php $ticks = $getTickMarks(); @endphp
            <div class="mdc-slider__tick-marks">
                @for ($i = 0; $i < $ticks['active']; $i++)
                    <div class="mdc-slider__tick-mark--active"></div>
                @endfor
                @for ($i = 0; $i < $ticks['inactive']; $i++)
                    <div class="mdc-slider__tick-mark--inactive"></div>
                @endfor
            </div>
        @endif
    </div>

    @if ($range)
        {{-- Start Thumb (Range Slider) --}}
        <div class="mdc-slider__thumb">
            @if ($discrete)
                <div class="mdc-slider__value-indicator-container" aria-hidden="true">
                    <div class="mdc-slider__value-indicator">
                        <span class="mdc-slider__value-indicator-text">{{ $valueStart }}</span>
                    </div>
                </div>
            @endif
            <div class="mdc-slider__thumb-knob"></div>
            <input 
                class="mdc-slider__input" 
                type="range" 
                min="{{ $min }}" 
                max="{{ $valueEnd - ($minRange ?? 0) }}" 
                value="{{ $valueStart }}" 
                @if($step) step="{{ $step }}" @endif
                @if($nameStart) name="{{ $nameStart }}" @endif
                @if($attributes->has('disabled')) disabled @endif
                aria-label="{{ $attributes->get('aria-label', 'Range start') }}"
            >
        </div>

        {{-- End Thumb (Range Slider) --}}
        <div class="mdc-slider__thumb">
            @if ($discrete)
                <div class="mdc-slider__value-indicator-container" aria-hidden="true">
                    <div class="mdc-slider__value-indicator">
                        <span class="mdc-slider__value-indicator-text">{{ $valueEnd }}</span>
                    </div>
                </div>
            @endif
            <div class="mdc-slider__thumb-knob"></div>
            <input 
                class="mdc-slider__input" 
                type="range" 
                min="{{ $valueStart + ($minRange ?? 0) }}" 
                max="{{ $max }}" 
                value="{{ $valueEnd }}" 
                @if($step) step="{{ $step }}" @endif
                @if($nameEnd) name="{{ $nameEnd }}" @endif
                @if($attributes->has('disabled')) disabled @endif
                aria-label="{{ $attributes->get('aria-label', 'Range end') }}"
            >
        </div>
    @else
        {{-- Single Thumb (Regular Slider) --}}
        <div class="mdc-slider__thumb">
            @if ($discrete)
                <div class="mdc-slider__value-indicator-container" aria-hidden="true">
                    <div class="mdc-slider__value-indicator">
                        <span class="mdc-slider__value-indicator-text">{{ $value }}</span>
                    </div>
                </div>
            @endif
            <div class="mdc-slider__thumb-knob"></div>
            <input 
                class="mdc-slider__input" 
                type="range" 
                min="{{ $min }}" 
                max="{{ $max }}" 
                value="{{ $value }}" 
                @if($step) step="{{ $step }}" @endif
                @if($name) name="{{ $name }}" @endif
                @if($attributes->has('disabled')) disabled @endif
                aria-label="{{ $attributes->get('aria-label', 'Slider') }}"
            >
        </div>
    @endif
</div>
