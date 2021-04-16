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

## map()函数
map()方法返回一个新的数组，数组中的元素为原始数组调用函数处理后的值,map()不会改变原数组  
```
array.map(function(currentValue, index, arr), thisArg)
```
>function(currentValue, index, arr)：必须。为一个函数，数组中的每个元素都会执行这个函数。其中函数参数：  
>>currentValue：必须。当前元素的的值。  
>>index：可选。当前元素的索引。  
>>arr：可选。当前元素属于的数组对象本身。(原数组)               
>如果 thisArg 参数有值，则每次 callback 函数被调用的时候，this 都会指向 thisArg 参数上的这个对象。如果省略了 thisArg 参数,或者赋值为 null 或 undefined，则 this 指向全局对象 。
