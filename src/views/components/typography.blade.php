<{{ $element }} {{ $attributesPreprocess($attributes) }}>
    {{ trim($slot) ?: $propSlot }}
</{{ $element }}>