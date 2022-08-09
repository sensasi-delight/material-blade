@props([
  'variant' => 'contained',
  'label'
])

@php
  $classes = "mdc-button " . $VARIANTS_CLASSMAP[$variant] . " " . $attributes['class'];
  unset($attributes['class']);
@endphp

<button class="{{ $classes }}" {{ $attributes }}>
  <span class="mdc-button__ripple"></span>
  <span class="mdc-button__label">{{ $slot ?: $label }}</span>
</button>