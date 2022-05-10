'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

// Create HTML Tags for our Web Components
const hootHeaderShell = document.createElement('hoot-headershell');
setAttributes(hootHeaderShell, {
	id: 'hoot-headershell',
	class: 'hoot-headershell',
	alt: 'hoot-headershell Web-Component Header Shell'
});

const hootNavHeaderShell = document.createElement('nav-header');
setAttributes(hootNavHeaderShell, {
	id: 'nav-header',
	class: 'nav-header',
	alt: 'nav-header Web-Component Header Shell'
});

const hootHomeShell = document.createElement('hoot-home');
setAttributes(hootHomeShell, {
	id: 'hoot-home',
	class: 'hoot-home',
	alt: 'hoot-home Web-Component Header Shell'
});
export default class StartComponents extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('body')
		});
	}
	render() {
		this.element.appendChild(hootHeaderShell);
		this.element.appendChild(hootNavHeaderShell);
		this.element.appendChild(hootHomeShell);

		return;
	}
}
