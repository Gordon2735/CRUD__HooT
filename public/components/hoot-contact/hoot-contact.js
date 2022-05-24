'use strict';

//g :::: hoot-contact :::: g//

import { RenderContactTemplate } from './render-templateContact.js';
import { sharedStyles } from './hoot-contact_sharedStyles.js';
import appendChildren, {
	setAttributes
} from '../../src/js/js_library/primaryUtility.js';
import contactForm from './hoot-contact_service.js';

import './hoot-contact_service.js';

export class HootContact extends RenderContactTemplate {
	constructor() {
		super();

		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();

		const root = this.shadowRoot;

		const appendServiceParents = () => {
			const compileElements = [contactForm];
			appendChildren(root, compileElements);
		};
		appendServiceParents();
	}
	get template() {
		return `
		
			<style>
				${sharedStyles.contacts}
			</style>
		
		`;
	}
}
customElements.define('hoot-contact', HootContact);
