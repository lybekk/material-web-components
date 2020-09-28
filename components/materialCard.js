class MaterialCard extends HTMLElement {
    constructor() {
        super();
        this.className = 'mdc-card'
        const isOutlined = this.hasAttribute("outlined")
        if (isOutlined) {
            this.classList.add('mdc-card--outlined')
        }
        const hasTitle = this.hasAttribute("title")
        if (hasTitle) {
            const title = this.getAttribute("title")
            let h4 = document.createElement('h4')
            h4.innerText = title
            this.prepend(h4)
        }
    }
}
customElements.define('material-card', MaterialCard);
