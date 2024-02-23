// @ts-check
/// <reference types="node" />
/* eslint-env node */

const path = require('path');

/** @type {import('eslint').ESLint.ConfigData} */
const config = {
	parser: '@typescript-eslint/parser',
	extends: [
		'accurtype-style',
		'eslint:recommended',
		'plugin:@typescript-eslint/stylistic-type-checked',
		'plugin:expect-type/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'eslint-plugin-expect-type',
	],
	rules: { 'no-unused-vars': 'warn' },
	root: true,
	parserOptions: {
		project: [
			'./config/tsconfig.json',
			'./packages/tsconfig.json',
			'./docs/tsconfig.json',
			'./utilities/*/tsconfig.json',
		],
		tsconfigRootDir: path.join(__dirname, '..'),
	},
};
module.exports = config;
