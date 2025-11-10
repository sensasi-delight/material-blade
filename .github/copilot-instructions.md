# Material Blade - AI Coding Agent Instructions

## Project Overview
Material Blade is a Laravel package that wraps Google Material Design Web Components (v2) as Laravel Blade components. It bridges Material Components Web JavaScript library with Laravel's Blade templating system.

## Architecture

### Component Structure Pattern
Each component follows a three-part architecture:

1. **PHP Component Class** (`src/Components/{Name}.php`)
   - Extends `Illuminate\View\Component`
   - Constructor parameters map to component props
   - Uses enum-based properties for type-safe values (see `src/Components/Button/Properties/Variant.php`)
   - Implements `attributesPreprocess()` method to merge CSS classes and HTML attributes
   - Returns Blade view via `render()` method pointing to `mbv::*` namespace

2. **Blade Template** (`src/views/components/{name}.blade.php`)
   - Uses `$attributesPreprocess()` to apply computed attributes
   - Wraps Material Design HTML structure
   - References other components via `<x-mbc::*>` namespace

3. **Properties Directory** (`src/Components/{Name}/Properties/`)
   - Contains PHP enums for component variants, severity, etc.
   - All enums use the `PropertyEnum` trait for string-based initialization
   - Example: `Variant::fromString('outlined')` validates and converts string to enum

### Key Files
- `src/ServiceProvider.php`: Registers views under `mbv::` namespace and components under `mbc::` namespace; special handling for `list` and `switch` (reserved PHP keywords)
- `src/Helper.php`: Theme color utilities (`getColor()`, `isThemeColor()`) and icon parsing (`parseIconString()`)
- `src/routes.php`: Serves compiled assets via named route `material-blade.assets`
- `src/assets/src/main.ts`: Initializes Material Components Web via `autoInit()`, handles icon buttons and banners

## Component Development Patterns

### Adding New Components
1. Create PHP class in `src/Components/{Name}.php` extending `Component`
2. Define constructor parameters matching Material Design props
3. Create enum properties in `src/Components/{Name}/Properties/` using `PropertyEnum` trait
4. Implement `attributesPreprocess()` to merge classes:
   ```php
   return $attributes->merge([...])->class([
       'mdc-{component}',
       'mdc-{component}--{variant}' => $condition,
   ]);
   ```
5. Create Blade template in `src/views/components/{name}.blade.php`
6. Register in `ServiceProvider.php` if component name conflicts with PHP keywords

### Component Naming Conventions
- PHP classes: PascalCase (e.g., `IconButton`)
- Blade files: kebab-case (e.g., `icon-button.blade.php`)
- Component usage: `<x-mbc::{name}>` or `<x-MaterialBlade::{name}>`
- Views: `mbv::{name}` namespace

### Property Enum Pattern
All component variants/options use enums with `PropertyEnum` trait:
```php
enum Variant: string {
    use PropertyEnum;
    case OUTLINED = 'outlined';
}
// Usage: Variant::fromString('outlined') throws exception if invalid
```

### HTML Tag Flexibility
Components like Button use `getHtmlTag()` to dynamically switch between `<button>` and `<a>` based on presence of `href` attribute.

### Color Theming
- Use `Helper::getColor()` to convert theme keywords (`primary`, `secondary`, `warning`, `error`, `success`, `info`) to CSS variables
- Theme colors map to `var(--mdc-theme-{color})`
- Non-theme colors pass through as-is

### Icon Handling
Icons support variant notation: `'icon_name:variant'` parsed by `Helper::parseIconString()`. Components accept string or array for icon props.

## Development Workflow

### Build Commands
- **PHP linting**: `composer lint` (Pint test mode), `composer lint:fix` (auto-fix)
- **JS/TS build**: `npm run dev` (watch mode), `npm run build` (production)
- **JS linting**: `npm run lint` (Prettier check), `npm run lint:fix` (auto-format)

### Asset Pipeline
- Vite builds from `src/assets/src/main.ts` to `src/assets/dist/`
- Output uses fixed filenames (`main.js`, `main.css`) for Laravel asset route
- Base path: `/assets/material-blade/`

### Dependencies
- PHP 8.1+ with Laravel 9-12 support
- Material Components Web 14.0.0 via npm
- Uses Material Icons font variants (filled, outlined, round, sharp, two-tone)

## Common Patterns

### Slot vs Label Pattern
Components like Button accept either `label` attribute or slot content, but not both. Validation in constructor throws `InvalidArgumentException` if misused.

### Ripple Effect
Most interactive components include `<span class="mdc-button__ripple"></span>` unless `disableRipple` prop is true.

### Data Attributes
Components use `data-mdc-auto-init` attribute for Material Components Web automatic initialization.

## Testing & Quality
- Package is **under active development** (pre-release)
- Refer to demo repository: `sensasi-delight/material-blade-demo` for usage examples
- Follow Laravel Pint rules for PHP code style
- Follow Prettier config for Blade/JS/TS formatting

## Integration Notes
- Auto-discovered via Laravel package discovery (no manual provider registration needed for Laravel 8+)
- Components render server-side with hydration via Material Components Web JavaScript
- Assets served through Laravel route, not directly from public directory
