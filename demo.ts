// 数据类型包括： 布尔值、数值、字符串、null、undefined和Symbol

// 布尔值
let isDone: boolean = true;

let newBoolean: Boolean = new Boolean(1);
let createdByNewBoolean: boolean = Boolean(1);

// 数值
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d; // 十六进制
let binaryLiteral: number = 0b1010; // 二进制
let octalLiteral: number = 0o744; // 八进制
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// 字符串
let myName: string = 'Tom';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function consoleName(): void {
    console.log('My name is Tom');
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;

//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
let u: undefined = undefined;
let n: null = null;

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num: number = undefined;

let u1: undefined;
let num1: number = u1;

// 而 void 类型的变量不能赋值给 number 类型的变量：
// let u2: void;
// let num2: number = u2;

// 任意值（any）用来表示允许赋值为任意类型。
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
let something;
something = 'seven';
something = 7;

// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
let myFavoriteNumber = 'seven'; 
// 等价于
// let myFavoriteNumber: string = 'seven';

// 联合类型使用 | 分隔每个类型。
let myFavoriteNumber2: string | number;
myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
// function getLength(something: string | number): number {
//     return something.length;
// }

function getString(something: string | number): string {
    return something.toString();
}

// 在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};

// 可选属性
interface Person2 {
    name: string;
    age?: number;
}

let tom2: Person2 = {
    name: 'Tom'
};

// 任意属性
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom3: Person3 = {
    name: 'Tom',
    gender: 'male'
};
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
// interface Person4 {
//     name: string;
//     age?: number;
//     [propName: string]: string;
// }

// let tom4: Person4 = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };

// 只读属性
interface Person5 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom5: Person5 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

// tom5.id = 9527;

// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// interface Person6 {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom6: Person6 = {
//     name: 'Tom',
//     gender: 'male'
// };

// tom6.id = 89757;