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

  static function parseIconString(?string $iconText)
  {
    $icon = $iconText;
    $variant = null;

    $iconArr = explode(':', $iconText, 3);

    if (count($iconArr) > 1) {
      [$icon, $variant] = $iconArr;      
    }

    return [$icon, $variant];
  }
}
