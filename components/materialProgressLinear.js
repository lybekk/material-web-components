import { MDCLinearProgress } from '@material/linear-progress';

let template = document.createElement('template');
template.innerHTML = `
    <div role="progressbar" class="mdc-linear-progress" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">
    <div class="mdc-linear-progress__buffer">
    <div class="mdc-linear-progress__buffer-bar"></div>
    <div class="mdc-linear-progress__buffer-dots"></div>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
    <span class="mdc-linear-progress__bar-inner"></span>
    </div>
    </div>
`;

/**
 * Work in progress
 * TODO: Implement method linearProgress.determinate = false
 */
class MaterialProgressLinear extends HTMLElement {
    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const linearProgress = new MDCLinearProgress(this.querySelector('.mdc-linear-progress'))
        linearProgress.determinate = false
    }
}
customElements.define('material-progress-linear', MaterialProgressLinear);
