// 数据类型包括： 布尔值、数值、字符串、null、undefined和Symbol
// 布尔值
var isDone = true;
var newBoolean = new Boolean(1);
var createdByNewBoolean = Boolean(1);
// 数值
var decLiteral = 6;
var hexLiteral = 0xf00d; // 十六进制
var binaryLiteral = 10; // 二进制
var octalLiteral = 484; // 八进制
var notANumber = NaN;
var infinityNumber = Infinity;
// 字符串
var myName = 'Tom';
var myAge = 25;
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
// JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function consoleName() {
    console.log('My name is Tom');
}
// 声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
var unusable = undefined;
//在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
var u = undefined;
var n = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
var num = undefined;
var u1;
var num1 = u1;
// 而 void 类型的变量不能赋值给 number 类型的变量：
// let u2: void;
// let num2: number = u2;
// 任意值（any）用来表示允许赋值为任意类型。
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
var something;
something = 'seven';
something = 7;
// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。
// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：
var myFavoriteNumber = 'seven';
// 等价于
// let myFavoriteNumber: string = 'seven';
// 联合类型使用 | 分隔每个类型。
var myFavoriteNumber2;
myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 7;
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：
// function getLength(something: string | number): number {
//     return something.length;
// }
function getString(something) {
    return something.toString();
}
var tom = {
    name: 'Tom',
    age: 25
};
var tom2 = {
    name: 'Tom'
};
var tom3 = {
    name: 'Tom',
    gender: 'male'
};
var tom5 = {
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
