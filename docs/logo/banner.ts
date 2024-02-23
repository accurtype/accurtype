/**
 * 用作宣传图的代码
 * @license MIT
 */
declare module './banner';

export type Accur<T> = any & T;
export default function<T extends Accur<T>>(n: T): T {
	return n;
}
