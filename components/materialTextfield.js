import {MDCTextField} from '@material/textfield';

let templateTextfieldOutlined = document.createElement('template');
templateTextfieldOutlined.innerHTML = `
    <label class="mdc-text-field mdc-text-field--outlined">
        <input type="text" class="mdc-text-field__input" aria-labelledby="my-label-id" name="toBeChanged">
        <span class="mdc-notched-outline">
            <span class="mdc-notched-outline__leading"></span>
            <span class="mdc-notched-outline__notch">
                <span class="mdc-floating-label" id="my-label-id">To be changed</span>
            </span>
            <span class="mdc-notched-outline__trailing"></span>
        </span>
    </label>
`;

let templateTextfieldFilled = document.createElement('template');
templateTextfieldFilled.innerHTML = `
    <label class="mdc-text-field mdc-text-field--filled">
        <span class="mdc-text-field__ripple"></span>
        <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id">
        <span class="mdc-floating-label" id="my-label-id">Filled textfield</span>
        <span class="mdc-line-ripple"></span>
    </label>
`;

/**
 * Assumes variant 'filled' textfield. Use attribute 'outlined' for alternative variant
 */
class MaterialTextfield extends HTMLElement {
    constructor() {
        super();
        const label = this.getAttribute("label")
        const name = this.getAttribute("name")
        const isOutlined = this.hasAttribute("outlined")

        if (isOutlined) {
            this.appendChild(templateTextfieldOutlined.content.cloneNode(true));
        } else {
            this.appendChild(templateTextfieldFilled.content.cloneNode(true));
        }
        // TODO: queryselector add label + name
    }
    connectedCallback() {
        new MDCTextField(this.querySelector('.mdc-text-field'))
    }
}
customElements.define('material-textfield', MaterialTextfield);
