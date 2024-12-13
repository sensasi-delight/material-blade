@php
    throw_if(
        $slot->hasActualContent(),
        new \InvalidArgumentException('Icon component does not allow any content. Use the "name" attribute instead.'),
    );
@endphp

<{{ $htmlTag }} {{ $attributesPreprocess($attributes) }}>{{ $name }}</{{ $htmlTag }}>
