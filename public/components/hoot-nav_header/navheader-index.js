'use strict';

import {
	setAttributes,
	renderHeadScripts
} from '../../src/js/js_library/primaryUtility.js';

const navHeaderServiceScript = document.createElement('script');
setAttributes(navHeaderServiceScript, {
	src: '../components/hoot-nav_header/navheader-service.js',
	type: 'module'
});

const headScripts = [navHeaderServiceScript];
const navHeaderScriptNote = console.log(
	'%c The hoot-header_service file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
	'background: #222222; color: hsl(59, 100%, 50%);'
);

renderHeadScripts(headScripts, navHeaderScriptNote);
