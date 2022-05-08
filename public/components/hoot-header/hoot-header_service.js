'use strict';

import appendChildren, {
	setAttributes,
	loopList,
	renderArray
} from '../../src/js/js_library/primaryUtility.js';

export default async function init() {
	const primaryHeader = document.createElement('header');
	const primaryFigure = document.createElement('figure');
	const primaryImg = document.createElement('img');
	const primaryFigcaption = document.createElement('figcaption');
	const primaryH1 = document.createElement('h1');
	const primaryH2 = document.createElement('h2');

	setAttributes(body, {
		id: 'hoot-body',
		class: 'hoot-body',
		alt: 'hoot-body'
	});
	setAttributes(primaryHeader, {
		id: 'primary-header',
		class: 'primary-header',
		alt: 'Primary Header'
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
		src: './img/Hoot-LOGO-400X320.png'
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

	const headerChildren = [primaryFigure, primaryH1, primaryH2];
	const figureChildren = [primaryImg, primaryFigcaption];

	const h1Text = (primaryH1.innerHTML = `Hoot&#8482; Webelistics&#174;`);
	const h2Text =
		(primaryH2.innerHTML = `Internet Application Development / System Software Development / `);

	const textRenderer = [h1Text, h2Text];

	appendChildren(primaryHeader, headerChildren).then(() => {
		appendChildren(primaryFigure, figureChildren).then(() => {
			renderArray(textRenderer).catch(error => {
				console.log(
					`Error in Rendering appenChildren functions: ${error}`
				);
			});
		});
	});
}
