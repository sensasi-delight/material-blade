<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * Material Design Slider Component
 *
 * @see https://m2.material.io/components/sliders/web
 * @see https://github.com/material-components/material-components-web/tree/master/packages/mdc-slider
 */
class Slider extends Component
{
    /**
     * Create a new component instance.
     *
     * @param  bool  $discrete  Whether to show value indicator (discrete slider)
     * @param  bool  $tickMarks  Whether to show tick marks (requires discrete=true)
     * @param  bool  $range  Whether this is a range slider (two thumbs)
     * @param  int|null  $min  Minimum value
     * @param  int|null  $max  Maximum value
     * @param  int|null  $value  Current value (for single point slider)
     * @param  int|null  $valueStart  Start value (for range slider)
     * @param  int|null  $valueEnd  End value (for range slider)
     * @param  int|null  $step  Step size for value quantization
     * @param  int|null  $minRange  Minimum distance between thumbs (for range slider)
     * @param  string|null  $name  Input name attribute
     * @param  string|null  $nameStart  Input name for start thumb (range slider)
     * @param  string|null  $nameEnd  Input name for end thumb (range slider)
     * @return void
     */
    public function __construct(
        public bool $discrete = false,
        public bool $tickMarks = false,
        public bool $range = false,
        public ?int $min = 0,
        public ?int $max = 100,
        public ?int $value = 50,
        public ?int $valueStart = null,
        public ?int $valueEnd = null,
        public ?int $step = null,
        public ?int $minRange = null,
        public ?string $name = null,
        public ?string $nameStart = 'rangeStart',
        public ?string $nameEnd = 'rangeEnd',
    ) {
        // For range sliders, set default values if not provided
        if ($this->range) {
            $this->valueStart = $this->valueStart ?? 30;
            $this->valueEnd = $this->valueEnd ?? 70;
        }
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::slider';
    }

    /**
     * Preprocess attributes for the slider container
     *
     * @return ComponentAttributeBag
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $classes = [
            'mdc-slider',
            'mdc-slider--range' => $this->range,
            'mdc-slider--discrete' => $this->discrete,
            'mdc-slider--tick-marks' => $this->tickMarks && $this->discrete,
            'mdc-slider--disabled' => $attributes->has('disabled'),
        ];

        $mergeAttrs = ['data-mdc-auto-init' => 'MDCSlider'];

        if ($this->range && $this->minRange !== null) {
            $mergeAttrs['data-min-range'] = $this->minRange;
        }

        return $attributes->merge($mergeAttrs)->class($classes);
    }

    /**
     * Get tick marks for discrete slider with tick marks
     */
    public function getTickMarks(): array
    {
        if (! $this->tickMarks || ! $this->discrete || $this->step === null) {
            return [];
        }

        $numTicks = (int) (($this->max - $this->min) / $this->step) + 1;
        $activeCount = (int) (($this->value - $this->min) / $this->step) + 1;

        return [
            'active' => $activeCount,
            'inactive' => $numTicks - $activeCount,
        ];
    }
}
