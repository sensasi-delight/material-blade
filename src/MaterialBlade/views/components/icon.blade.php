<span {{ $attributes->class([
  'material-icons' => $variant == 'filled',
  'material-icons-' . $variant => $variant != 'filled',
  'mdc-theme--' . $color => $color
]) }}>{{ $icon }}</span>