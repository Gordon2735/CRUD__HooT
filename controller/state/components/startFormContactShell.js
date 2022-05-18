'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const hootContactShell = document.createElement('contact-shell');
setAttributes(hootContactShell, {
	id: 'contact-shell',
	class: 'contact-shell',
	alt: 'contact-shell Web-Component Contact Form Shell'
});

export default class StartContactShell extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('body')
		});
	}
	render() {
		this.element.appendChild(hootContactShell);
		return;
	}
}
