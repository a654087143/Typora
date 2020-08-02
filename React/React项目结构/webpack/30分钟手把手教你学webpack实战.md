## [30分钟手把手教你学webpack实战](https://www.cnblogs.com/tugenhua0707/p/4793265.html)

https://www.cnblogs.com/tugenhua0707/p/4793265.html

**阅读目录**

- [一：什么是webpack? 他有什么优点？](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe0)
- [二：如何安装和配置](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe1)
- [三：理解webpack加载器](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe2)
- [四：理解less-loader加载器的使用](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe3)
- [五：理解babel-loader加载器的含义](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe4)
- [六：了解下webpack的几个命令](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe5)
- [七：webpack对多个模块依赖进行打包](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe6)
- [八：如何独立打包成样式文件](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe7)
- [九：如何打包成多个资源文件](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe8)
- [十：关于对图片的打包](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe9)
- [十一：React开发神器：react-hot-loader](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labe10)

[回到顶部](https://www.cnblogs.com/tugenhua0707/p/4793265.html#_labelTop)

什么是webpack? 他有什么优点？

  首先对于很多刚接触webpack人来说，肯定会问webpack是什么？它有什么优点？我们为什么要使用它？带着这些问题，我们来总结下如下：

  Webpack是前端一个工具，可以让各个模块进行加载，预处理，再进行打包，它能有Grunt或Gulp所有基本功能。优点如下：

1. 支持commonJS和AMD模块。
2. 支持很多模块加载器的调用，可以使模块加载器灵活定制，比如babel-loader加载器，该加载器能使我们使用ES6的语法来编写代码。
3. 可以通过配置打包成多个文件，有效的利用浏览器的缓存功能提升性能。
4. 使用模块加载器，可以支持sass，less等处理器进行打包且支持静态资源样式及图片进行打包。
5. 更多等等。。。带着这些问题我们慢慢来学习webpack。