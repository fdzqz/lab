这是学院一个科研团队（数据与决策工程重点实验室）的官网，主要功能是展示研究团队的基本情况、成员介绍等等。

## 使用技术

### 前端
使用了React来搭建View层，但是没有做成单页应用，每个页面单独构建，并使用了React-router来管理路由。

### 后台
使用Express作为后台框架，MongoDB作为数据库。

## 项目总结
- webpack的配置问题
- 异步管理的解决方案
- React的坑与好处
- React-router的实现原理
- Express项目结构的搭建思考
- MongoDB的设计和使用问题
- 怎么将Node项目部署到Linux服务器上

## 笔记总结

- ES6入门
- 基于的Ajax交互方法及异步管理（总结一套异步管理的方法）
- Webpack入门以及与Grunt和Gulp等构建工具间的比较
- React使用、特性及实现原理
- React、Vue与Ng等框架的特性比较
- React-router使用及实现原理
- Flux与Redux的使用方法及特性对比（本次没用到，先不管）
- React面试题整理
- 前端模块化方案的探讨
- Node特性分析
- Node核心机制
- Node面试题整理
- Express与MongoDB入门及使用
- [**Express路由设计~**](https://github.com/fdzqz/lab/blob/master/book/Express%E8%B7%AF%E7%94%B1%E8%AE%BE%E8%AE%A1.md)
- HTTP入门及面试题整理
- 如何在CentOS搭建Node服务器
- Linux入门（系统安装、目录结构、基本命令和软件安装）

## 项目记录

1 React的事件绑定中```this.eventName```和```this.eventName.bind(this)```的区别。

2 React使用refs获取元素。

3 JSON.stringify方法使用错误。

4 路由程序没有接受到Post过来的数据-是由于没传到应用程序中，原因使用fetch的同源策略没有设置好，这个后面要注意！！！[（同源策略和跨域处理）](https://segmentfault.com/q/1010000006136735?_ea=1026530)

5 后台程序获取前端数据的方法
- GET方法：req.query
- POST方法：req.body
- 路由参数（如user/:id)：req.params

6 Express重定向：想要登录成功后重定向到后台页（使用res.redirect()），结果不能实现。
：使用redirect方法后返回304，但是如果状态码除了是301和302外浏览器都不会自动重定向(要先去了解一下重定向的原理)，后面通过redirect把状态码设置301/302并没有成功。返回304时是把文档也下载下来了。