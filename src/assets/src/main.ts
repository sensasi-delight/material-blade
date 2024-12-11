import './main.scss'

import { MDCBanner } from '@material/banner'
import { MDCIconButtonToggle } from '@material/icon-button'
import { MDCRipple } from '@material/ripple'

document.addEventListener('DOMContentLoaded', () => {
    import('material-components-web').then(({ autoInit }) => {
        autoInit()

        initIconButtons()
        initBanners()
    })
})

/**
 * Initialize all banners
 */
function initBanners() {
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

// function initCards() {
//     document
//         .querySelectorAll('.mdc-card__action-buttons button')
//         .forEach(el => {
//             el.classList.add('mdc-card__action', 'mdc-card__action--button')
//         })

//     document
//         .querySelectorAll(
//             '.mdc-card__action-icons button, .mdc-card__action-icons a',
//         )
//         .forEach(el => {
//             el.classList.add('mdc-card__action', 'mdc-card__action--icon')
//         })

//     document.querySelectorAll('.mdc-card__primary-action').forEach(el => {
//         mdc.ripple.MDCRipple.attachTo(el)
//     })
// }

// function initCheckBoxes() {
//     document.querySelectorAll('.mdc-checkbox').forEach(el => {
//         const checkbox = new mdc.checkbox.MDCCheckbox(el)
//         const formField = new mdc.formField.MDCFormField(el.parentElement)
//         formField.input = checkbox
//     })
// }

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

// function initTabBars() {
//     document.querySelectorAll('.mdc-tab-bar').forEach(el => {
//         el.MDCTabBar = new mdc.tabBar.MDCTabBar(el)
//     })
// }

// function initTooltips() {
//     document.querySelectorAll('.mdc-tooltip').forEach(el => {
//         el.MBC = new mdc.tooltip.MDCTooltip(el)
//     })
// }

// document.addEventListener('DOMContentLoaded', () => {
//     initBanners()
//     initButtons()
//     initCards()
//     initCheckBoxes()
//     initChipSets()
//     initCircularProgresses()
//     initDataTables()
//     initFabs()
//     initIconButtons()
//     initLinearProgresses()
//     initSnackbars()
//     initSwitches()
//     initTabBars()
//     initTooltips()
// })
