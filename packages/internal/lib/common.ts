/**
 * 内部通用工具
 * @license MIT
 */
declare module './common';

/**
 * 反转字符串
 * @tags string, tail-recursion
 */
export type ReversedString<
	T extends string,
	R extends string = ''>
	= (T extends `${infer N}${infer B}`
		? ReversedString<B, `${N}${R}`>
		: R
	);

/**
 * 删除末尾的 0
 * @tags string, number, tail-recursion
 */
export type Zeroless<
	T extends string>
	= (T extends `${infer N}0`
		? Zeroless<N>
		: T extends '' ? '0' : T
	);

