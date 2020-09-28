let template = document.createElement('template');
template.innerHTML = `
        <slot></slot>
`;

class MaterialGrid extends HTMLElement {
    constructor() {
        super();
        this.className = 'mdc-layout-grid'
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('material-grid', MaterialGrid);
