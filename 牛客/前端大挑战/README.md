# 数组方法
### 数组去重
ES6新方法new Set()
```
let arr = [3, 5, 2, 2, 5, 5];
let setArr = new Set(arr)     // 返回set数据结构  Set(3) {3, 5, 2}

//方法一   es6的...解构
let unique1 =  [...setArr ];      //去重转数组后  [3,5,2]

//方法二  Array.from()解析类数组为数组
let unique2 = Array.from(setArr )   //去重转数组后  [3,5,2]
```
