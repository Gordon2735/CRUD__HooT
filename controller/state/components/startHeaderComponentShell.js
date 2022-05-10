'use strict';

import Component from '/state/library/component.js';
import store from '/state/store/indexState.js';

const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

const componentHootHeaderShell = document.createElement('hoot-headershell');
setAttributes(componentHootHeaderShell, {
	id: 'hoot-headershell',
	class: 'hoot-headershell',
	alt: 'hoot-headershell'
});

export default class StartHeaderComponentShell extends Component {
	constructor() {
		super({
			store,
			element: document.querySelector('body')
		});
	}
	render() {
		this.element.appendChild(componentHootHeaderShell);
		return;
	}
}
