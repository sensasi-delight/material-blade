<link rel="stylesheet" href="https://unpkg.com/material-components-web@14.0.0/dist/material-components-web.min.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp">

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

    /* .material-icons {
        font-size: unset;
    } */

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

    .mbc-container {
        margin: 0 auto;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .mbc-container--xs {
        max-width: 400px;
    }

    .mbc-container--sm {
        max-width: 600px;
    }

    .mbc-container--md {
        max-width: 800px;
    }

    .mbc-container--lg {
        max-width: 1200px;
    }

    .mbc-container--xl {
        max-width: 1400px;
    }

    .mbc-typography {
        margin: 0;
    }

    .mbc-typography--gutter-bottom {
        margin-bottom: 0.35em;
    }
</style>

<script type="text/javascript" src="https://unpkg.com/material-components-web@14.0.0/dist/material-components-web.min.js"></script>

<script>
    function initAppBars() {
        document.querySelectorAll('.mdc-top-app-bar').forEach(mdc.topAppBar.MDCTopAppBar.attachTo)
    }

    function initBanners() {
        document.querySelectorAll('.mdc-banner').forEach(bannerEl => {
            const buttons = bannerEl.querySelector('.mdc-banner__actions').querySelectorAll('button')
            buttons.forEach(button => button.classList.add('mdc-banner__primary-action'))

            bannerEl.mdc = new mdc.banner.MDCBanner(bannerEl)

            bannerEl.mdc.open()

            window.addEventListener("resize", () => {
                bannerEl.mdc.layout()
            })
        })
    }

    function initButtons() {
        const {
            MDCRipple
        } = mdc.ripple

        document.querySelectorAll('.mdc-button').forEach(el => new MDCRipple(el))
    }

    function initCards() {
        document.querySelectorAll('.mdc-card__action-buttons button').forEach(el => {
            el.classList.add('mdc-card__action', 'mdc-card__action--button')
        })

        document.querySelectorAll('.mdc-card__action-icons button, .mdc-card__action-icons a').forEach(el => {
            el.classList.add('mdc-card__action', 'mdc-card__action--icon')
        })

        document.querySelectorAll('.mdc-card__primary-action').forEach(el => {
            mdc.ripple.MDCRipple.attachTo(el)
        })
    }

    function initCheckBoxes() {
        document.querySelectorAll('.mdc-checkbox').forEach(el => {
            const checkbox = new mdc.checkbox.MDCCheckbox(el)
            const formField = new mdc.formField.MDCFormField(el.parentElement)
            formField.input = checkbox
        })
    }

    function initChipSets() {
        document.querySelectorAll('.mdc-chip-set').forEach(el => {
            el.MDCChipSet = new mdc.chips.MDCChipSet(el)

            el.MDCChipSet.listen('MDCChip:removal', event => {
                console.log(event)
                el.removeChild(event.detail.root)
            })
        })


        // TODO: Add event listener for adding chips
        // input.addEventListener('keydown', function(event) {
        //     if (event.key === 'Enter' || event.keyCode === 13) {
        //         const chipEl = document.createElement('div')

        //         // ... perform operations to properly populate/decorate chip element ...
        //         chipSetEl.appendChild(chipEl)
        //         chipSet.addChip(chipEl)
        //     }
        // })
    }

    function initCircularProgresses() {
        document.querySelectorAll('.mdc-circular-progress').forEach(el => {
            el.circularProgress = new mdc.circularProgress.MDCCircularProgress(el)

            if (value = el.getAttribute('aria-valuenow')) {
                el.circularProgress.progress = value
            }
        })
    }

    function initDataTables() {
        document.querySelectorAll('.mdc-data-table').forEach(el => {
            el.MDCDataTable = new mdc.dataTable.MDCDataTable(el)
        })
    }

    function initDrawers() {
        const {
            MDCDrawer
        } = mdc.drawer;

        document.querySelectorAll('.mdc-drawer').forEach(el => {
            el.MBC = MDCDrawer.attachTo(el)
        })
    }

    function initFabs() {
        document.querySelectorAll('.mdc-fab').forEach(mdc.ripple.MDCRipple.attachTo)
    }

    function initIconButtons() {
        document.querySelectorAll('.mdc-icon-button').forEach(button => {
            if (button.querySelector('.mdc-icon-button__icon--on')) {
                button.MDCIconButtonToggle = new mdc.iconButton.MDCIconButtonToggle(button)
                return
            }

            if (button.querySelector('.mdc-icon-button__ripple')) {
                button.MDCRipple = new mdc.ripple.MDCRipple(button)
                button.MDCRipple.unbounded = true
            }
        })
    }

    function initLinearProgresses() {
        document.querySelectorAll('.mdc-linear-progress').forEach(el => {
            el.linearProgress = (new mdc.linearProgress.MDCLinearProgress(el))

            if (value = el.getAttribute('aria-valuenow')) {
                el.linearProgress.progress = value
            }

            if (el.dataset.bufferValue && el.dataset.bufferValue != 1) {
                el.linearProgress.buffer = el.dataset.bufferValue
            }
        })
    }

    function initLists() {
        const {
            MDCRipple
        } = mdc.ripple

        const {
            MDCList
        } = mdc.list

        document.querySelectorAll('.mdc-deprecated-list').forEach(el => {
            el.MBC = new mdc.list.MDCList(el)
            el.MBC.listElements.map((listItemEl) => new MDCRipple(listItemEl));

            if (el.getAttribute('role') === 'listbox') {
                el.MBC.singleSelection = true;
            }

            // exist on drawer fn
            // list.wrapFocus = true;
        })
    }

    function initSnackbars() {
        document.querySelectorAll('.mdc-snackbar').forEach(el => {
            el.MDCSnackbar = new mdc.snackbar.MDCSnackbar(el)

            if (el.hasAttribute('timeout')) {
                el.MDCSnackbar.foundation.setTimeoutMs(el.getAttribute('timeout'))
            }

            if (el.hasAttribute('open')) {
                el.MDCSnackbar.open()
            }
        })
    }

    function initSwitches() {
        document.querySelectorAll('.mdc-switch').forEach(el => {
            el.MDCSwitch = new mdc.switchControl.MDCSwitch(el)
        })
    }

    function initTabBars() {
        document.querySelectorAll('.mdc-tab-bar').forEach(el => {
            el.MDCTabBar = new mdc.tabBar.MDCTabBar(el)
        })
    }

    function initTooltips() {
        document.querySelectorAll('.mdc-tooltip').forEach(el => {
            el.MBC = new mdc.tooltip.MDCTooltip(el)
        })
    }

    document.addEventListener("DOMContentLoaded", () => {
        initBanners()
        initAppBars()
        initButtons()
        initCards()
        initCheckBoxes()
        initChipSets()
        initCircularProgresses()
        initDataTables()
        initFabs()
        initIconButtons()
        initLinearProgresses()
        initLists()
        initSnackbars()
        initSwitches()
        initTabBars()
        initTooltips()
    })
</script>