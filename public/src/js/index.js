'use strict';

import {
	setAttributes,
	renderHeadScripts
} from './js_library/primaryUtility.js';

const hoot_headerScript = document.createElement('script');
setAttributes(hoot_headerScript, {
	src: '../components/hoot-header/hootHeader_index.js',
	type: 'module'
});

console.info(
	'%c The hootHeader_index.js file has || ***  " FIRED THE COMPONENTS SCRIPTS "  *** ||',
	'background: #222222; color: hsl(59, 100%, 50%);'
);
const scriptState = document.createElement('script');
setAttributes(scriptState, {
	type: 'module',
	src: '/state/indexPrimer.js',
	content: 'text/javascript',
	crossorigin: 'anonymous'
});

const scriptArray = [hoot_headerScript, scriptState];

renderHeadScripts(scriptArray);
