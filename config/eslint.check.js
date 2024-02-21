// @ts-check
/// <reference types="node" />
/* eslint-env node */

const deepmerge = require('deepmerge');
const style = require('./eslint.style');

/** @type {import('eslint').ESLint.ConfigData} */
const config = deepmerge({
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:expect-type/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'eslint-plugin-expect-type',
	],
	rules: { 'no-unused-vars': 'warn' },
}, style);
module.exports = config;
