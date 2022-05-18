'use strict';

import {
	setAttributes,
	renderHeadScripts
} from '../../src/js/js_library/primaryUtility.js';

const hootServiceScript = document.createElement('script');
setAttributes(hootServiceScript, {
	src: '../components/hoot-header/hoot-header_service.js',
	type: 'module',
	content: 'text/javascript',
	crossorigin: 'anonymous'
});

const headScripts = [hootServiceScript];
const HeadScriptNote = console.log(
	'%c The hoot-header_service file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
	'background: #222222; color: hsl(59, 100%, 50%);'
);

renderHeadScripts(headScripts, HeadScriptNote);
