<link rel="stylesheet" href="https://unpkg.com/material-components-web@14.0.0/dist/material-components-web.min.css">
<link rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp">

<style>
    :root {
        --mdc-theme-primary: #1565c0;
        --mdc-theme-secondary: #7b1fa2;
        --mdc-theme-error: #c62828;
        --mdc-theme-warning: #e65100;
        --mdc-theme-info: #01579b;
        --mdc-theme-success: #1b5e20;
    }

    .mdc-button {
        --mdc-outlined-button-outline-color: var(--mdc-theme-primary);
    }

    .mdc-banner .mdc-button:not(:disabled) {
        --mdc-text-button-label-text-color: var(--mdc-theme-primary);
        --mdc-text-button-hover-state-layer-color: var(--mdc-theme-primary);
    }

    .mdc-banner .mdc-button--raised:not(:disabled),
    .mdc-banner .mdc-button--unelevated:not(:disabled) {
        --mdc-text-button-label-text-color: var(--mdc-theme-on-primary);
        --mdc-text-button-hover-state-layer-color: var(--mdc-theme-on-primary);
    }

    .fullwidth {
        width: 100%;
    }

    .mdc-tooltip__surface a {
        text-decoration: none;
        color: var(--mdc-theme-primary);
    }
</style>

<script type="text/javascript"
    src="https://unpkg.com/material-components-web@14.0.0/dist/material-components-web.min.js"></script>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        @stack('MaterialBlade-scripts-on-ready')
    });
</script>
