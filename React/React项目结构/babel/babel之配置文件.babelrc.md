## [深入浅出的webpack构建工具---babel之配置文件.babelrc](https://www.cnblogs.com/tugenhua0707/p/9452471.html)

详解

https://www.cnblogs.com/tugenhua0707/p/9452471.html

**阅读目录**

[一：理解 babel之配置文件.babelrc 基本配置项](https://www.cnblogs.com/tugenhua0707/p/9452471.html#_labe1_0)

[二：在webpack中配置babel](https://www.cnblogs.com/tugenhua0707/p/9452471.html#_labe1_1)



## 一：理解 babel之配置文件.babelrc 基本配置项

**1. 什么是babel? 它是干什么用的？**

  ES6是2015年发布的下一代javascript语言标准，它引入了新的语法和API，使我们编写js代码更加得心应手，比如class，let,for...of promise等等这样的，但是可惜的是这些js新特性只被最新版本的浏览器支持，但是低版本浏览器并不支持，那么低版本浏览器下就需要一个转换工具，把es6代码转换成浏览器能识别的代码，babel就是这样的一个工具。可以理解为 babel是javascript语法的编译器。

**2. Babel编译器**
在Babel执行编译的过程中，会从项目的根目录下的 .babelrc文件中读取配置。.babelrc是一个json格式的文件。
在.babelrc配置文件中，主要是对预设(presets) 和 插件(plugins) 进行配置。.babelrc配置文件一般为如下：

```
{
  "plugins": [
     [
      "transform-runtime",
      {
        "polyfill": false,
        "check-es2015-constants",
        "es2015-arrow-functions",
        "es2015-block-scoped-functions",
        // ...
      }
     ]
   ],
   "presets": [
     [
       "env",
       {
         "modules": false
       }
     ],
     "stage-2",
     "react"
  ]
}
```

**2.1 plugins**
该属性是告诉babel要使用那些插件，这些插件可以控制如何转换代码。



**3.1 理解 babel-preset-env**

比如：

**babel-preset-es2015: 可以将es6的代码编译成es5.**
**babel-preset-es2016: 可以将es7的代码编译为es6.**
**babel-preset-es2017: 可以将es8的代码编译为es7.**
**babel-preset-latest: 支持现有所有ECMAScript版本的新特性。**





## 二：在webpack中配置babel

在上面了解了babel后，现在我们需要知道如何在webpack中使用它了。由于babel所做的事情是转换代码，所有需要使用loader去转换，因此我们需要配置babel-loader。

在安装babel-loader之前，我们需要安装babel-core， 因为babel-core是Babel编译器的核心，因此也就意味着如果我们需要使用babel-loader进行es6转码的话，我们首先需要安装 babel-core, 安装命令如下即可：

```
npm install --save-dev babel-core
```

然后我们再安装 babel-loader, 命令如下：

```
npm install --save-dev babel-loader
```

接着我们需要安装 babel-preset-env, babel-plugin-transform-runtime, babel-preset-stage-2, 如下命令安装

```
npm install --save-dev  babel-preset-env babel-plugin-transform-runtime babel-preset-stage-2
```

因此 .babelrc 配置如下即可：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
{
  "plugins": [
     [
      "transform-runtime",
      {
        "polyfill": false
      }
     ]
   ],
   "presets": [
     [
       "env",
       {
         "modules": false
       }
     ],
     "stage-2"
  ]
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

在做demo之前，我们还是先看下目录结构变成如下：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
### 目录结构如下：
demo1                                       # 工程名
|   |--- dist                               # 打包后生成的目录文件             
|   |--- node_modules                       # 所有的依赖包
|   |--- js                                 # 存放所有js文件
|   | |-- demo1.js  
|   | |-- main.js                           # js入口文件
|   |
|   |--- webpack.config.js                  # webpack配置文件
|   |--- index.html                         # html文件
|   |--- styles                             # 存放所有的css样式文件                              
|   |--- .gitignore  
|   |--- README.md
|   |--- package.json
|   |--- .babelrc                           # babel转码文件
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

因此webpack配置中需要添加 babel-loader 配置，如下配置：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 排除文件
        loader: 'babel-loader'
      }
    ]
  }
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

webpack 所有配置如下代码

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
const path = require('path');
// 提取css的插件
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ClearWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './js/main.js',
  output: {
    filename: 'bundle.js',
    // 将输出的文件都放在dist目录下
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  },
  mode: 'development',
  module: {
    rules: [
      {
        // 使用正则去匹配要用该loader转换的css文件
        test: /\.css$/,
        loaders: ExtractTextPlugin.extract({
          // 转换 .css文件需要使用的Loader
          use: ['css-loader']
        })
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: '[name].[ext]'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/, // 排除文件
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    // modules: ['plugin', 'js']
  },
  externals: {
    jquery: 'jQuery'
  },
  devtool: 'source-map',
  plugins: [
    // new ClearWebpackPlugin(['dist']),
    new ExtractTextPlugin({
      // 从js文件中提取出来的 .css文件的名称
      filename: `main.css`
    })
  ]
};
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

package.json 安装依赖包如下：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
{
  "name": "demo1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server --progress --colors --devtool source-map --hot --inline",
    "build": "webpack --progress --colors"
  },
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-2": "^6.24.1",
    "clean-webpack-plugin": "^0.1.19",
    "css-loader": "^1.0.0",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "file-loader": "^1.1.11",
    "path": "^0.12.7",
    "style-loader": "^0.21.0",
    "uglifyjs-webpack-plugin": "^1.2.7",
    "url-loader": "^1.0.1",
    "webpack": "^4.16.1",
    "webpack-cli": "^3.0.8",
    "webpack-dev-server": "^3.1.4"
  },
  "dependencies": {
    "axios": "^0.18.0",
    "jquery": "^3.3.1"
  }
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

现在我们继续在 main.js 代码内 编写 Generator 函数，代码如下：

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

```
function* g() {
  yield 'a';
  yield 'b';
  yield 'c';
  return 'ending';
}

var gen = g();
console.log(gen.next()); // 返回Object {value: "a", done: false}

for(let a of [1,2,3,4]) {
  console.log(a); // 打印出 1, 2, 3, 4
}
```

[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0);)

然后重新运行打包命令 npm run dev 后，打开浏览器运行 可以看到控制台输出 {value: "a", done: false}，说明babel已经转译了。