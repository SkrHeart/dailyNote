# create-react-app创建新项目的坑
## 1.使用sass(未解决)
### 暂时解决方法
1.使用
```
yarn eject
```
暴露webpack的配置文件  
2.然后在config-->webpack.config.js，找到  
```
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
```
修改为
```
// style files regexes
const cssRegex = /\.(css|scss)$/;
const cssModuleRegex = /\.module\.(css|scss)$/;
```
## 2.使用react-router-dom(已解决)
新创建的项目使用react-router-dom会报如下错误
>Typescript react - Could not find a declaration file for module ''react-router-dom'. 'path/to/module-name.js' implicitly has an any type

原因：typescript有类型定义，而react没有
参考链接[为现有的React组件创建TypeScript类型](https://templecoding.com/blog/2016/03/31/creating-typescript-typings-for-existing-react-components)
>There are a lot of React components available on-line, and if you're using TypeScript with React, it can't sometimes be a little disappointing because many of those components don't have their type definitions.  
>在线上有很多React组件，如果您将TypeScript与React一起使用，有时会有些令人失望，因为其中许多组件都没有类型定义。

1.首先执行
```
yarn add react-router-dom
```
安装react路由  
2.然后执行
```
yarn add @types/react-router-dom
```
填加依赖
**下次直接这样yarn add react-router-dom @types/react-router-dom**  
**引入第三方库加@types/**
