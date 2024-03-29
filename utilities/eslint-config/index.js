// @ts-check
/* eslint-env node */
/** @type {import('eslint').ESLint.ConfigData} */
const config = {
	plugins: [
		'@stylistic',
	],
	rules: {
		'@stylistic/array-bracket-newline': ['error', 'consistent'],
		'@stylistic/array-bracket-spacing': ['error', 'never'],
		'@stylistic/array-element-newline': ['error', 'consistent'],
		'@stylistic/arrow-parens': ['error', 'as-needed'],
		'@stylistic/arrow-spacing': 'error',
		'@stylistic/block-spacing': 'error',
		'@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
		'@stylistic/comma-dangle': ['error', 'always-multiline'],
		'@stylistic/comma-spacing': ['error', { before: false, after: true }],
		'@stylistic/comma-style': ['error', 'last'],

		'@stylistic/computed-property-spacing': ['error', 'never'],
		'@stylistic/dot-location': ['error', 'property'],
		'@stylistic/eol-last': ['error', 'always'],
		'@stylistic/function-call-argument-newline': ['error', 'consistent'],
		'@stylistic/function-call-spacing': ['error', 'never'],
		'@stylistic/function-paren-newline': ['error', 'consistent'],
		'@stylistic/generator-star-spacing': ['error', { before: true, after: false }],
		'@stylistic/implicit-arrow-linebreak': ['error', 'beside'],
		'@stylistic/indent': ['error', 'tab'],
		'@stylistic/key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
				mode: 'strict',
			},
		],

		'@stylistic/keyword-spacing': ['error', { before: true, after: true }],
		'@stylistic/lines-between-class-members': [
			'error',
			{
				enforce: [
					{ blankLine: 'always', prev: 'method', next: 'field' },
				],
			},
		],
		'@stylistic/max-len': ['error', { code: 160 }],
		'@stylistic/member-delimiter-style': 'error',
		'@stylistic/multiline-ternary': ['error', 'always-multiline'],
		'@stylistic/new-parens': 'error',
		'@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
		'@stylistic/no-confusing-arrow': 'error',
		'@stylistic/no-extra-parens': [
			'error',
			'all',
			{
				nestedBinaryExpressions: false,
				ternaryOperandBinaryExpressions: false,
				ignoreJSX: 'multi-line',
				enforceForArrowConditionals: false,
				enforceForNewInMemberExpressions: false,
			},
		],
		'@stylistic/no-multi-spaces': 'error',

		'@stylistic/no-multiple-empty-lines': 'error',
		'@stylistic/no-trailing-spaces': 'error',
		'@stylistic/no-whitespace-before-property': 'error',
		'@stylistic/nonblock-statement-body-position': ['error', 'beside'],
		'@stylistic/object-curly-newline': ['error', { multiline: true }],
		'@stylistic/object-curly-spacing': ['error', 'always'],
		'@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
		'@stylistic/one-var-declaration-per-line': ['error', 'always'],
		'@stylistic/operator-linebreak': ['error', 'before'],
		'@stylistic/padded-blocks': ['error', 'never'],

		'@stylistic/padding-line-between-statements': [
			'error',
			{ blankLine: 'never', prev: 'function-overload', next: 'function' },
			{ blankLine: 'never', prev: 'function-overload', next: 'function-overload' },

			{ blankLine: 'never', prev: 'case', next: 'case' },
			{ blankLine: 'never', prev: 'switch', next: 'case' },
			{ blankLine: 'never', prev: 'case', next: 'switch' },
			{ blankLine: 'never', prev: 'default', next: 'switch' },
			{ blankLine: 'never', prev: 'switch', next: 'default' },
			{ blankLine: 'never', prev: 'default', next: 'case' },
			{ blankLine: 'never', prev: 'case', next: 'default' },

			{ blankLine: 'always', prev: '*', next: 'import' },
			{ blankLine: 'always', prev: 'import', next: '*' },
			{ blankLine: 'never', prev: 'import', next: 'import' },

			{ blankLine: 'never', prev: 'singleline-const', next: 'singleline-const' },
			{ blankLine: 'never', prev: 'singleline-let', next: 'singleline-let' },
		],
		'@stylistic/quote-props': ['error', 'as-needed'],
		'@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: true }],
		'@stylistic/rest-spread-spacing': 'error',
		'@stylistic/semi': 'error',
		'@stylistic/semi-spacing': 'error',
		'@stylistic/semi-style': 'error',
		'@stylistic/space-before-blocks': 'error',
		'@stylistic/space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],
		'@stylistic/space-in-parens': 'error',

		'@stylistic/space-infix-ops': 'error',
		'@stylistic/space-unary-ops': 'error',
		'@stylistic/switch-colon-spacing': 'error',
		'@stylistic/template-curly-spacing': 'error',
		'@stylistic/template-tag-spacing': 'error',
		'@stylistic/type-annotation-spacing': 'error',
		'@stylistic/type-generic-spacing': 'error',
		'@stylistic/type-named-tuple-spacing': 'error',
		'@stylistic/wrap-iife': ['error', 'inside', { functionPrototypeMethods: true }],
		'@stylistic/yield-star-spacing': ['error', 'before'],
	},
};
/**
 * 「精确类型」风格 ESLint 配置
 * @license MIT
 * @version 0.1.0
 */
module.exports = config;
