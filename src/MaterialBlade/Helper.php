<?php

namespace MaterialBlade;

class Helper
{
  static function isThemeColor(string $colorText)
  {
    return in_array($colorText, ['primary', 'secondary', 'warning', 'error', 'success', 'info']);
  }

  static function getColor(string $colorText)
  {
    $isThemeColor = Self::isThemeColor($colorText);
    return $isThemeColor ? 'var(--mdc-theme-' . $colorText . ')' : $colorText;
  }
}
