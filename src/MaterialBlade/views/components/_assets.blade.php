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

    .mdc-theme--warning{
      color: var(--mdc-theme-warning) !important
    }

    .mdc-theme--info{
      color: var(--mdc-theme-info) !important
    }

    .mdc-theme--success{
      color: var(--mdc-theme-success) !important
    }

    .materialblade-theme--secondary {
        --mdc-theme-primary: var(--mdc-theme-secondary);
    }

    .materialblade-theme--error {
        --mdc-theme-primary: var(--mdc-theme-error);
    }

    .materialblade-theme--warning {
        --mdc-theme-primary: var(--mdc-theme-warning);
    }

    .materialblade-theme--info {
        --mdc-theme-primary: var(--mdc-theme-info);
    }

    .materialblade-theme--success {
        --mdc-theme-primary: var(--mdc-theme-success);
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