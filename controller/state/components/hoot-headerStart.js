'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const scriptHootHeaderShell = document.createElement('script');
setAttributes(scriptHootHeaderShell, {
	id: 'script-hoot-header-shell',
	type: 'module',
	src: '../components/hoot-header/hoot-header_shell.js',
	content: 'text/javascript',
	crossorigin: 'anonymous',
	alt: 'Script for hoot-header Shell'
});

const hootHeaderShell = document.createElement('hoot-header_shell');
setAttributes(hootHeaderShell, {
	id: 'hoot-header-shell',
	class: 'hoot-header-shell',
	alt: 'Blog Shell'
});
export default class StartHootHeaderShell extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('body')
		});
	}
	render() {
		this.element.appendChild(scriptHootHeaderShell);
		this.element.appendChild(StartHootHeaderShell);
		return;
	}
}
