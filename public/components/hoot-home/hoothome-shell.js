'use strict';

import { RenderHoothomeTemplate } from './render-hoothome_template.js';
import { sharedStyles } from './hoothome-sharedstyles.js';
import './hoot-home.js';
import './hoothome-index.js';
import './hoothome-service.js';
import '../../src/js/js_library/primaryUtility.js';

export class HoothomeShell extends RenderHoothomeTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		this.noShadow = true;

		super.connectedCallback();

		const root = this.shadowRoot;

		console.log(
			'%c This Web Component has || * FIRED * || hoothome-shell.js is connected',
			'background: transparent ; color: hsl(32, 83%, 54%);'
		);
	}
	get template() {
		return `

            <hoot-home></hoot-home>

            <style>

                ${sharedStyles.main}
            
            </style>

        `;
	}
}
customElements.define('hoothome-shell', HoothomeShell);
