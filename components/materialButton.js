import {MDCRipple} from '@material/ripple/index'
/**
 * Deprecated in favor of the official Web components
 */

/**
 * onclick is defined directly on parent element: <material-button onclick="doIt()">
 * 
 * attribute 'flat' is applied for a contained button flush with the surface.
 * attribute 'text' creates a Text button https://material.io/components/buttons/#text-button
 * 
 * TODO: Not in use. Planned for the future: If material-button is used inside a dialog, the attribute 'dialog-action' may be used.
 */
class MaterialButton extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const label = this.getAttribute("label")
        const isFlat = this.hasAttribute("flat") ? '--unelevated' : '--raised'
        const isSecondaryColor = this.hasAttribute("secondary") ? 'secondary' : ''
        this.innerHTML = `
            <button class="mdc-button mdc-button${isFlat} ${isSecondaryColor}">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">${label}</span>
            </button>
        `;
        if (this.hasAttribute('text')) {
            let btn = this.querySelector('button')
            btn.classList.remove('mdc-button--raised', 'mdc-button--unelevated')
        }
        new MDCRipple(this.querySelector('button'))
    }
}
customElements.define('material-button', MaterialButton);
