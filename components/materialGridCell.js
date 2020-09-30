class MaterialGridCell extends HTMLElement {
    constructor() {
        super();
        this.className = 'mdc-layout-grid__cell'
        this.style = "display: block;"
    }
}
customElements.define('material-grid-cell', MaterialGridCell);
