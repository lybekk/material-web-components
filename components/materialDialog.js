/**
 * Deprecated in favor of the official Web components
 */

import {MDCDialog} from '@material/dialog';

/**
 * Example-button from docs:
 *  <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="cancel">
 *      <div class="mdc-button__ripple"></div>
 *      <span class="mdc-button__label">Cancel</span>
 *  </button>
 * 
 * Material web component button:
 * <material-button label="A dialog button" dialog-action="cancel">
 * </material-button>
 * 
 */

let template = document.createElement('template');
template.innerHTML = `
    <div class="mdc-dialog">
        <div class="mdc-dialog__container">
        <div class="mdc-dialog__surface"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="my-dialog-title"
            aria-describedby="my-dialog-content"
        >
            <div class="mdc-dialog__content" id="my-dialog-content">
                Discard draft?
            </div>
            <div class="mdc-dialog__actions">
                <material-button text label="Close" type="button" class="mdc-dialog__button" data-mdc-dialog-action="cancel">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">Cancel</span>
                </material-button>
            </div>

            <!-- Not in use at the moment. May be planned for future use
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="cancel">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">Cancel</span>
                </button>
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="discard">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">Discard</span>
                </button>
            -->

        </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
    </div>
`;

/**
 * TODO: Include option for removing the activator-button
 * 
 * Docs: https://material.io/develop/web/components/dialogs
 */
class MaterialDialog extends HTMLElement {
    constructor() {
        super();
    }
    
    connectedCallback() {
        /*
        this.innerHTML = `
        <div class="mdc-dialog">
            <div class="mdc-dialog__container">
            <div class="mdc-dialog__surface"
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="my-dialog-title"
                aria-describedby="my-dialog-content"
            >
                <div class="mdc-dialog__content" id="my-dialog-content">
                    Discard draft?
                </div>
                <div class="mdc-dialog__actions">
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="cancel">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">Cancel</span>
                </button>
                <button type="button" class="mdc-button mdc-dialog__button" data-mdc-dialog-action="discard">
                    <div class="mdc-button__ripple"></div>
                    <span class="mdc-button__label">Discard</span>
                </button>
                </div>
            </div>
            </div>
            <div class="mdc-dialog__scrim"></div>
        </div>
        `
        */

       //this.appendChild(template.content.cloneNode(true));
       this.appendChild(template.content.cloneNode(true));
       //let shadowRoot = this.attachShadow({mode: 'open'});
       //shadowRoot.appendChild(template.content.cloneNode(true));

        const dialog = new MDCDialog(this.querySelector('.mdc-dialog'));
        //const dialog = new MDCDialog(this.querySelector('.mdc-dialog'));
        const btn = document.createElement('material-button')
        let label = 'Open'
        if (this.hasAttribute('label')) {
            label = this.getAttribute('label')
        }
        btn.setAttribute('label', label)
        btn.onclick = () => dialog.open()
        this.appendChild(btn)
    }

}
customElements.define('material-dialog', MaterialDialog);

/* Consideration (from documentation)
MDC Dialog makes no assumptions about what will be added to the mdc-dialog__content element. Any list, checkboxes, etc. must also be instantiated. If your dialog contains any layout-sensitive components, you should wait until MDCDialog:opened is emitted to instantiate them (or call layout on them) so that the dialog's transition finishes first.

For example, to instantiate an MDC List inside of a simple or confirmation dialog:

import {MDCList} from '@material/list';
const list = new MDCList(document.querySelector('.mdc-dialog .mdc-list'));

dialog.listen('MDCDialog:opened', () => {
  list.layout();
});
*/
