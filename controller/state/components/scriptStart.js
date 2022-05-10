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

const scriptNavHeaderShell = document.createElement('script');
setAttributes(scriptNavHeaderShell, {
	id: 'script-nav-header-shell',
	type: 'module',
	src: '../components/hoot-nav_header/navheader-shell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'Script for navheader-shell Web-Component Shell'
});

const scriptHootHomeShell = document.createElement('script');
setAttributes(scriptHootHomeShell, {
	id: 'script-hoot-home-shell',
	type: 'module',
	src: '../components/hoot-home/hoothome-shell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'Script for hoothome-shell Web-Component Shell'
});

// Create Script Tags for our Web Components
const scriptHeader = document.createElement('script');
setAttributes(scriptHeader, {
	type: 'module',
	src: '../components/hoot-header/hoot-header.js',
	content: 'text/javascript',
	crossorigin: 'anonymous'
});

const scriptNavHeader = document.createElement('script');
setAttributes(scriptNavHeader, {
	type: 'module',
	src: '../components/hoot-nav_header/nav-header.js',
	content: 'text/javascript',
	crossorigin: 'anonymous'
});

const scriptHootHome = document.createElement('script');
setAttributes(scriptHootHome, {
	type: 'module',
	src: '../components/hoot-home/hoot-home.js',
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
		this.element.appendChild(scriptNavHeaderShell);
		this.element.appendChild(scriptHootHomeShell);
		this.element.appendChild(scriptHeader);
		this.element.appendChild(scriptNavHeader);
		this.element.appendChild(scriptHootHome);

		return;
	}
}
