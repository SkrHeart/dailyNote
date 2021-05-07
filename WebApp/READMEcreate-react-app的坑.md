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
首先执行
```
yarn add react-router-dom
```安装react路由
