
### quasar-ssr-demo

> 测试id：**5433d5e4e737cbe96dcef312**

### Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:xxxx
$ quasar dev -m ssr
```

### 一、Prerendering（预渲染）  
采用技术：prerender-spa-plugin + vue-meta-info   
适用场景：用来改善少数营销页面（例如 /, /about, /contact 等）的 SEO，非动态seo的情况下。  
问题：如果需要动态seo，所以需要异步获取数据，才能去修改 title，keywords，description，但由于搜索引擎爬虫抓取工具并不会等待异步完成后再行抓取页面内容



### 二、SSR(服务端渲染)
#### 1、什么是服务器端渲染(SSR)？
Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。

#### 2、与 SPA (单页应用程序 (Single-Page Application)) 相比，服务器端渲染 (SSR) 的优势：
	1、更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。
	2、更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。
#### 3、SSR渲染原理
![VSR原理图](https://cloud.githubusercontent.com/assets/499550/17607895/786a415a-5fee-11e6-9c11-45a2cfdf085c.png)
从上图可以看出，构建SSR，需要准备两个入口文件，一个给服务端使用，一个给浏览器使用。    
通过webpack打包后，生成vue-ssr-server-bundle.json, vue-ssr-client-manifest.json，js，css等等文件。  
node服务端 判断当前路由是否有SSR钩子函数即asyncData，有的话执行asyncData去获取后端接口数据，拿到数据存储在服务端store里，并生成html页面，同时将接口返回的数据注入window.__INITIAL_STATE__到html中，再由客户端存储到客户端store里，并且服务端通过读取vue-ssr-client-manifest.json，在html里自动注入资源链接(asset links)。html生成完后，交给客户端合成（激活）。


#### 4、使用服务器端渲染 (SSR) 时还需要有一些权衡之处：
	1、开发条件所限，对一个现有项目进行SSR改造，浏览器特定的代码，比如window，等在node环境下提示    
	  ReferenceError: window is not defined，需要在服务端生命周期钩子外执行，
	   一些外部扩展库 (external library) 需要特殊处理，才能在服务器渲染应用程序中运行。
	2、涉及构建设置和部署的更多要求，需要处于 Node.js server 运行环境
	3、更多的服务器端负载。

#### 5、SSR方案
1、vue-server-renderer（Vue官方SSR方案）

2、nuxt.js   
一种vue.js通用应用框架，预设了利用Vue.js开发服务端渲染的应用所需要的各种配置。
特点：   
* 基于 Vue.js   
* 自动代码分层   
* 服务端渲染    
* 强大的路由功能，支持异步数据    
* 静态文件服务    
* ES6/ES7 语法支持    
* 打包和压缩 JS 和 CSS    
* HTML头部标签管理    
* 本地开发支持热加载   
* 集成ESLint    
* 支持各种样式预处理器： SASS、LESS、 Stylus等等     
* 支持HTTP/2 推送        
服务端渲染流程图：    
![nuxt.js完整渲染流程图](https://zh.nuxtjs.org/nuxt-schema.svg)   
3、Quasar Framework 
Quasar是一款允许开发人员编写代码一次，并使用相同的代码库同时部署为网站，手机应用，Electron应用的开源框架，其中网站包含SSR，SSR+PWA，SPA等。         
其中SSR也是封装Vue-srr，向外提供配置，开箱即用功能。

4、node + 动态页面模板。  
单独抽离SEO页面出来开发，如产品详情页，在node服务端，将数据给到模板渲染出来后返回给客户端。

#### 6、SSR方案比较
| 方案名  		   |优势 | 劣势 |
|:--------------------- |:---------------:| :-------------:|
| vue-server-renderer   |      |      对现有代码改动大，现有项目需降级，适应vue-ssr，改造过程，将遇到配置复杂等未知问题   |
| nuxt.js             |     平滑开箱即用，配置丰富  | 对现有代码改动大  | 
| Quasar Framework        | 平滑开箱即用       |     对现有代码改造大，且ssr功能较nuxt.js稍少，且只支持ie11+         |
| node + 动态页面模板        |      对现有代码改动量一般    |   需重新开发seo页面的代码，为风格统一，公共部分代码需维护两份，维护起来麻烦。|# vue-quasar-demo
# vue-quasar-demo
