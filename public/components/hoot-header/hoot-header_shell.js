'use strict';

import { RenderHeaderTemplate } from './render-header_template.js';
import { sharedStyles } from './hootHeader_shared_styles.js';
import './hoot-header.js';
import './hootHeader_index.js';
import './hoot-header_service.js';

export class HeaderShell extends RenderHeaderTemplate {
	constructor() {
		super();

		this.noShadow = true;
	}
	connectedCallback() {
		super.connectedCallback();

		console.log(
			'%c This Web Component has || * FIRED * || hoot-header_shell.js is connected',
			'background: transparent ; color: hsl(32, 83%, 54%);'
		);
	}
	get template() {
		return `

            <hoot-header></hoot-header>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Days+One&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Chango&display=swap');
            
                :root {
                    --bg-primary-clr: hsl(195, 53%, 79%);
                    --bg-primaryDark-clr: hsl(0, 0%, 13%);
                    --bg-modalMain-clr: hsl(195, 100%, 24%);
                    --font-modalMain-clr:hsl(195, 90%, 88%);
                    --font-primary-clr: hsl(0, 0%, 100%);
                    --font-sizeHeader: 3rem;
                    --font-sizeSubHeader: 2rem;
                    --font-familyHeader: 'Chango', sans-serif;
                    --font-familySubHeader: 'Days One', sans-serif;
                }
            
                html {
                    background: var(--bg-primary-clr);
                }
            
                .body {
                    width: 100%;
                    min-height: 100vh;
                    background: var(--bg-primary-clr);
                }
            
                .hoot-main {
                    width: 100%;
                    min-height: 100vh;
                    grid-template-areas:
                        'header' 'main';
                }
            
                .primary-header {
                    width: 100%;
                    height: 25vh;
                    background: var(--bg-modalMain-clr);
                    color: var(--font-modalMain-clr);
                    font-size: var(--font-sizeHeader);
                }
            
                .primary-h1 {
                    font-family: var(--font-familyHeader);
                    color: var(--font-modalMain-clr);
                    font-size: var(--font-sizeHeader);
                    font-weight: bold;
                    letter-spacing: 0.1rem;
                }
            
                .primary-h2 {
                    font-family: var(--font-familySubHeader);
                    color: var(--font-modalMain-clr);
                    font-size: var(--font-sizeSubHeader);
                    letter-spacing: 0.1rem;
                }
            
                .primary-figure {
                    width: 18vw;
                    height: 15vh;
            
            
                } 

                blog-shell {
                    ${sharedStyles.trbl}
                    overflow-y: overlay;
                }
            
            </style>
        `;
	}
}

customElements.define('hoot-header_shell', HeaderShell);
