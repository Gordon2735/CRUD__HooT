'use strict';

import { RenderHeaderTemplate } from './render-header_template.js';
import init from './hoot-header_service.js';
import { setAttributes } from '../../src/js/js_library/primaryUtility.js';
import { sharedStyles } from './hootHeader_shared_styles.js';

export class HootHeader extends RenderHeaderTemplate {
	constructor() {
		super();
		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();

		const root = this.shadowRoot;

		init();
		const main = document.createElement('main');
		const header = document.querySelector('primary-header');
		setAttributes(main, {
			id: 'hoot-main',
			class: 'hoot-main',
			alt: 'hoot-main'
		});
		root.append(main);
		main.append(header);
	}
	get template() {
		return `
            <style>
                ${sharedStyles.main}
            </style>
        `;
	}
}
