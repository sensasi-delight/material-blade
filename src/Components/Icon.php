<?php

namespace MaterialBlade\Components;

use Illuminate\View\Component;
use Illuminate\View\ComponentAttributeBag;
use InvalidArgumentException;
use MaterialBlade\Components\Icon\Properties\Variant;
use MaterialBlade\Helper;

/**
 * @see https://mui.com/material-ui/material-icons/
 * @see https://m2.material.io/design/iconography/system-icons.html
 * @see https://fonts.google.com/icons
 */
class Icon extends Component
{
    public string $name;

    public Variant $variant;

    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct(
        string|array $name,
        ?string $variant = null,

        public string $htmlTag = 'span',
        private ?string $color = null,
        private ?string $fontSize = null
    ) {
        [$name, $variantFromName] = $this->parseNameAttr($name);

        throw_if($variantFromName && $variant, new InvalidArgumentException('You cannot pass a variant from both the name attribute and the variant attribute.'));

        $this->name = $name;
        $this->variant = Variant::fromString($variantFromName ?? $variant ?? 'filled');
    }

    private function parseNameAttr(string|array $nameAttrValue): array
    {
        if (is_array($nameAttrValue)) {
            return $nameAttrValue;
        }

        $isStringDoesntContainSpecialCharacter = preg_match('/^[a-zA-Z0-9_]+$/', $nameAttrValue);

        if ($isStringDoesntContainSpecialCharacter) {
            return [$nameAttrValue, null];
        }

        $singleQuotePattern = "/^\['([a-zA-Z0-9_]+)',\s*'([a-zA-Z0-9_]+)'\]$/";
        $doubleQuotePattern = '/^\["([a-zA-Z0-9_]+)",\s*"([a-zA-Z0-9_]+)"\]$/';

        $isValidStringifedArray = preg_match($singleQuotePattern, $nameAttrValue) || preg_match($doubleQuotePattern, $nameAttrValue);

        throw_if(! $isValidStringifedArray, new InvalidArgumentException('Invalid format for icon name. Please use a string, array, or stringified array.'));

        $jsonString = str_replace("'", '"', $nameAttrValue);

        return json_decode($jsonString, true);
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return 'mbv::icon';
    }

    public function attributesPreprocess(ComponentAttributeBag $attributes)
    {
        if ($this->fontSize) {
            $attributes = $attributes->merge([
                'style' => 'font-size: '.$this->fontSize.';',
            ]);
        }

        if ($this->color) {
            $attributes = $attributes->merge([
                'style' => 'color: '.Helper::getColor($this->color).';',
            ]);
        }

        return $attributes->class([
            'material-icons' => $this->variant === Variant::FILLED,
            'material-icons-'.$this->variant->value => $this->variant !== Variant::FILLED,
        ]);
    }
}
