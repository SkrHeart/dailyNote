# 普通函数
# 箭头函数（参考链接：[掘金](https://juejin.cn/post/6844903805960585224)）
## 一、基本语法
```
// 箭头函数
let fun = (name) => {
    // 函数体
    return `Hello ${name} !`;
};

// 等同于
let fun = function (name) {
    // 函数体
    return `Hello ${name} !`;
};
```
### 1.关于箭头函数参数  
#### ① 如果箭头函数没有参数，直接写一个空括号即可。
```
// 没有参数
let fun1 = () => {
    console.log(111);
};
```
#### ② 如果箭头函数的参数只有一个，也可以省去包裹参数的括号。
```
// 只有一个参数，可以省去参数括号
let fun2 = name => {
    console.log(`Hello ${name} !`)
};
```
#### ③ 如果箭头函数有多个参数，将参数依次用逗号(,)分隔，包裹在括号中即可。
```
// 有多个参数
let fun3 = (val1, val2, val3) => {
    return [val1, val2, val3];
};
```
### 2.关于箭头函数的函数体
#### ① 如果箭头函数的函数体只有一句代码，就是简单返回某个变量或者返回一个简单的JS表达式，可以省去函数体的大括号{ }。
```
let f = val => val;
// 等同于
let f = function (val) { return val };

let sum = (num1, num2) => num1 + num2;
// 等同于
let sum = function(num1, num2) {
  return num1 + num2;
};
```
#### ② 如果箭头函数的函数体只有一句代码，就是返回一个对象，可以像下面这样写：
```
// 用小括号包裹要返回的对象，不报错
let getTempItem = id => ({ id: id, name: "Temp" });

// 但绝不能这样写，会报错。
// 因为对象的大括号会被解释为函数体的大括号
let getTempItem = id => { id: id, name: "Temp" };
```
#### ③ 如果箭头函数的函数体只有一条语句并且不需要返回值（最常见是调用一个函数），可以给这条语句前面加一个void关键字
```
let fn = () => void doesNotReturn();
```
## 箭头函数的特点
### 1.箭头函数不会创建自己的this（重要！！！！）
>箭头函数不会创建自己的this，所以它没有自己的this，它只会从自己的作用域链的上一层继承this。

箭头函数没有自己的this，它会捕获自己在**定义**时（注意，是定义时，不是调用时）所处的**外层执行环境的this**，并继承这个this值。所以，箭头函数中this的指向在它被定义的时候就已经确定了，之后**永远**不会改变。  
```
var id = 'Global';

function fun1() {
    // setTimeout中使用普通函数
    setTimeout(function(){
        console.log(this.id);
    }, 2000);
}

function fun2() {
    // setTimeout中使用箭头函数
    setTimeout(() => {
        console.log(this.id);
    }, 2000)
}

fun1.call({id: 'Obj'});     // 'Global'

fun2.call({id: 'Obj'});     // 'Obj'
```
上面这个例子，函数fun1中的setTimeout中使用普通函数，2秒后函数执行时，这时函数其实是在全局作用域执行的，所以this指向Window对象，this.id就指向全局变量id，所以输出'Global'。
但是函数fun2中的setTimeout中使用的是箭头函数，这个箭头函数的this在定义时就确定了，它继承了它外层fun2的执行环境中的this，而fun2调用时this被call方法改变到了对象{id: 'Obj'}中，所以输出'Obj'。

