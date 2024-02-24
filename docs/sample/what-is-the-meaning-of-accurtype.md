# 为什么需要类型工具库

TypeScript 类型系统可以用作代码推断。

我们知道类型系统是什么，例如对于下面这个例子：

```ts
const obj = {
	a: 123,
	b: 123,
	c: 123,
};
```

我们能知道 `obj` 有三个键 `'a'` `'b'` `'c'` ，且对应的值是 `123` 。

当我们输入 `obj.` 时，编辑器能给我们代码提示，说有三个键。
任何具有毕竟完备类型系统的语言都可以做到这一点。

那么当键来自于一个确定的字符串数组呢？比如下边这个：

```ts
const obj = {};
const keys = ['a', 'b', 'c', 'asdsa', '123', 'jklhjksdjkhsd'] as const;

for (key of keys) {
	obj[key] = 123;
}
```

此时，我们输入 `obj.` 时，编辑器是否还能正常进行代码提示呢？
即使字符串数组是确定的，对于大多数语言的类型系统来说也很困难。

但是由于 TypeScript 完备的类型系统，你可以通过类型编程完成这个目标：

```ts
const keys = ['a', 'b', 'c', 'asdsa', '123', 'jklhjksdjkhsd'] as const;

function setKeys<Keys extends string[]>(obj: {}, keys: readonly [...Keys]) {
	type KeysToObj<Keys extends string[]> = Keys extends [infer Key extends string, ...infer Keys extends string[]] ? KeysToObj<Keys> & { [I in Key]: 123 } : {};

	for (const key of keys) {
		(obj as any)[key] = 123;
	}

	return obj as KeysToObj<Keys>;
}

const obj = setKeys({}, keys);
```

此时，复杂且完善的类型推断会成功运行，把你数组里写的的所有键都推断出来。
没错，这就是 TypeScript 的类型系统的好用之处！

但是我们这发现太复杂了，写这个好麻烦。
这便是类型工具库的用途，你可以查找类型工具库里有没有现成的类型工具。
即使没有，你也可以利用类型工具库里的类型构建你所需要的复杂类型。
