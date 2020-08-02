详细：https://www.cnblogs.com/tugenhua0707/p/4793265.html



### **3. 配置webpack**

每个目录下都必须有一个webpack.config.js，它的作用就好比Gulpfile.js、或者 Gruntfile.js，就是一个项目配置，告诉webpack需要做什么。

如下是我的webpack.config.js代码如下：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "build/build.js"
  },
  module: {
    loaders: [
       //.css 文件使用 style-loader 和 css-loader 来处理
      { test: /\.css$/, loader: "style!css" },
      //.js 文件使用 jsx-loader 来编译处理
      { test: /\.js$/,    loader: "jsx-loader" }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: []
};
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

**entry** 是页面中的入口文件，比如我这边的入口文件时main.js

**output:** 是指页面通过webpack打包后生成的目标文件放在什么地方去，我这边是在根目录下生成build文件夹，该文件夹内有一个build.js文件；

**resolve:** 定义了解析模块路径时的配置，常用的就是extensions; 可以用来指定模块的后缀，这样在引入模块时就不需要写后缀，会自动补全。

**plugins:** 定义了需要使用的插件，比如commonsPlugin在打包多个入口文件时会提取公用的部分，生成common.js;

**module.loaders：**是文件的加载器，比如我们之前react需要在页面中引入jsx的js源码到页面上来，然后使用该语法，但是通过webpack打包后就不需要再引入JSXTransformer.js；看到上面的加载器；比如jsx-loader加载器就是代表JSXTransformer.js的，还有style-loader和css-loader加载器；因此在使用之前我们需要通过命令把它引入到项目上来；因此需要如下命令生成下；

jsx-loader加载器 **npm install jsx-loader --save-dev** 如下：

![img](https://images2015.cnblogs.com/blog/561794/201509/561794-20150908220321215-1214366069.png)

Style-loader加载器 **npm install style-loader --save-dev** 如下：

![img](https://images2015.cnblogs.com/blog/561794/201509/561794-20150908220358669-1701729615.png)

css-loader 加载器 **npm install css-loader --save-dev** 如下：

![img](https://images2015.cnblogs.com/blog/561794/201509/561794-20150908220433059-1255280636.png)

局部安装webpack 执行命令：npm install webpack --save-dev

![img](https://images2015.cnblogs.com/blog/561794/201509/561794-20150908220455215-439366299.png)

