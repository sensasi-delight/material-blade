<?php

namespace MaterialBlade\Components;


use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;

class Tooltip extends Component
{
  public ?string $title;
  public string $id;
  public string $isPersistent;
  // public $size;

  /**
   * Create a new component instance.
   *
   * @return void
   */
  public function __construct(
    bool $persistent = false,
    ?string $title = null,
    ?string $id = null
  ) {
    $this->title = $title;
    $this->id = $id ?: uniqid();
    $this->isPersistent = $persistent;
  }

  /**
   * Get the view / contents that represent the component.
   *
   * @return \Illuminate\Contracts\View\View|\Closure|string
   */
  public function render()
  {
    // return view('MaterialBlade::tooltip');
    return function (array $data) {
      $this->componentValidation($data);
      return 'MaterialBlade::tooltip';
    };
  }

  public function componentValidation(array $data)
  {
    if ($this->isPersistent && !isset($data['body'])) {
      throw new \Exception('"Persistent" only work on Rich Tooltip', 1);
    }

    if(isset($data['title']) && $data['attributes']->has('title')) {
      throw new \Exception('"title" duplicated please choose one', 1);
    }

    
  }

  public function childPreprocess(string $slotString)
  {

    $isAriaLabelEqualTitle = stripos($slotString, 'aria-label="' . $this->title . '"');

    $slotStrings = explode("\r\n", $slotString);

    $prependAttr = ' aria-describedby="' . $this->id . '"';
    if ($isAriaLabelEqualTitle) {
      $prependAttr = ' data-tooltip-id="' . $this->id . '" data-hide-tooltip-from-screenreader="true"';
    }

    $slotStrings[0] = str_replace('>', $prependAttr . '>', $slotStrings[0]);

    return implode("\r\n", $slotStrings);
  }


  /**
   * 
   *
   * @return ComponentAttributeBag
   */
  public function attributesPreprocess(ComponentAttributeBag $attributes)
  {
    if ($this->isPersistent) {
      $attributes = $attributes->merge([
        'tabindex' => -1,
        'data-mdc-tooltip-persistent' => "true"
      ]);
    }

    return $attributes->class([
      'mdc-tooltip'
    ])->merge([
      'id' => $this->id,
      'role' => $attributes->prepends($this->isPersistent ? 'dialog' : 'tooltip'),
      'aria-hidden' => $attributes->prepends('true')
    ]);
  }
}
