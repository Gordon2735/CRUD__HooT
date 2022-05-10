'use strict';

import store from '/state/store/indexState.js';
import StartScripts from '/state/components/scriptStart.js';
import StartComponents from '/state/components/startComponents.js';

const hootHeaderElement = document.querySelector('hoot-header');
const navHeaderElement = document.querySelector('nav-header');
const hootHomeElement = document.querySelector('hoot-home');

export const currentDOM = async () => {
	if (store.state.checkHead === true) {
		const checkHeader = async () => {
			hootHeaderElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('hootHeaderElement', event);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 100),
				() => {
					console.info(
						'%cHoot Header Element Loaded',
						'background: #222222; color: #EE82EE'
					);
				}
			);
		};
		checkHeader();

		const checkNavHeader = async () => {
			navHeaderElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('navHeaderElement', event);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 100),
				() => {
					console.info(
						'%cNav Header Element Loaded',
						'background: #222222; color: #EE82EE'
					);
				}
			);
		};
		checkNavHeader();

		const checkHootHome = async () => {
			hootHomeElement.addEventListener('DOMContentLoaded', event => {
				event.preventDefault();

				if (event.composedPath().includes(this)) {
					store.dispatch('hootHomeElement', event);
				}
			});
			await new Promise(
				resolve => setTimeout(resolve, 100),
				() => {
					console.info(
						'%cHoot Home Element Loaded',
						'background: #222222; color: #EE82EE'
					);
				}
			);
		};
		checkHootHome();
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
						`store.commit did not work: ${event.composePath()}`
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
				if (store.state.checkBody === false)
					store.state('DOMContentLoaded', true);
			}
		);
	}
};
checkBody();

const startScriptsInstance = new StartScripts();
const startComponentsInstance = new StartComponents();

startScriptsInstance.render();
startComponentsInstance.render();
