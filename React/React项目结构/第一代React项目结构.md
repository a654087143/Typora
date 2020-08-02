## 第一代前端项目架构，以迎新、离校、公寓、缴费为代表

* 特点：

  1、接近React原生应用形态；

  2、二次封装的antd组件未抽离成独立组件库

  ![image-20200714220758853](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200714220758853.png)

* <a href="E:\东西\微服务\东西\React项目结构\babel\babel之配置文件.babelrc.md">.babelrc</a>

  * **1. 什么是babel? 它是干什么用的？**

      ES6是2015年发布的下一代javascript语言标准，它引入了新的语法和API，使我们编写js代码更加得心应手，比如class，let,for...of promise等等这样的，但是可惜的是**这些js新特性只被最新版本的浏览器支持，但是低版本浏览器并不支持，那么低版本浏览器下就需要一个转换工具，把es6代码转换成浏览器能识别的代码，babel就是这样的一个工具**。可以理解为 babel是javascript语法的编译器。

  * 总结：es6通过babel文件，将es6语言转换成浏览器能识别的语言。

  

* <a href="E:\东西\微服务\东西\React项目结构\webpack.config.js\webpack.config.js.md">webpack.config.js</a>
  
  * 每个目录下都必须有一个webpack.config.js，它的作用就好比Gulpfile.js、或者 Gruntfile.js，就是一个项目配置，告诉webpack需要做什么。
  * 还有配置devServer，开发路径，可以指向本地项目或部署好在服务器上的服务。
    * ![image-20200714223557407](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200714223557407.png)

* **package.json**
  * scripts：npm命令的一些配置
  * devDependencies：项目的依赖包可以放置这里。
    * ![image-20200714224633147](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200714224633147.png)



* **Dockerfile**
  * 配置docker容器运行的一些参数
    * ![image-20200714231431051](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20200714231431051.png)

* **nginx.conf**
  * 负载均衡的一些参数，dockerfile读的就这里，用来替换基础镜像的配置文件