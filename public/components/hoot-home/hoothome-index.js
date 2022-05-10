'use strict';

import {
	setAttributes,
	renderHeadScripts
} from '../../src/js/js_library/primaryUtility.js';

const hootHomeServiceScript = document.createElement('script');
setAttributes(hootHomeServiceScript, {
	src: '../components/hoot-home/hoothome-service.js',
	type: 'module'
});

const headScripts = [hootHomeServiceScript];
const HootHomeScriptNote = console.log(
	'%c The hoothome-service file has || ***  " FIRED THE OPERATIONAL SCRIPTS "  *** || and rendered them to the head element',
	'background: #222222; color: hsl(59, 100%, 50%);'
);

renderHeadScripts(headScripts, HootHomeScriptNote);
