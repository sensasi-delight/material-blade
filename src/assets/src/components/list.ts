import { MDCList } from '@material/list'
import { MDCRipple } from '@material/ripple'

document
    .querySelectorAll<
        Element & {
            MBC?: MDCList
        }
    >('.mdc-deprecated-list')
    .forEach(el => {
        if (el.MBC) return

        el.MBC = new MDCList(el)
        el.MBC.listElements.map(listItemEl => new MDCRipple(listItemEl))

        el.MBC.listElements[0]?.setAttribute('tabindex', '0')

        if (el.getAttribute('role') === 'listbox') {
            el.MBC.singleSelection = true
        }
    })
