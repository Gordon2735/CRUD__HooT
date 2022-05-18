'use strict';

import { RenderNavHeaderTemplate } from './render-navheader_template.js';
import { sharedStyles } from './navheader-sharedstyles.js';
import './nav-header.js';
import './navheader-index.js';
import './navheader-service.js';
import '../../src/js/js_library/primaryUtility.js';

export class NavHeaderShell extends RenderNavHeaderTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		this.noShadow = true;

		super.connectedCallback();

		const root = this.shadowRoot;

		console.log(
			'%c This Web Component has || * FIRED * || navheader-shell.js is connected',
			'background: transparent ; color: hsl(32, 83%, 54%);'
		);
	}
	get template() {
		return `

            <nav-header></nav-header>

            <style>

                ${sharedStyles.nav}
            
            </style>
        `;
	}
}

customElements.define('navheader-shell', NavHeaderShell);
