'use strict';

import appendChildren, {
	setAttributes,
	renderArray
} from '../../src/js/js_library/primaryUtility.js';

// Contact Header Element and Children
const body = document.querySelector('body');
const contactHeader = document.createElement('header');
const contactFigure = document.createElement('figure');
const contactImg = document.createElement('img');
const contactFigcaption = document.createElement('figcaption');
const contactH1 = document.createElement('h1');
const contactP = document.createElement('p');

setAttributes(body, {
	class: 'body',
	id: 'body'
});
setAttributes(contactHeader, {
	id: 'contact-header',
	class: 'contact-header'
});
setAttributes(contactFigure, {
	id: 'contact-figure',
	class: 'contact-figure'
});
setAttributes(contactImg, {
	id: 'contact-img',
	class: 'contact-img',
	src: './components/hoot-contact/img/js-JSON.png',
	alt: 'JavaScript Logo'
});
setAttributes(contactFigcaption, {
	id: 'contact-figcaption',
	class: 'contact-figcaption'
});
setAttributes(contactH1, {
	id: 'contact-h1',
	class: 'contact-h1'
});
setAttributes(contactP, {
	id: 'contact-p',
	class: 'contact-p',
	textContent: 'Please enter your username and password to login.'
});

const textContactH1 = (contactH1.innerHTML = 'User Login');
const textContactP = (contactP.innerHTML =
	'Please enter your username and password to login.');
const textGroup = [textContactH1, textContactP];

// Appending Header Children
const headerChildren = [contactFigure, contactH1, contactP];
const contactFigureChildren = [contactImg, contactFigcaption];

// Appending Container Children
appendChildren(contactHeader, headerChildren);
appendChildren(contactFigure, contactFigureChildren);
renderArray(textGroup);

// Form Element and Children
const contactForm = document.createElement('form');
const formH1 = document.createElement('h1');
const formFigure = document.createElement('figure');
const formFigureImg = document.createElement('img');
const formContainerDiv = document.createElement('div');
const formInnerContainerDiv = document.createElement('div');
const usernameLabel = document.createElement('label');
const usernameInput = document.createElement('input');
const emailLabel = document.createElement('label');
const emailInput = document.createElement('input');
const passwordLabel = document.createElement('label');
const passwordInput = document.createElement('input');
const repasswordLabel = document.createElement('label');
const repasswordInput = document.createElement('input');
const submitButton = document.createElement('button');
const checkboxContainerDiv = document.createElement('div');
const checkboxLabel = document.createElement('label');
const checkboxInput = document.createElement('input');
const forgetPasswordSpan = document.createElement('span');
const spanA = document.createElement('a');

setAttributes(contactForm, {
	id: 'contact-form',
	class: 'contact-form',
	action: '#'
});
setAttributes(formH1, {
	id: 'form-h1',
	class: 'form-h1',
	textContent: 'SIGN UP'
});
setAttributes(formFigure, {
	id: 'form-figure',
	class: 'form-figure'
});
setAttributes(formFigureImg, {
	id: 'form-figure-img',
	class: 'fas fa-user-circle'
});
setAttributes(formContainerDiv, {
	id: 'form-container-div',
	class: 'form-container-div'
});
setAttributes(formInnerContainerDiv, {
	id: 'form-inner-container-div',
	class: 'container'
});
setAttributes(usernameLabel, {
	id: 'username-label',
	class: 'username-label',
	textContent: 'Username',
	for: 'uname'
});
setAttributes(usernameInput, {
	id: 'username-input',
	class: 'username-input',
	type: 'text',
	name: 'uname',
	placeholder: 'Enter Username',
	required: true
});
setAttributes(emailLabel, {
	id: 'email-label',
	class: 'email-label',
	textContent: 'E-mail',
	for: 'mail'
});
setAttributes(emailInput, {
	id: 'email-input',
	class: 'email-input',
	type: 'text',
	name: 'mail',
	placeholder: 'Enter E-mail',
	required: true
});
setAttributes(passwordLabel, {
	id: 'password-label',
	class: 'password-label',
	textContent: 'Password',
	for: 'psw'
});
setAttributes(passwordInput, {
	id: 'password-input',
	class: 'password',
	type: 'password',
	name: 'psw',
	placeholder: 'Enter Password',
	required: true
});
setAttributes(repasswordLabel, {
	id: 'repassword-label',
	class: 'repassword-label',
	textContent: 'Re-Enter Password',
	for: 'repsw'
});
setAttributes(repasswordInput, {
	id: 'repassword-input',
	class: 'password',
	type: 'password',
	name: 'repsw',
	placeholder: 'Re-Enter Password',
	required: true
});
setAttributes(submitButton, {
	id: 'submit-button',
	class: 'submit-button',
	type: 'submit',
	textContent: 'Sign Up'
});
setAttributes(checkboxContainerDiv, {
	id: 'checkbox-container-div',
	class: 'container',
	style: 'background-color: #eee'
});
setAttributes(checkboxLabel, {
	id: 'checkbox-label',
	class: 'checkbox-label',
	textContent: 'Remember me'
});
setAttributes(checkboxInput, {
	id: 'checkbox-input',
	class: 'checkbox-input',
	type: 'checkbox',
	checked: 'checked',
	name: 'remember'
});
setAttributes(forgetPasswordSpan, {
	id: 'forget-password-span',
	class: 'psw'
});
setAttributes(spanA, {
	id: 'span-a',
	class: 'span-a',
	textContent: 'Forgot password?',
	href: '#'
});

const formChildren = [formH1, formFigure, formContainerDiv];
const formFigureChildren = [formFigureImg, formInnerContainerDiv];
const formContainerDivChildren = [
	formInnerContainerDiv,
	submitButton,
	checkboxContainerDiv
];
const formInnerContainerDivChildren = [
	usernameLabel,
	usernameInput,
	emailLabel,
	emailInput,
	passwordLabel,
	passwordInput,
	repasswordLabel,
	repasswordInput
];
const checkboxContainerDivChildren = [
	checkboxLabel,
	checkboxInput,
	forgetPasswordSpan
];
forgetPasswordSpan.appendChild(spanA);

// Appending Form Children
appendChildren(contactForm, formChildren);
appendChildren(formFigure, formFigureChildren);
appendChildren(formContainerDiv, formContainerDivChildren);
appendChildren(formInnerContainerDiv, formInnerContainerDivChildren);
appendChildren(checkboxContainerDiv, checkboxContainerDivChildren);
//
//
export { contactHeader as default, contactForm };
