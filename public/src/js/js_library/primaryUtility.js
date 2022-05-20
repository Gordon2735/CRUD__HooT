'use strict';

// Primary Utility Functions for Application

export default async function appendChildren(parent, children) {
	for (const child of children) {
		parent.appendChild(child);
	}
}

export async function removeChildren(parent, children) {
	for (const child of children) {
		parent.removeChild(child);
	}
}
export const elementById = element => document.getElementById(element);
export const elementsByClass = element =>
	document.getElementsByClassName(element);

export const setAttributes = (tag, attributes) => {
	for (const key in attributes) {
		tag.setAttribute(key, attributes[key]);
	}
};

export const listMaker = (list, element) => {
	list.forEach(item => {
		element.appendChild(item);
	});
};

export const loopList = (list_li, attribute, element) => {
	list_li.forEach(item_li => {
		const li = document.createElement('li');
		li.append(item_li);
		li.setAttribute('class', attribute);
		element.appendChild(li);
	});
};

export const appender = (parent, children) => {
	children.map(child => {
		parent.append(child);
	});
};

export const renderHeadScripts = (scripts, renderNote) => {
	const head = document.querySelector('head');
	for (const script of scripts) {
		head.appendChild(script);
	}
	return renderNote;
};

export const renderArray = async array => {
	await array.map(item => {
		return item;
	});
};
