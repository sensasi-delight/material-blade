<style>
    @import url(https://unpkg.com/material-components-web@14.0.0/dist/material-components-web.min.css);
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp);

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
        /* --padding-x: 6px;
      --padding-y: 16px;
      --mdc-typography-button-font-size: .875rem;
      padding: var(--padding-x) var(--padding-y); */
    }

    /* TODO: button size */
    /* .materialblade-size--small {
      font-size: calc(var(--mdc-typography-button-font-size) - 0.0625rem);
      padding: calc(var(--padding-x) - 2px) calc(var(--padding-y) - 6px);
      height: unset;
    }
    .materialblade-size--large {
      font-size: calc(var(--mdc-typography-button-font-size) + 0.0625rem);
      padding: calc(var(--padding-x) + 2px) calc(var(--padding-y) + 6px);
      height: unset;
    } */

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
