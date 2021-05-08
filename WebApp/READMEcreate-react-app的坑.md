2021.5.7
# create-react-app创建新项目的坑
## 1.使用sass(已解决)
### 解决方法
产生原因：create-react-app拉取的项目模板中的package.json文件中，无:point_down:依赖
```
"node-sass": "^5.0.0",
"sass-loader": "^11.0.1",
```
需使用:point_down:进行下载对应的modules，package.json会自动填加:point_up:依赖,所以完美解决
```
yarn add node-sass sass-loader
```
***此方法可以使用 import 'path/xxx.scss'但是不可以使用import styles from 'path/xxx.scss'*** 
### 暂时解决方法(不可行:x:)
***此方法只能使项目编译成功，但是不支持sass写法，无法识别到scss文件中的sass写法***  
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
1.首先执行:point_down:安装react路由 
```
yarn add react-router-dom
```
新创建的项目使用react-router-dom会报如下错误
>Typescript react - Could not find a declaration file for module ''react-router-dom'. 'path/to/module-name.js' implicitly has an any type

原因：typescript有类型定义，而react没有
参考链接[为现有的React组件创建TypeScript类型](https://templecoding.com/blog/2016/03/31/creating-typescript-typings-for-existing-react-components)
>There are a lot of React components available on-line, and if you're using TypeScript with React, it can't sometimes be a little disappointing because many of those components don't have their type definitions.  
>在线上有很多React组件，如果您将TypeScript与React一起使用，有时会有些令人失望，因为其中许多组件都没有类型定义。  
>
>***为什么要下载@types/xxx包？***  
>你可能会遇到Could not find a declaration file for module 'xxx'的问题，这个问题是因为TypeScript还不认识相关包，要想让typescript认识他们，就要下载相应的@types/xxx包

2.然后执行:point_down:填加依赖 
```
yarn add @types/react-router-dom
```
**下次直接这样**:point_down:
```
yarn add react-router-dom @types/react-router-dom
```
**引入第三方库加@types/**

