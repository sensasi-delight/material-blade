<?php

use Illuminate\Support\Facades\Route;
use MaterialBlade\Helper;

Route::get(
    'assets/material-blade/{fileName}.{ext}',
    fn (string $fileName, string $ext) => Helper::generateAssetResponse($fileName, $ext)
)->name('material-blade.assets');
