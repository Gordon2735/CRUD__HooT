'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const scriptHeaderComponentShell = document.createElement('script');
setAttributes(scriptHeaderComponentShell, {
	id: 'script-header-component-shell',
	type: 'module',
	src: '../components/hoot-header/hoot-header_shell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'Script for hoot-header Web-Component Shell'
});

// Create Script Tags for our Web Components
const scriptHeader = document.createElement('script');
setAttributes(scriptHeader, {
	type: 'module',
	src: '../components/hoot-header/hoot-header.js',
	content: 'text/javascript',
	crossorigin: 'anonymous'
});

export default class StartScripts extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('head')
		});
	}
	render() {
		this.element.appendChild(scriptHeaderComponentShell);
		this.element.appendChild(scriptHeader);

		return;
	}
}
