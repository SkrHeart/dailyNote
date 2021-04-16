# bind()函数
>语法：function.bind(thisArg[, arg1[, arg2[, ...]]])  
>thisArg 当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用 new 操作符调用绑定函数时，该参数无效。  
>arg1, arg2, … （可选）当绑定函数被调用时，这些参数加上绑定函数本身的参数会按照顺序作为原函数运行时的参数

**bind 的第一个参数会作为原函数运行时的 this 指向，不多说；  
而第二个开始的参数是可选的，当绑定函数被调用时，这些参数加上绑定函数本身的参数会按照顺序作为原函数运行时的参数。**
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
