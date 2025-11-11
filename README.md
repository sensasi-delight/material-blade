# 🎨 Material Blade

> **Beautiful Google Material Design components for Laravel Blade** ✨

Transform your Laravel applications with elegant, ready-to-use Material Design components. Build stunning UIs faster than ever, inspired by [Material UI](https://mui.com/) 🚀

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Laravel](https://img.shields.io/badge/Laravel-9%20%7C%2010%20%7C%2011%20%7C%2012-red.svg)](https://laravel.com)
[![PHP](https://img.shields.io/badge/PHP-8.1%2B-purple.svg)](https://php.net)

---

## ⚡ Why Material Blade?

**Before** 😓
```html
<button class="mdc-button mdc-button--raised">
    <span class="mdc-button__ripple"></span>
    <span class="mdc-button__label">Click Me</span>
</button>
```

**After** 😎
```html
<x-mbc::button label="Click Me" variant="raised" />
```

Simple. Clean. Beautiful. That's Material Blade! 💫

---

## 🚀 Quick Start

### 📦 Installation

```bash
composer require sensasi-delight/material-blade
```

### 🎯 Setup

Add the assets component in your layout's `<head>`:

```html
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>

        <!-- 🎨 Material Blade Assets -->
        <x-mbc::_assets />
    </head>
    <body>
        <!-- ✨ Start using components! -->
        <x-mbc::button label="Hello World" color="primary" />
    </body>
</html>
```

### 💡 Usage Examples

```blade
{{-- 🎯 Alerts --}}
<x-mbc::alert severity="success">Profile updated successfully!</x-mbc::alert>

{{-- 🎨 Cards --}}
<x-mbc::card>
    <x-mbc::card-header title="Welcome" subtitle="Material Blade" />
    <x-mbc::card-content>
        Build beautiful interfaces with Material Design!
    </x-mbc::card-content>
</x-mbc::card>

{{-- 🔘 Buttons --}}
<x-mbc::button variant="raised" color="primary" icon="save">
    Save Changes
</x-mbc::button>

{{-- 📝 Text Fields --}}
<x-mbc::text-field label="Email" type="email" required />
```

---

## 📚 Components

30+ [Material Design components](https://m2.material.io/components?platform=web) ready to use:

### 🎯 **Feedback & Alerts**
- [🔔 Alert](https://material-blade-docs.vercel.app/components/alert) - [🎪 Banner](https://material-blade-docs.vercel.app/components/banner) - [💬 Dialog](https://material-blade-docs.vercel.app/components/dialog) - [📢 Snackbar](https://material-blade-docs.vercel.app/components/snackbar)

### 🧭 **Navigation**
- [📱 App Bar](https://material-blade-docs.vercel.app/components/app-bar) - [🚪 Drawer](https://material-blade-docs.vercel.app/components/drawer) - [📋 Menu](https://material-blade-docs.vercel.app/components/menu) - [📑 Tab Bar](https://material-blade-docs.vercel.app/components/tab-bar)

### 🎛️ **Input & Forms**
- [🔘 Button](https://material-blade-docs.vercel.app/components/button) - [⭕ Checkbox](https://material-blade-docs.vercel.app/components/checkbox) - [🔲 Radio](https://material-blade-docs.vercel.app/components/radio) - [🎚️ Slider](https://material-blade-docs.vercel.app/components/slider) - [🔄 Switch](https://material-blade-docs.vercel.app/components/switch) - [📝 Text Field](https://material-blade-docs.vercel.app/components/text-field)
- [➕ FAB](https://material-blade-docs.vercel.app/components/fab) - [🔹 Icon Button](https://material-blade-docs.vercel.app/components/icon-button)

### 📊 **Data Display**
- [🃏 Card](https://material-blade-docs.vercel.app/components/card) - [🏷️ Chip](https://material-blade-docs.vercel.app/components/chip) - [📊 Data Table](https://material-blade-docs.vercel.app/components/data-table) - [🎨 Icon](https://material-blade-docs.vercel.app/components/icon) - [🖼️ Image List](https://material-blade-docs.vercel.app/components/image-list) - [📃 List](https://material-blade-docs.vercel.app/components/list) - [💬 Tooltip](https://material-blade-docs.vercel.app/components/tooltip) - [✍️ Typography](https://material-blade-docs.vercel.app/components/typography)

### ⏳ **Progress Indicators**
- [📈 Linear Progress](https://material-blade-docs.vercel.app/components/linear-progress) - [⭕ Circular Progress](https://material-blade-docs.vercel.app/components/circular-progress)

[**📖 View Full Documentation →**](https://material-blade-docs.vercel.app)

---

## ✨ Features

- ✅ **30+ Components** - Complete Material Design component library
- ✅ **Type-Safe** - PHP enums for variants and properties
- ✅ **Theme Support** - Built-in color system with CSS variables
- ✅ **Auto-Discovery** - No manual service provider registration (Laravel 8+)
- ✅ **Icon Variants** - Filled, Outlined, Round, Sharp, Two-Tone
- ✅ **Elevation Support** - Material Design elevation levels (0-24)
- ✅ **Slot-Based** - Flexible content structure with Blade slots
- ✅ **Well Documented** - Comprehensive docs and examples

---

## 🛠️ Development

Want to contribute? We'd love your help! 💪

```bash
# Clone the repository
git clone https://github.com/sensasi-delight/material-blade
cd material-blade

# Install dependencies
composer install
npm install

# Start development
npm run dev
```

### 🤝 Contributing

1. 🍴 Fork the Project
2. 🌿 Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the Branch (`git push origin feature/AmazingFeature`)
5. 🎉 Open a Pull Request

All contributions are **greatly appreciated**! ❤️

---

## 📋 Requirements

- 🐘 **PHP** 8.1 or higher
- 🎨 **Laravel** 9.x, 10.x, 11.x, or 12.x
- 💡 Basic knowledge of [Blade Components](https://laravel.com/docs/blade#components)

---

## 🎓 Resources

- 📖 [**Documentation**](https://material-blade-docs.vercel.app) - Complete guide and API reference
- 🎨 [**Material Design**](https://material.io/) - Design guidelines
- 💬 [**Discussions**](https://github.com/sensasi-delight/material-blade/discussions) - Ask questions and share ideas

---

## 📄 License

Released under the [MIT License](LICENSE). Free to use in personal and commercial projects! 🎉

---

<div align="center">

### 🌟 Star us on GitHub!

If you find Material Blade useful, please give us a star ⭐

**Made with ❤️ for the Laravel community**

[⬆ Back to top](#-material-blade)

</div>
