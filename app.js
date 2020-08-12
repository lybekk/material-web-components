import {MDCRipple} from '@material/ripple/index';
import {MDCTopAppBar} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const foos = [].map.call(document.querySelectorAll('.mdc-button'), function(el) {
    el.unbounded = true;
    return new MDCRipple(el);
});

/* Instantiate ripple on list items */
//const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));