// @ts-check
/// <reference types="node" />
/* eslint-env node */

const fs = require('fs');
const notPacks = require('packages/not-packs.json');
const packages = [
	...fs.readdirSync(__dirname + '/../packages'),
	'docs',
	...fs.readdirSync(__dirname + '/../utilities'),
].filter(n => !notPacks.includes(n));

const config = {
	types: [
		{ value: 'Init', name: 'Init		初始化' },
		{ value: 'Fix', name: 'Fix		修复' },
		{ value: 'Refactor', name: 'Refactor	重构' },
		{ value: 'Add', name: 'Add		添加' },
		{ value: 'Test', name: 'Test		测试相关' },
		{ value: 'Doc', name: 'Doc		添加文档' },
		{ value: 'Style', name: 'Style		风格修改' },
		{ value: 'Revert', name: 'Revert	撤销提交' },
		{ value: 'Env', name: 'Env		非代码部分' },
	],
	allowBreakingChanges: ['Add', 'Refactor', 'Fix', 'Revert'],

	scopes: packages.map(name => ({ name })),
	allowCustomScopes: true,

	allowTicketNumber: false,
	isTicketNumberRequired: false,
	// ticketNumberPrefix: 'TICKET-',
	// ticketNumberRegExp: '\\d{1,5}',
	// override the messages, defaults are as follows
	messages: {
		type: '本次提交的类型',
		scope: '[可选] 本次提交影响的范围',
		customScope: '本次提交影响的范围\n',
		subject: '简述提交',
		body: '[可选] 详细描述提交，用 "|" 来换行\n',
		breaking: '[可选] 列出破坏性更新\n',
		footer: '[可选] 列出解决的议题号，比如: #31, #34\n',
		confirmCommit: '确认以上提交信息？',
	},
	skipQuestions: ['footer'],
};
module.exports = config;
