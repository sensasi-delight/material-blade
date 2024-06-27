# Material Blade

Material Blade is a simple package that provides the beautifulness of Google [Material Design](https://material.io/) components as Laravel Blade components. Material Blade aims to make UI/UX development of your Laravel app faster, inspired by [Material UI](https://mui.com/).

```html
<!-- from this -->
<button class="mdc-button">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__label">This is a Button</span>
</button>

<!-- to this -->
<x-MaterialBlade::button label="This is a Button" />

<!-- or this for more shorter -->
<x-mbc::button label="This is a Button" />
```

General knowledge of Laravel and Blade components i'ts required for using this package. However, the fully understand about this feature is helpful for optimizing the usages of this package. If you never heard about [Blade Components](https://laravel.com/docs/8.x/blade#components), it is a good start to understand it and plays with Material Blade package.

> The examples of package usages can be seen on [this repository](https://github.com/sensasi-delight/material-blade-demo).

## Status

This package is still under development, please contribute to make it release faster. The status of [Material Design Web components](https://material.io/components?platform=web) that implemented on this package are shown on the list below.

### Components

-   [x] App bar: Top
-   [x] Banner
-   [x] Button
    -   [x] Basic Button
    -   [x] Floating Action Button
    -   [x] Icon Button
-   [x] Card
-   [x] Checkbox
-   [x] Chip
-   [x] Data table
-   [ ] Dialog
-   [x] Icon
-   [ ] Image list
-   [ ] List
-   [ ] Menu
-   [ ] Navigation drawer
-   [x] Progress indicator
    -   [x] Linear Progress
    -   [x] Circular Progress
-   [ ] Radio button
-   [ ] Slider
-   [x] Snackbar
-   [x] Switch
-   [x] Tab Bar
-   [ ] Text field
-   [x] Tooltip
-   [x] Typography

### Unsupported Components

The implementation of these components below are not supported by default for Material Design Web.

-   App bar: bottom
-   Backdrop
-   Bottom navigation
-   Date picker
-   Divider
-   Navigation rail
-   Sheet: bottom
-   Sheet: side
-   Time picker

## Installation

Material Blade is available on [packagist.org](https://packagist.org/packages/sensasi-delight/material-blade), You can import the package to your Laravel project using Composer by command-line below:

```bash
composer require sensasi-delight/material-blade
```

After Material Blade has installed on your Laravel project, you have to [registering](https://laravel.com/docs/8.x/providers#registering-providers) the `MaterialBlade\ComponentProvider::class` to the app providers.

```php
// config/app.php

'providers' => [
    // Other Service Providers

    MaterialBlade\ComponentProvider::class,
];
```

Next step, you must includes once the `<x-MaterialBlade::_assets />` inside `<head>` on your `view`. That's it‼, now you can use the Material Blade components on your `view`🎉. Your `view` should look like code below.

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <meta
            http-equiv="X-UA-Compatible"
            content="ie=edge"
        />
        <title>Material Blade Example</title>

        <!-- Material Blade required assets -->
        <x-MaterialBlade::_assets />
    </head>

    <body>
        <!-- this is Material Blade component -->
        <x-MaterialBlade::button label="This is a Button" />
    </body>
</html>
```

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

The code is released under the MIT license.

## Contact

Email - [zainadam.id@gmail.com](mailto:zainadam.id@gmail.com?subject=[GitHub]%20MaterialBlade)

Twitter - [@sensasi_DELIGHT](https://twitter.com/sensasi_DELIGHT)
