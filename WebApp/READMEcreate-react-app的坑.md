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
## 3.使用路由跳转（this.props.history.push）
参考链接
>[CSDN:解决报错Cannot read property 'push' of undefined](https://blog.csdn.net/zrq1210/article/details/109381692)  
>[思否:使用React的this.props.history.push()报错解决方案](https://segmentfault.com/a/1190000022272003)

在当前页面使用:point_down:跳转，会报错*TypeError: Cannot read property 'push' of undefined*
```
this.props.history.push('/second')
```
产生原因：当前组件不是路由组件，因为没有用Route组件，只有用了Route组件，才会在当前组件中注入route props(即 history, location, match)

**情景复现**
```
class Index extends Component<any> {
    navToUrl = ()=>{
        this.props.history.push('/second')
    }
    render() {
        // console.log(this.props)
        return (
            <div className='index'>
                <div className='index_btn'>按钮</div>
                aaaaaa
                <div onClick={this.navToUrl}>点我跳转</div>
                <Route exact={true} path={'/second'} component={Second}/>
            </div>
        );
    }
}
export default Index ;
```
### 解决方法1（可以）
原理：默认情况下必须经过路由匹配渲染的组件才存在this.props,才拥有路由参数，执行this.props.history.push('/second')跳转到对应路由的页面，***然而不是所有组件都直接与路由相连（通过路由跳转到此组件）的***，当这些组件需要路由参数时，使用withRouter就可以给此组件传入路由参数，将react-router的history、location、match三个对象传入props对象上，此时就可以使用this.props  
**在export default时加withRouter()**
```
import {withRouter} from "react-router-dom";
//...
export default withRouter(Index) ;
```
### 解决方法2（可以）
在当前组件的父组件中给当前组件传一个history  
***注：当前组件的父组件必须是路由组件，含history***
```
<Index history={this.props.history} />
```
