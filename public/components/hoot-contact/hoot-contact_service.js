'use strict';

import appendChildren, {
	setAttributes,
	renderArray
} from '../../src/js/js_library/primaryUtility.js';

// Contact Header Element and Children
const body = document.querySelector('body');
const contactHeader = document.createElement('header');
const contactFigure = document.createElement('figure');
const imgSpan = document.createElement('span');
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
setAttributes(imgSpan, {
	class: 'fa-solid fa-user'
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
	class: 'contact-p'
});

// const faUserIcon =
// 	(contactFigure.innerHTML = `<i class="fa-solid fa-circle-user"></i>`);
const textContactH1 = (contactH1.innerHTML = `User Login`);
const textContactP =
	(contactP.innerHTML = `Please enter your username and password to login.`);
const textCaption =
	(contactFigcaption.innerHTML = `Plan om changing this to a  fontawesome icon.`);
const textGroup = [textContactH1, textContactP, textCaption];

// Appending Header Children
const headerChildren = [contactFigure, contactH1, contactP];
const contactFigureChildren = [imgSpan, contactFigcaption];

// font awesome icon

// Appending Container Children
appendChildren(contactHeader, headerChildren);
appendChildren(contactFigure, contactFigureChildren);
renderArray(textGroup);

// Form Element and Children
const contactForm = document.createElement('form');
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
const formH1 = document.createElement('h1');
const spanSignup = document.createElement('span');
const aSpanSignup = document.createElement('a');

setAttributes(contactForm, {
	id: 'contact-form',
	class: 'contact-form',
	action: '#'
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
	type: 'submit'
});
setAttributes(checkboxContainerDiv, {
	id: 'checkbox-container-div',
	class: 'container',
	style: 'background-color: #eee'
});
setAttributes(checkboxLabel, {
	id: 'checkbox-label',
	class: 'checkbox-label'
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
	href: '#'
});
setAttributes(formH1, {
	id: 'form-h1',
	class: 'form-h1'
});
setAttributes(spanSignup, {
	id: 'span-signup',
	class: 'span-signup'
});
setAttributes(aSpanSignup, {
	id: 'a-span-signup',
	class: 'a-span-signup',
	href: '/users'
});

// having problems renderering font awesome icon || so I'm doing
// some experimentation here. The main problem is that the font awesome
// icon is not rendering correctly because of the shadowDOM I believe
const fontAwesomeScript = document.createElement('script');
setAttributes(fontAwesomeScript, {
	type: 'module',
	// src: `https:${/}/kit.fontawesome.com/d7af42e269.js`,
	crossorigin: 'anonymous'
});

const renderTextElements = () => {
	const textFormH1 = (formH1.innerHTML = `Sign Up`);
	const textSpanSignup = (spanSignup.innerHTML = `Need to open an account? `);
	const textUsernameLabel = (usernameLabel.innerHTML = `Username`);
	const textCheckboxLabel = (checkboxLabel.innerHTML = `Remember Me`);
	const textEmailLabel = (emailLabel.innerHTML = `Enter your E-mail`);
	const textPasswordLabel = (passwordLabel.innerHTML = `Enter Password`);
	const textRepasswordLabel =
		(repasswordLabel.innerHTML = `Re-Enter Password`);
	const textButton = (submitButton.innerHTML = `Submit Log-In`);
	const textSpanA = (spanA.innerHTML = `Forgot password?`);

	const textFormGroup = [
		textUsernameLabel,
		textCheckboxLabel,
		textEmailLabel,
		textPasswordLabel,
		textRepasswordLabel,
		textButton,
		textSpanA,
		textFormH1,
		textSpanSignup
	];
	renderArray(textFormGroup);
};

const formChildren = [contactHeader, formContainerDiv, formH1];
const formContainerDivChildren = [
	formInnerContainerDiv,
	submitButton,
	checkboxContainerDiv,
	spanSignup
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
spanSignup.appendChild(aSpanSignup);

// Appending Form Children with main form container exported to main
// shadow root of the component and rendered to the shadowDOM.
appendChildren(formContainerDiv, formContainerDivChildren);
appendChildren(formInnerContainerDiv, formInnerContainerDivChildren);
appendChildren(checkboxContainerDiv, checkboxContainerDivChildren);
appendChildren(contactForm, formChildren);
//
//
export { contactHeader as default, contactForm };
