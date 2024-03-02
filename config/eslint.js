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
		'plugin:markdown/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'eslint-plugin-expect-type',
		'markdown',
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
	overrides: [
		{
			files: ['**/*.md/*'],
			extends: 'plugin:@typescript-eslint/disable-type-checked',
			rules: { 'expect-type/expect': 'off' },
		},
	],
};
module.exports = config;
