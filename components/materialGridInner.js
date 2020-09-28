let template = document.createElement('template');
template.innerHTML = `
        <slot></slot>
`;

class MaterialGridInner extends HTMLElement {
    constructor() {
        super();
        this.className = 'mdc-layout-grid__inner'
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('material-grid-inner', MaterialGridInner);
