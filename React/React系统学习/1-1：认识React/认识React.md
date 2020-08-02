### 认识React

1. react 6大特点

- ![image-20200802153314543](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802153314543.png)

2. 创建 React 项目

   1. 学习调试时候，可以用引用 js的方式来，然后就可以在html使用了
      1. ![image-20200802153527197](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802153527197.png)

   2. 通过react的脚手架，创建项目进行开发，部署
      1. 利用 npm 安装并启动
      2. ![image-20200802160717157](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802160717157.png)
      3. 安装脚手架
         1. ![image-20200802160734940](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802160734940.png)
      4. 利用 create-react-app 命令创建 helloword项目
         1. ![image-20200802160812597](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802160812597.png)
      5. 进入helloword 目录 ，启动项目
         1. ![image-20200802160630577](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802160630577.png)
         2. ![image-20200802161043714](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802161043714.png)
   3. 项目结构
      1. 程序主页面，所有 react 组件都绑定在 root这个 div上
         1. ![image-20200802161140391](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802161140391.png)
      2. 核心文件 src/index.js
         1. ReactDOM.render(<App />, document.getElementById('root'));  //把 App 组件绑定在 root div 上，jsx语法糖。
         2. serviceWorker.unregister();代表有内容需要缓存的，它会帮你缓存起来，一般不用可以注释掉。
            1. ![image-20200802161523632](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802161523632.png)
      3. App组件
         1. function App (){} 函数式组件 
         2. return 一个页面。
         3. import React 的作用是因为页面用了函数式的 jsx。
            1. ![image-20200802161840445](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802161840445.png)
         4. 把组件导出去，别的地方才能调用
            1. ![image-20200802162012086](E:\东西\微服务\东西\React\React系统学习\1-1：认识React\认识React.assets\image-20200802162012086.png)