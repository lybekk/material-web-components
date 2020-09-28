import {MDCRipple} from '@material/ripple/index'

/**
 * onclick is defined directly on parent element: <material-button onclick="doIt()">
 */
class MaterialButton extends HTMLElement {
    constructor() {
        super();
        const label = this.getAttribute("label")
        const isFlat = this.hasAttribute("flat") ? '' : '--raised'
        const isSecondaryColor = this.hasAttribute("secondary") ? 'secondary' : ''
        this.innerHTML = `
            <button class="foo-test mdc-button mdc-button${isFlat} ${isSecondaryColor}">
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">${label}</span>
            </button>
        `;
    }
    connectedCallback() {
        new MDCRipple(this.querySelector('button'))
    }
}
customElements.define('material-button', MaterialButton);
