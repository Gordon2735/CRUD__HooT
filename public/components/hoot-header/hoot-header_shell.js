'use strict';

import { RenderHeaderTemplate } from './render-header_template.js';
import { sharedStyles } from './hootHeader_shared_styles.js';
import './hoot-header.js';
import './hootHeader_index.js';
import './hoot-header_service.js';
import '../../src/js/js_library/primaryUtility.js';

export class HeaderShell extends RenderHeaderTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		this.noShadow = true;

		super.connectedCallback();

		const root = this.shadowRoot;

		console.log(
			'%c This Web Component has || * FIRED * || hoot-header_shell.js is connected',
			'background: transparent ; color: hsl(32, 83%, 54%);'
		);
	}
	get template() {
		return `

            <hoot-header class="hoot-header"></hoot-header>

            <style>

                ${sharedStyles.main}
            
            </style>
        `;
	}
}

customElements.define('hoot-headershell', HeaderShell);
