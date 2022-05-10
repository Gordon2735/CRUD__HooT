'use strict';

import {
	setAttributes,
	renderHeadScripts
} from '../../src/js/js_library/primaryUtility.js';

const headerShellScript = document.createElement('script');
setAttributes(headerShellScript, {
	src: '../components/hoot-header/hoot-header_shell.js',
	type: 'module'
});

const hootScript = document.createElement('script');
setAttributes(hootScript, {
	src: '../components/hoot-header/hoot-header.js',
	type: 'module'
});

const hootServiceScript = document.createElement('script');
setAttributes(hootServiceScript, {
	src: '../components/hoot-header/hoot-header_service.js',
	type: 'module'
});

const headScripts = [hootServiceScript];
const HeadScriptNote = console.log(
	'%c The hoot-header_service file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
	'background: #222222; color: hsl(59, 100%, 50%);'
);

renderHeadScripts(headScripts, HeadScriptNote);
