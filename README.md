# Material Blade

Material Blade is a simple package that provides the beautifulness of Google [Material Design](https://material.io/) components as Laravel Blade components. Material Blade aims to assist you in prototyping the UI/UX of your Laravel app faster, inspired by [MaterialUI](https://github.com/mui/material-ui).

General knowledge of Laravel and Blade components i'ts required for using this package. however, the fully understand about this feature is helpful for optimizing the usages of this package. If you never heard about [Blade Components](https://laravel.com/docs/8.x/blade#components), it is a good start to understand it and plays with Material Blade package.

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
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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

## Components

### Button

<figure style="height: 500px;"><iframe src="https://phpsandbox.io/e/x/hoaeo?&layout=Preview&iframeId=738617sr51&theme=dark&defaultPath=/button&showExplorer=no" style="display: block" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" height="100%" width="100%"></iframe></figure>

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

Email - [zainadam.id@gmail.com](mailto:zainadam.id@gmail.com?subject=[GitHub]%20EigenvectorCentralityPHP)

Twitter - [@sensasi_DELIGHT](https://twitter.com/sensasi_DELIGHT)