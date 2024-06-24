<?php

use Illuminate\Support\Facades\Route;
use MaterialBlade\Helper;

Route::prefix('assets/material-blade')->group(function () {
    Route::get('main.js', function () {
        return Helper::generateAssetResponse('main.js', 'application/javascript');
    })->name('material-blade.assets.main.js');

    Route::get('main.css', function () {
        return Helper::generateAssetResponse('main.css', 'text/css');
    })->name('material-blade.assets.main.css');

    Route::get('components/{fileName}', function (string $fileName) {
        return Helper::generateAssetResponse('components/' . $fileName, 'application/javascript');
    });
});
