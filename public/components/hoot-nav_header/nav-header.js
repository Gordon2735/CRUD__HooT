'use strict';

import { RenderNavHeaderTemplate } from './render-navheader_template.js';
import { sharedStyles } from './navheader-sharedstyles.js';
import { setAttributes } from '../../src/js/js_library/primaryUtility.js';

export class NavHeader extends RenderNavHeaderTemplate {
	constructor() {
		super();

		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();

		const root = this.shadowRoot;
	}
	get template() {
		return `
           
        
            <style>
                ${sharedStyles.nav}
            </style>

            
        `;
	}
}

customElements.define('nav-header', NavHeader);
