// @ts-check
/* eslint-env node */
/** @type {import('eslint').ESLint.ConfigData} */
const config = {
	parser: '@typescript-eslint/parser',
	extends: [
		'accurtype-style',
	],
	plugins: [
		'@typescript-eslint',
	],
	root: true,
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
};
module.exports = config;
