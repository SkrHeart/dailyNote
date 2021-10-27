# Array APIs
### 1.[MDN  Array.from()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 
方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例 
### 2.[MDN  Array.prototype.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
reduce() 方法对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。  

**reducer 函数接收4个参数:**
>Accumulator (acc) (累计器)  
>Current Value (cur) (当前值)  
>Current Index (idx) (当前索引)  
>Source Array (src) (源数组)  

**语法**
```
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```
您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。  
**参数**
```
callback
执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
  accumulator
  累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（见于下方）。
  currentValue
  数组中正在处理的元素。
  index 可选
  数组中正在处理的当前元素的索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
  array可选
  调用reduce()的数组
initialValue可选
作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
```
**返回值**  
函数累计处理的结果
**描述**  
reduce为数组中的每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：
>accumulator 累计器  
>currentValue 当前值  
>currentIndex 当前索引  
>array 数组

>注意：回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。
