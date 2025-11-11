<?php

declare(strict_types=1);

namespace MaterialBlade\Components;

use Illuminate\Support\HtmlString;
use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

/**
 * @see https://mui.com/material-ui/react-snackbar/
 * @see https://m2.material.io/components/snackbars/web
 * @see https://github.com/material-components/material-components-web/tree/v14.0.0/packages/mdc-snackbar
 * @see https://material-components.github.io/material-components-web-catalog/#/component/snackbar
 */
class Snackbar extends Component
{
    public string $variant;

    public ?string $message;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string $variant = 'default',
        ?string $message = null
    ) {
        $this->variant = $variant;
        $this->message = $message;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::snackbar';
    }

    public function validateComponent(string|HtmlString $slot)
    {
        if (! $this->message && $slot->isEmpty()) {
            throw new \Exception('Please fill the "message" attribute or the component slot', 1);
        }
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        $attributes = $attributes->merge([
            'data-mdc-auto-init' => 'MDCSnackbar',
        ]);

        return $attributes->class([
            'mdc-snackbar',
            "mdc-snackbar--$this->variant" => $this->variant !== 'default',
        ]);
    }
}
