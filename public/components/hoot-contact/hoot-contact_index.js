'use strict';

import {
	setAttributes,
	renderHeadScripts
} from '../../src/js/js_library/primaryUtility.js';

const contactServiceScript = document.createElement('script');
setAttributes(contactServiceScript, {
	type: 'module',
	src: '../components/hoot-contact/hoot-contact_service.js',
	content: 'text/javascript',
	crossorigin: 'anonymous'
});

const contactHeadScripts = [contactServiceScript];
const contactHeadScriptNote = console.log(
	'%c The hoot-contact_service file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
	'background: #222222; color: hsl(59, 100%, 50%);'
);

renderHeadScripts(contactHeadScripts, contactHeadScriptNote);
