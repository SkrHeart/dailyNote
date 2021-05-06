2021/5/6(美团)
## bind()函数
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
## call()函数
call() 方法调用一个函数, 其具有一个指定的this值和分别地提供的参数。  
该方法和apply()类似，区别在于，call()可以接收若干参数，而apply（）接收的是一个包含多个参数的数组。
```
语法：fun.call(thisArg, arg1, arg2, ...)
```
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
