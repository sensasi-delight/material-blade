import './main.scss'

import type { MDCBanner } from '@material/banner'
import type { MDCCircularProgress } from '@material/circular-progress'
import type { MDCDialog } from '@material/dialog'
import type { MDCLinearProgress } from '@material/linear-progress'
import type { MDCMenu } from '@material/menu'
import type { MDCSnackbar } from '@material/snackbar'
import { MDCIconButtonToggle } from '@material/icon-button'
import { MDCRipple } from '@material/ripple'

document.addEventListener('DOMContentLoaded', () => {
    import('material-components-web').then(({ autoInit }) => {
        autoInit()

        initIconButtons()
        autoOpenBanner()
        initDialogs()
        initMenus()
        initSnackbars()
        initChipSets()
        setCircularProgressValues()
        setLinearProgressValues()
    })
})

/**
 * Auto open all banners with the `mbc-banner--open` class
 */
function autoOpenBanner() {
    document.querySelectorAll('.mdc-banner').forEach(bannerEl => {
        const typedBannerEl = bannerEl as HTMLDivElement & {
            MDCBanner: MDCBanner
        }

        if (typedBannerEl.classList.contains('mbc-banner--open')) {
            typedBannerEl.MDCBanner.open()
        }
    })
}

/**
 * Initialize all icon buttons
 */
function initIconButtons() {
    document.querySelectorAll('.mdc-icon-button').forEach(button => {
        if (button.querySelector('.mdc-icon-button__icon--on')) {
            new MDCIconButtonToggle(button)
            return
        }

        if (button.querySelector('.mdc-icon-button__ripple')) {
            const temp = new MDCRipple(button)
            temp.unbounded = true
        }
    })
}

/**
 * Initialize all dialogs
 */
function initDialogs() {
    document.querySelectorAll('.mdc-dialog').forEach(dialogEl => {
        const typedDialogEl = dialogEl as HTMLDivElement & {
            MDCDialog: MDCDialog
        }

        if (typedDialogEl.classList.contains('mdc-dialog--open')) {
            typedDialogEl.MDCDialog.open()
        }
    })
}

/**
 * Initialize all menus
 */
function initMenus() {
    document.querySelectorAll('.mdc-menu').forEach(menuEl => {
        const typedMenuEl = menuEl as HTMLDivElement & {
            MDCMenu: MDCMenu
        }

        if (typedMenuEl.classList.contains('mdc-menu--open')) {
            typedMenuEl.MDCMenu.open = true
        }
    })
}

/**
 * TODO: IMPLEMENT REMOVE FUNCTIONALITY. see https://github.com/material-components/material-components-web/blob/v14.0.0/packages/mdc-chips/deprecated/README.md#removing-chips-from-the-dom.
 * TODO: IMPLEMENT ADD FUNCTIONALITY, https://github.com/material-components/material-components-web/blob/v14.0.0/packages/mdc-chips/deprecated/README.md#removing-chips-from-the-dom.
 */
function initChipSets() {

}

/**
 * Set the progress values for all circular progress indicators
 */
function setCircularProgressValues() {
    document.querySelectorAll('.mdc-circular-progress').forEach((el) => {
        const typedEl = el as HTMLDivElement & {
            MDCCircularProgress: MDCCircularProgress
        }

        console.log(typedEl.ariaValueNow);

        if (typedEl.dataset.value) {
            typedEl.MDCCircularProgress.progress = parseFloat(typedEl.dataset.value)
        }
    })
}

/**
 * Set the progress values for all linear progress indicators
 */
function setLinearProgressValues() {
    document.querySelectorAll('.mdc-linear-progress').forEach(el => {
        const typedEl = el as HTMLDivElement & {
            MDCLinearProgress: MDCLinearProgress
        }

        if (typedEl.dataset.value) {
            typedEl.MDCLinearProgress.progress = parseFloat(typedEl.dataset.value)
        }

        if (typedEl.dataset.bufferValue) {
            typedEl.MDCLinearProgress.buffer = parseFloat(typedEl.dataset.bufferValue)
        }
    })
}

function initSnackbars() {
    document.querySelectorAll('.mdc-snackbar').forEach(el => {
        const typedEl = el as HTMLDivElement & {
            MDCSnackbar: MDCSnackbar
        }

        if (el.hasAttribute('timeout')) {
            const timeoutValue = el.getAttribute('timeout')
            if (timeoutValue !== null) {
                typedEl.MDCSnackbar.timeoutMs = parseInt(timeoutValue, 10)
            }
        }

        if (el.hasAttribute('open')) {
            typedEl.MDCSnackbar.open()
        }
    })
}
