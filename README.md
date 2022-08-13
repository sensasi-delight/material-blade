# Material Blade

Material Blade is a simple package that provides the beautifulness of Google [Material Design](https://material.io/) components as Laravel Blade components. Material Blade aims to assist you in prototyping the UI/UX of your Laravel app faster, inspired by [MaterialUI](https://github.com/mui/material-ui).

## Installation

Material Blade is available on [packagist.org](https://packagist.org/packages/sensasi-delight/material-blade), You can import the package to your Laravel project using Composer by command-line below:

```bash
composer require sensasi-delight/material-blade
```

After Material Blade has installed on your Laravel project, you have to [registering](https://laravel.com/docs/8.x/providers#registering-providers) the `MaterialBlade\ComponentProvider::class` to the app providers. That's it‼, now you can use the Material Blade on your project🎉.

```php
// config/app.php

// ...

'providers' => [
    // Other Service Providers

    MaterialBlade\ComponentProvider::class,
];

// ...
```

## Quick Start

This is minimal example using Material Blade component on your Blade view:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Material Blade Example</title>

    <!-- MATERIAL DESIGN REQUIRED STYLES -->
    <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>

<body>

    <!-- this is Material Blade component -->
    <x-MaterialBlade::button label="This is a Button" />

    <!-- MATERIAL DESIGN REQUIRED SCRIPTS -->
    <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

    @stack('scripts')

</body>

</html>
```

General knowledge of Laravel and Blade components i'ts required for using this package. however, the fully understand about this feature is helpful for optimizing the usages of this package. If you never heard about [Blade Components](https://laravel.com/docs/8.x/blade#components), it is a good start to understand it and plays with Material Blade package.
