'use strict';

import appendChildren, {
	setAttributes,
	renderArray
} from '../../src/js/js_library/primaryUtility.js';
import primaryHeader from './hoot-header.js';

export default async function init() {
	const primaryFigure = document.createElement('figure');
	const primaryImg = document.createElement('img');
	const primaryFigcaption = document.createElement('figcaption');
	const primaryH1 = document.createElement('h1');
	const primaryH2 = document.createElement('h2');
	const body = document.querySelector('body');

	setAttributes(body, {
		id: 'hoot-body',
		class: 'hoot-body',
		alt: 'hoot-body'
	});
	setAttributes(primaryFigure, {
		id: 'primary-figure',
		class: 'primary-figure',
		alt: 'Primary Figure'
	});
	setAttributes(primaryImg, {
		id: 'primary-img',
		class: 'primary-img',
		alt: 'Primary Image',
		src: '../components/hoot-header/img/HEAD_ONLY_WHITE-FACE.png'
	});
	setAttributes(primaryFigcaption, {
		id: 'primary-figcaption',
		class: 'primary-figcaption',
		alt: 'Primary Figcaption'
	});
	setAttributes(primaryH1, {
		id: 'primary-h1',
		class: 'primary-h1',
		alt: 'Primary H1'
	});
	setAttributes(primaryH2, {
		id: 'primary-h2',
		class: 'primary-h2',
		alt: 'Primary H2'
	});

	const supTM = document.createElement('sup');
	setAttributes(supTM, {
		class: 'h1-tm',
		alt: 'Logo Trademark of Document'
	});

	const supR = document.createElement('sup');
	setAttributes(supR, {
		class: 'h1-r',
		alt: 'Logo Registered of Document'
	});

	const hrHeader = document.createElement('hr');
	setAttributes(hrHeader, {
		id: 'hr-header',
		class: 'hr-header',
		alt: 'Horizontal Rule'
	});

	const textTM = `<sup class="h1-tm">&#8482;</sup>`;
	const textR = `<sup class="h1-r">&#174;</sup>`;

	const headerChildren = [primaryFigure, primaryH1, primaryH2];
	const figureChildren = [primaryImg, primaryFigcaption];

	const h1Text = (primaryH1.innerHTML = `Hoot${textTM} Webelistics${textR}`);
	const h2Text =
		(primaryH2.innerHTML = `Internet Application Development<br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  System Software Development  `);
	const figcaptionText =
		(primaryFigcaption.innerHTML = `Official Logo for HooT&#8482; Webelistics&#174;`);

	const textRenderer = [h1Text, h2Text, figcaptionText];

	await appendChildren(primaryHeader, headerChildren).then(() => {
		appendChildren(primaryFigure, figureChildren).then(() => {
			renderArray(textRenderer).catch(error => {
				console.log(
					`Error in Rendering appenChildren functions: ${error}`
				);
			});
		});
	});
}
