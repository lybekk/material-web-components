let template = document.createElement('template');
template.innerHTML = `
        <slot></slot>
`;

class MaterialGridCell extends HTMLElement {
    constructor() {
        super();
        this.className = 'mdc-layout-grid__cell'
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('material-grid-cell', MaterialGridCell);
