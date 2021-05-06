2021/5/6(美团)
# call、apply、bind的区别
>call()、apply()、bind()方法的作用都是改变函数运行时this的指向。 bind() 是返回对应的函数，便于稍后调用；call()和apply()则是立即调用。
## 一、bind()函数
bind()方法创建一个新函数, 在调用时设置this关键字为提供的值。
>语法：function.bind(thisArg[, arg1[, arg2[, ...]]])  
>thisArg 当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用 new 操作符调用绑定函数时，该参数无效。  
>arg1, arg2, … （可选）当绑定函数被调用时，这些参数加上绑定函数本身的参数会按照顺序作为原函数运行时的参数

**bind 的第一个参数会作为原函数运行时的 this 指向，不多说；  
从第二个开始的参数是可选的，当绑定函数被调用时，这些参数加上绑定函数本身的参数会按照顺序作为原函数运行时的参数。**
```
function fn(a, b, c) {
  return a + b + c;
}
var _fn = fn.bind(null, 10);
var ans = _fn(20, 30); // 60
```
**fn函数需要三个参数，_fn 函数将 10 作为默认的第一个参数，所以只需要传入两个参数即可，如果你不小心传入了三个参数，放心，也只会取前两个。**
```
function fn(a, b, c) {
  return a + b + c;
}
var _fn = fn.bind(null, 10);
//此时_fn为
//function _fn(b,c){
//  return 10+b+c
//}
//所以再次调用_fn时，只需要传入后两个参数即可
var ans = _fn(20, 30); // 60
```
## 二、call()函数
call() 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数。  
该方法和apply()类似，区别在于，call()可以接收若干参数，而apply（）接收的是一个包含多个参数的数组。
>语法：fun.call(thisArg, arg1, arg2, ...)

### 1.call可以继承
通过父类的构造函数call方法实现继承
```
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
  }
  var cheese = new Food('feta', 5);
  console.log(cheese)
  // Food { name: 'feta', price: 5, category: 'food' }
```
实例都会拥有在Product构造函数中添加的name属性和price属性,但category属性是在各自的构造函数中定义的
### 2.call方法调用匿名函数
```
var animals = [
    { species: 'Lion', name: 'King' },
    { species: 'Whale', name: 'Fail' }
  ];
  
  for (var i = 0; i < animals.length; i++) {
    (function(i) {
        console.log('#' + i + ' ' + this.species + ': ' + this.name) }
    ).call(animals[i], i);
  }
```
for循环体内，我们创建了一个匿名函数，然后通过调用该函数的call方法，将每个数组元素作为指定的this值执行了那个匿名函数。
### 3.call方法指定上下文的this
```
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}
var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};
greet.call(obj);
// cats typically sleep between 12 and 16 hours
```
### 4.Call原理
```
Function.prototype.myCall = function(context) {
   context = context ? Object(context) : window
   context.fn = this
   let args = [...arguments].slice(1)
   let r = context.fn(args)
   delete context.fn
   return r
}
```
## 三、apply()函数
apply()调用一个指定this值的函数, 接收作为一个数组或者类数组对象提供的参数
>语法： func.apply(thisArg, [argsArray])

### 1.apply将数组添加到另一个数组
```
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.log(array); // ["a", "b", 0, 1, 2]
```
### 2.apply 找出最大值和最小值
```
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers)
var min = Math.min.apply(null, numbers);
```
如果参数组非常大，将参数数组切块后，循环传入目标方法：
```
function minOfArray(arr) {
    var min = Infinity;
    var QUANTUM = 32768;
  
    for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
      var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
      min = Math.min(submin, min);
    }
  
    return min;
  }
  
  var min = minOfArray([5, 6, 2, 3, 7]);
  console.log(min) // 2

```
### 3.apply原理
```
Function.prototype.myApply = function(context) {
  context = context ? Object(context) : window
    context.fn = this
    let args = [...arguments][1]
    if (!args) {
        return context.fn()
    }
    let r = context.fn(args)
    delete context.fn;
    return r
 }
```
