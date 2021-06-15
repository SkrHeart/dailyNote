## 1.JS的异步处理函数有哪些[参考链接](https://juejin.cn/post/6844903679355518984)
eg1: Promise的构造函数中代码是同步执行的，但是then方法是异步执行的，then方法需要等到等到resolve函数执行时才得到执行  
eg2: Promise一旦执行了resolve函数后，就不会再执行reject和其他的resolve函数了。一旦Promise执行了reject函数，将会被catch函数捕获，执行catch中的代码。  
eg3: 题目中Promise首先resolve(1)，接着就会执行then函数，因此会输出1，然后在函数中返回2。  
注意:  return 返回基本数据类型，其实就是 Promise.resolve(value), 如果是返回引用数据类型会冲掉,返回这个对象  
eg4: 经典 setTime/promise  
>先执行同步代码，遇到异步代码就先加入队列，然后按入队的顺序执行异步代码，最后执行setTimeout队列的代码。  
```
详解:
    之前说过，在定时器，事件，ajax等操作的时候，会使一个异步操作，会把该操作放到一个task queue里，需要等当前主线程的任务完成后，会读取任务队列(task queue)中的是事件。
    
    那么，setTimeout会放到任务队列中，代码继续往下走。 
    所以先输出2 3。 
    promise中的then操作是放在<<执行栈>>，也就是主线程的最后。 
    那么主线程会继续往下走咯。 
    所以输出 5 4 
    最后主线程的任务搞完了，才会去执行task queue中的任务。 
    所以最后执行1
```
## 2.defer & async 的区别[参考链接](https://www.jianshu.com/p/456c0b677e8c)  
## 3.浏览器的异步处理队列？（宏任务和微任务，具体有哪些？）[参考链接](https://segmentfault.com/a/1190000022950333)
