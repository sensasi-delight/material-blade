<style>
    @import url(https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css);
    @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

    :root {
        --mdc-theme-primary: #1565c0 !important;
        --mdc-theme-secondary: #7b1fa2 !important;
        --mdc-theme-error: #c62828 !important;
        --mdc-theme-warning: #e65100 !important;
        --mdc-theme-info: #01579b !important;
        --mdc-theme-success: #1b5e20 !important;
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
</style>

<script type="text/javascript"
    src="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js"></script>

@stack('MaterialBlade-scripts')
