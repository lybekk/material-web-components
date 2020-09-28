"use strict";

import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';

let template = document.createElement('template');
template.innerHTML = `
  <div class="mdc-touch-target-wrapper">
    <div class="mdc-form-field">
      <div class="mdc-radio mdc-radio--touch">
        <input class="mdc-radio__native-control" type="radio" id="radio-1" name="radios">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        <div class="mdc-radio__ripple"></div>
      </div>
      <label for="radio-1">N/A</label>
    </div>
  </div>
`;

/**
 * Required attributes: label, name
 * label - Radio label
 * name - used for input id and label's 'for' attribute
 */
class MaterialRadio extends HTMLElement {
  constructor() {
    super();
    this.appendChild(template.content.cloneNode(true))
    const nameAttribute = this.getAttribute("name")
    const input = this.querySelector('input')
    input.id = nameAttribute
    const label = this.querySelector('label')
    label.innerText = this.getAttribute("label")
    label.setAttribute('for', nameAttribute)
  }
  connectedCallback() {
    const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
    const radio = new MDCRadio(document.querySelector('.mdc-radio'));
    formField.input = radio;
  }
}
customElements.define('material-radio', MaterialRadio);
