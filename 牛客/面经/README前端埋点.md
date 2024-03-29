2021/4/28
# 前端埋点方案，现有主流方案
>埋点：埋点即监控用户在应用表现层的行为，于产品迭代而言至关重要，运营，产品，数据分析基于此来对用户行为进行分析统计，同时埋点也可作为一种前端监控的手段，检验功能是否达预期的佐证。  
>基于埋点数据进行用户行为分析，可以得到包含页面点击量、用户访问量、用户访问路径、用户转化率、导流转化率、用户访问时长和用户访问内容分析等重要数据。

## 一、可埋点数据
>type - 上报类型  
appid - 设备id  
screen - 屏幕信息  
userAgent - 浏览器信息  
userInfo - 用户身份信息  
timestamp - 上报时间  
document.referrer - 访问来源  
action - 上报事件的动作类型  
element - 触发上报的元素  
地理位置,访问渠道  
>以及其他自定义数据params等等  

## 二、埋点方案
**前端埋点大致分为：代码埋点、可视化埋点、无痕埋点三种。**
### 1.代码埋点
代码埋点，就是以嵌入代码的形式进行埋点，完全由开发控制埋点的位置时间和触发机制。比如需要监控用户的点击事件，会选择在用户点击时，插入一段代码，保存这个监听行为或者直接将监听行为以某一种数据格式直接传递给server端。此外比如需要统计产品的PV和UV的时候，需要在网页的初始化时，发送用户的访问信息等。  
优点：可以在任意时刻，精确的发送或保存所需要的数据信息  
缺点：工作量较大，每一个组件的埋点都需要添加相应的代码  
*使用第三方sdk埋点*
>如百度统计、友盟、TalkingData、Google Analytics、Sensors Analytics等都提供了这一方案。

使用相对简单，在APP或者界面初始化的时候，初始化第三方数据分析服务商的SDK，然后在某个事件发生时就调用SDK里面相应的数据发送接口发送数据。例如，我们想统计APP里面某个按钮的点击次数，则在APP的某个按钮被点击时，可以在这个按钮对应的 OnClick 函数里面调用SDK提供的数据发送接口来发送数据。  
除此针对特定需求也可以统一封装数据上报通用sdk，各页面各业务模块按需调用，同时埋点的形式也是多种多样的  
*基于事件点击埋点*  
*页面访问埋点-统计页面曝光时长*  
>传统基于DOMContentLoaded、beforeunload、onload等也可以实现

*css埋点*  
**埋点数据上报的形式**  
*xhr上报*  
*img/iframe/script上报*  
### 2.可视化埋点
通过可视化交互的手段，代替代码埋点。将业务代码和埋点代码分离，提供一个可视化交互的页面，输入为业务代码，通过这个可视化系统，可以在业务代码中自定义的增加埋点事件等等，最后输出的代码耦合了业务代码和埋点代码。  
可视化埋点听起来比较高大上，实际上跟代码埋点还是区别不大。也就是用一个系统来实现手动插入代码埋点的过程。  
>方案有Mixpanel、TalkingData、诸葛IO、腾讯MTA，Sensors AnalyticsV1.3+等

可视化埋点通常流程为
>输入页面的url =>
页面加载完成后 =>
配置可视化的工具 =>
点击创建事件（click） =>
进入元素选择模式 =>
用鼠标点击页面上的某个元素（例如button、a这些element）=>
就可以在弹出的对话框里面 =>
设置这个事件的名称（比如叫TEST），选上报数据属性（properties）=>
保存配置 =>
用户访问点击按钮 =>
>数据上报

### 3.无埋点
无埋点并不是说不需要埋点，而是全部埋点，前端的任意一个事件都被绑定一个标识，所有的事件都别记录下来。通过定期上传记录文件，配合文件解析，解析出来我们想要的数据，并生成可视化报告供专业人员分析因此实现“无埋点”统计。  
从语言层面实现无埋点也很简单，比如从页面的js代码中，找出dom上被绑定的事件，然后进行全埋点。  
>Heap、百度（点击猴子）、GrowingIO等

优点：由于采集的是全量数据，所以产品迭代过程中是不需要关注埋点逻辑的，也不会出现漏埋、误埋等现象  
缺点：无埋点采集全量数据，给数据传输和服务器增加压力,无法灵活的定制各个事件所需要上传的数据
