# create-react-app创建新项目时使用sass的坑（未解决）
使用
```
yarn eject
```
暴露webpack的配置文件  
然后在config-->webpack.config.js  
找到  
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
