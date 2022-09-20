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

    .mdc-chip-set--choice .mdc-chip.mdc-chip--selected .mdc-chip__icon--leading {
        color: var(--mdc-theme-primary);
    }

    .mdc-button {
        --mdc-outlined-button-outline-color: var(--mdc-theme-primary);
    }

    .mdc-icon-button {
        display: inline-flex;
        width: unset;
        height: unset;
    }

    .material-icons {
        font-size: unset;
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



    .mdc-card {
        max-width: 350px;
    }

    .mdc-card__header * {
        margin: 0
    }

    .mdc-card__header {
        padding: 1rem;
    }

    .mdc-card__media-content {
        color: var(--mdc-theme-text-primary-on-dark, white)
    }

    .mdc-card__content,
    .mdc-card__header-subtitle:not(.mdc-card__media-content .mdc-card__header-subtitle) {
        color: var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, .54));
    }

    .mdc-card__content {
        padding: 0 1rem 8px;
    }

    .mdc-card__header+.mdc-card__content>p,
    .mdc-card__primary-action:has(.mdc-card__header:nth-last-child(2))+.mdc-card__content>p {
        margin-top: 0;
    }

    .mdc-card__content :last-child {
        margin-bottom: 0;
    }


    .mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label,
    .mdc-tab:not(.mdc-tab--active) .mdc-tab__icon {
        color: var(--mdc-theme-text-secondary-on-light);
    }

    .mdc-tab.light-text:not(.mdc-tab--active) .mdc-tab__text-label,
    .mdc-tab.light-text:not(.mdc-tab--active) .mdc-tab__icon {
        color: var(--mdc-theme-text-secondary-on-dark);
    }

    .mdc-tab--active.light-text {
        --mdc-theme-primary: #fff;
    }

    .mdc-switch__icon.material-icons {
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .mdc-switch {
        --mdc-switch-selected-focus-track-color: var(--mdc-theme-primary);
        --mdc-switch-selected-track-color: var(--mdc-theme-primary);
        --mdc-switch-selected-hover-track-color: var(--mdc-theme-primary);
        --mdc-switch-selected-pressed-track-color: var(--mdc-theme-primary);

        --mdc-switch-selected-focus-handle-color: var(--mdc-theme-primary);
        --mdc-switch-selected-hover-handle-color: var(--mdc-theme-primary);
        --mdc-switch-selected-pressed-handle-color: var(--mdc-theme-primary);
    }

    .mdc-switch:enabled .mdc-switch__track::after,
    .mdc-switch:enabled:active .mdc-switch__track::after,
    .mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after,
    .mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
        background-image: linear-gradient(0deg,
                rgba(255, 255, 255, 0.4) 0%,
                rgba(255, 255, 255, 0.4) 100%);
    }

    .mdc-switch.mdc-switch--selected:enabled:active .mdc-switch__handle::after,
    .mdc-switch.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after,
    .mdc-switch.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
        background-image: linear-gradient(0deg,
                rgba(0, 0, 0, 0.24) 0%,
                rgba(0, 0, 0, 0.24) 100%);
    }
</style>

<script type="text/javascript"
    src="https://unpkg.com/material-components-web@14.0.0/dist/material-components-web.min.js"></script>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        @stack('MaterialBlade-scripts-on-ready')
    });
</script>
