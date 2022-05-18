'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const scriptHootContactShell = document.createElement('script');
setAttributes(scriptHootContactShell, {
	id: 'contact-shell',
	class: 'contact-shell',
	type: 'module',
	src: '../components/hoot-contact/hoot-contact_shell.js',
	alt: 'Contact Shell'
});

const scriptHootContact = document.createElement('script');
setAttributes(scriptHootContact, {
	id: 'hoot-contact',
	class: 'hoot-contact',
	type: 'module',
	src: '../components/hoot-contact/hoot-contact.js',
	alt: 'Hoot Contact'
});

export default class StartContactScripts extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('head')
		});
	}
	render() {
		this.element.appendChild(scriptHootContactShell);
		this.element.appendChild(scriptHootContact);
		return;
	}
}
