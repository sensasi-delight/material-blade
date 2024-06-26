<?php

namespace MaterialBlade;

use Illuminate\Support\Facades\Response;

class Helper
{
    public static function isThemeColor(string $colorText)
    {
        return in_array($colorText, ['primary', 'secondary', 'warning', 'error', 'success', 'info']);
    }

    public static function getColor(string $colorText)
    {
        $isThemeColor = self::isThemeColor($colorText);

        return $isThemeColor ? 'var(--mdc-theme-'.$colorText.')' : $colorText;
    }

    public static function parseIconString(?string $iconText)
    {
        $icon = $iconText;
        $variant = null;

        $iconArr = explode(':', $iconText, 3);

        if (count($iconArr) > 1) {
            [$icon, $variant] = $iconArr;
        }

        return [$icon, $variant];
    }

    public static function generateAssetResponse(string $fileName, string $extName)
    {
        $response = Response::make(
            file_get_contents(__DIR__.'/assets/dist/'.$fileName.'.'.$extName),
            200,
            ['Content-Type' => match ($extName) {
                'css' => 'text/css',
                'js' => 'application/javascript',
                default => 'text/plain',
            }]
        );

        $response->setSharedMaxAge(31536000);
        $response->setMaxAge(31536000);
        $response->setExpires(new \DateTime('+1 year'));

        return $response;
    }
}
