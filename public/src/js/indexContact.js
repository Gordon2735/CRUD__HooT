'use strict';

import appendChildren, {
	setAttributes,
	renderHeadScripts
} from './js_library/primaryUtility.js';

async function renderContactHeadScripts() {
	const hootContactIndexScript = document.createElement('script');
	setAttributes(hootContactIndexScript, {
		src: '../components/hoot-contact/hoot-contact_index.js',
		type: 'module',
		content: 'text/javascript',
		crossorigin: 'anonymous'
	});

	const scriptContactFormPrimer = document.createElement('script');
	setAttributes(scriptContactFormPrimer, {
		type: 'module',
		src: '/state/indexFormPrimer.js',
		content: 'text/javascript',
		crossorigin: 'anonymous'
	});

	const scriptFiredNotes = `${console.log(
		'Satisfactorily Fired Component Head Scripts  ||  hoot-contact_index.js  || indexFormPrimer.js  ||  Notes: indexContact.js'
	)}`;

	const scriptsToRender = [hootContactIndexScript, scriptContactFormPrimer];
	await renderHeadScripts(scriptsToRender, scriptFiredNotes);
	return;
}
renderContactHeadScripts();
