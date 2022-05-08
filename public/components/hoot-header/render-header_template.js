'use strict';

export class RenderHeaderTemplate extends HTMLElement {
	connectedCallback() {
		if (!this.noShadow) this.attachShadow({ mode: 'open' });
		this.render();
	}
	render(template) {
		if (!this.noShadow) {
			this.innerHTML = template || this.template;
			return;
		} else {
			this.shadowRoot.innerHTML = template || this.template;
		}
	}
}
