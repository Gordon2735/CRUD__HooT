'use strict';

import { RenderContactTemplate } from './render-templateContact.js';
import { sharedStyles } from './hoot-contact_sharedStyles.js';

export class ContactShell extends RenderContactTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		this.noShadow = true;

		super.connectedCallback();

		console.info(new Date());
	}
	get template() {
		return `
        
		
		<style>		
			${sharedStyles.main}		
		</style>
        
		<hoot-contact class="hoot-contact"></hoot-contact>
		
        `;
	}
}
customElements.define('contact-shell', ContactShell);
