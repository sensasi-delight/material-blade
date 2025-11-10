<?php declare(strict_types=1); 

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use InvalidArgumentException;

/**
 * Material Design Dialog Component
 *
 * @see https://m2.material.io/components/dialogs/web
 * @see https://github.com/material-components/material-components-web/tree/master/packages/mdc-dialog
 */
class Dialog extends Component
{
    /**
     * Create a new component instance.
     *
     * @param  bool  $open  Whether the dialog is open by default
     * @param  bool  $fullscreen  Whether to render as fullscreen dialog
     * @param  bool  $scrollable  Whether the dialog content is scrollable
     * @param  string|null  $title  Dialog title
     * @return void
     */
    public function __construct(
        public bool $open = false,
        public bool $fullscreen = false,
        public bool $scrollable = false,
        public ?string $title = null,
    ) {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return function (array $data): string {
            throw_if(
                $data['slot']->isEmpty(),
                new InvalidArgumentException('<mbc::dialog /> component requires content in the slot')
            );

            return 'mbv::dialog';
        };
    }

    /**
     * Preprocess attributes for the dialog container
     *
     * @param  ComponentAttributeBag  $attributes
     * @return ComponentAttributeBag
     */
    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        return $attributes->merge([
            'data-mdc-auto-init' => 'MDCDialog',
            'role' => 'alertdialog',
            'aria-modal' => 'true',
            'aria-labelledby' => $this->title ? 'dialog-title' : null,
            'aria-describedby' => 'dialog-content',
        ])->class([
            'mdc-dialog',
            'mdc-dialog--open' => $this->open,
            'mdc-dialog--fullscreen' => $this->fullscreen,
            'mdc-dialog--scrollable' => $this->scrollable,
        ]);
    }
}
