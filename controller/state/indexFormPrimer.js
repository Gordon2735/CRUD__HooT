'use strict';

import store from '/state/store/indexState.js';
import StartContactScripts from '/state/components/scriptStartContact.js';
import StartContactShell from '/state/components/startFormContactShell.js';

const hootContactElement = document.querySelector('hoot-contact');

export const currentDOM = async () => {
	if (store.state.checkHead === true) {
		const checkHootContact = async () => {
			hootContactElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('hootContactElement', event);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 100),
				() => {
					console.info(
						'%cHoot Contact Element Loaded',
						'background: hsl(90, 100%, 0%); color: hsla(90, 100%, 50%, 0.9)'
					);
				}
			);
		};
		checkHootContact();
	}
};
currentDOM();

export const checkBody = async () => {
	if (store.state.checkBody === true) {
		const domBody = async () => {
			document.body.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.state.checkBody('DOMContentLoaded', event);
				} else {
					console.log(
						`store.commit did not work: ${event.composedPath()}`
					);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 100),
				() => {
					store.state('DOMContentLoaded', true);
				}
			);
		};
		domBody();
	} else {
		await new Promise(
			resolve => setTimeout(resolve, 100),
			() => {
				if (store.state.checkBody === true)
					store.state('DOMContentLoaded', true);
			}
		);
	}
};
checkBody();

const startContactScriptsInstance = new StartContactScripts();
const startHootContactShellInstance = new StartContactShell();

startContactScriptsInstance.render();
startHootContactShellInstance.render();
