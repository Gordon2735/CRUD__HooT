'use strict';

import { RenderHeaderTemplate } from './render-header_template.js';
import init from './hoot-header_service.js';
import { setAttributes } from '../../src/js/js_library/primaryUtility.js';
import { sharedStyles } from './hootHeader_shared_styles.js';

const primaryHeader = document.createElement('header');
export class HootHeader extends RenderHeaderTemplate {
	constructor() {
		super();
		this.noShadow = false;
	}
	connectedCallback() {
		super.connectedCallback();

		const RenderDom = async () => {
			const root = this.shadowRoot;
			const main = document.createElement('main');

			setAttributes(main, {
				id: 'hoot-main',
				class: 'hoot-main',
				alt: 'hoot-main'
			});
			setAttributes(primaryHeader, {
				id: 'primary-header',
				class: 'primary-header',
				alt: 'Primary Header'
			});
			root.appendChild(main);
			main.appendChild(primaryHeader);

			await init();

			const contactSpan = document.createElement('span');
			setAttributes(contactSpan, {
				id: 'contact-span',
				class: 'contact-span',
				alt: 'Contact Span'
			});
			const contactA = document.createElement('a');
			setAttributes(contactA, {
				id: 'contact-a',
				class: 'contact-a',
				href: '/contact_us',
				alt: 'Contact A'
			});
			const textContactA = () => {
				contactA.innerHTML = `Contact Form`;
			};
			root.appendChild(contactSpan);
			contactSpan.appendChild(contactA);
			textContactA();
		};
		RenderDom();
	}
	get template() {
		return `
            <style>
                ${sharedStyles.hootheader}
            </style>
        `;
	}
}
customElements.define('hoot-header', HootHeader);

export default primaryHeader;
