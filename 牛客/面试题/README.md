## 1.JS的异步处理函数有哪些
eg1: Promise的构造函数中代码是同步执行的，但是then方法是异步执行的，then方法需要等到等到resolve函数执行时才得到执行  
eg2: Promise一旦执行了resolve函数后，就不会再执行reject和其他的resolve函数了。一旦Promise执行了reject函数，将会被catch函数捕获，执行catch中的代码。  
eg3: 题目中Promise首先resolve(1)，接着就会执行then函数，因此会输出1，然后在函数中返回2。  
注意:  return 返回基本数据类型，其实就是 Promise.resolve(value), 如果是返回引用数据类型会冲掉,返回这个对象  
eg4: 经典 setTime/promise[csdn参考链接](https://blog.csdn.net/baidu_33295233/article/details/79335127)
