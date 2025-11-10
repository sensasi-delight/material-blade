import './main.scss'

import { MDCBanner } from '@material/banner'
import { MDCDialog } from '@material/dialog'
import { MDCIconButtonToggle } from '@material/icon-button'
import { MDCMenu } from '@material/menu'
import { MDCRipple } from '@material/ripple'

document.addEventListener('DOMContentLoaded', () => {
    import('material-components-web').then(({ autoInit }) => {
        autoInit()

        initIconButtons()
        autoOpenBanner()
        initDialogs()
        initMenus()
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

// function initChipSets() {
//     document.querySelectorAll('.mdc-chip-set').forEach(el => {
//         el.MDCChipSet = new mdc.chips.MDCChipSet(el)

//         el.MDCChipSet.listen('MDCChip:removal', event => {
//             console.log(event)
//             el.removeChild(event.detail.root)
//         })
//     })

//     // TODO: Add event listener for adding chips
//     // input.addEventListener('keydown', function(event) {
//     //     if (event.key === 'Enter' || event.keyCode === 13) {
//     //         const chipEl = document.createElement('div')

//     //         // ... perform operations to properly populate/decorate chip element ...
//     //         chipSetEl.appendChild(chipEl)
//     //         chipSet.addChip(chipEl)
//     //     }
//     // })
// }

// function initCircularProgresses() {
//     document.querySelectorAll('.mdc-circular-progress').forEach(el => {
//         el.circularProgress = new mdc.circularProgress.MDCCircularProgress(el)

//         if ((value = el.getAttribute('aria-valuenow'))) {
//             el.circularProgress.progress = value
//         }
//     })
// }

// function initDataTables() {
//     document.querySelectorAll('.mdc-data-table').forEach(el => {
//         el.MDCDataTable = new mdc.dataTable.MDCDataTable(el)
//     })
// }

// function initLinearProgresses() {
//     document.querySelectorAll('.mdc-linear-progress').forEach(el => {
//         el.linearProgress = new mdc.linearProgress.MDCLinearProgress(el)

//         if ((value = el.getAttribute('aria-valuenow'))) {
//             el.linearProgress.progress = value
//         }

//         if (el.dataset.bufferValue && el.dataset.bufferValue != 1) {
//             el.linearProgress.buffer = el.dataset.bufferValue
//         }
//     })
// }

// function initSnackbars() {
//     document.querySelectorAll('.mdc-snackbar').forEach(el => {
//         el.MDCSnackbar = new mdc.snackbar.MDCSnackbar(el)

//         if (el.hasAttribute('timeout')) {
//             el.MDCSnackbar.foundation.setTimeoutMs(el.getAttribute('timeout'))
//         }

//         if (el.hasAttribute('open')) {
//             el.MDCSnackbar.open()
//         }
//     })
// }

// function initSwitches() {
//     document.querySelectorAll('.mdc-switch').forEach(el => {
//         el.MDCSwitch = new mdc.switchControl.MDCSwitch(el)
//     })
// }

// document.addEventListener('DOMContentLoaded', () => {
//     initButtons()
//     initChipSets()
//     initCircularProgresses()
//     initDataTables()
//     initFabs()
//     initIconButtons()
//     initLinearProgresses()
//     initSnackbars()
//     initSwitches()
// })
