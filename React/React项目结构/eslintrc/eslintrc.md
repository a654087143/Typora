# [在React项目中添加ESLint](https://www.cnblogs.com/lyraLee/p/11982208.html)

### 1. 安装eslint

```
npm install eslint --save-dev
// 或者
yarn add eslint --dev
```

### 2. 初始化配置文件 

```
npx eslint --init //进入问题配置页面
```

![img](https://img2018.cnblogs.com/i-beta/893654/201912/893654-20191212180716844-204354697.png)

选择Airbnb会自动安装react相关的插件，包含eslint-plugin-react-hooks。

### 3.在VSCode的Extensions中安装Eslint

![img](https://img2018.cnblogs.com/blog/893654/201912/893654-20191204120115998-1641106135.png) 

 从插件说明中可知这个插件的默认配置文件位置：

![img](https://img2018.cnblogs.com/blog/893654/201912/893654-20191204120318484-888718986.png)

它会默认查找当前工作目录下的根文件夹下的.eslintrc.*或者.eslintrc文件。即第2步生成的文件， 按照该文件的配置内容进行代码校验。

### 4. 错误分析

如果ESLint在VSCode中未起作用。根据上面的步骤分析可知有两个方向错误

#### 1. VSCode未安装ESLint

#### 2. 配置文件有问题

 即当前工作目录下的根文件夹下找不到配置文件。

 1）配置文件名称错误。如： .essslintrc.js

 2）配置文件正确且在当前项目的根文件夹下，但是，当前项目不是当前工作目录。

![img](https://img2018.cnblogs.com/blog/893654/201912/893654-20191204121926177-709846863.png) 

如图所示，当前工作目录是当前项目的父文件夹，VSCode会到React下查找配置文件，查找失败！

解决该问题的办法：

1）将当前项目作为当前工作目录。

✅推荐使用这种。这样不需要额外配置。

![img](https://img2018.cnblogs.com/blog/893654/201912/893654-20191204124722348-1498558601.png)

2）修改VSCode中ESLint查找配置文件的位置。

```
Code->Perference(首选项)->settings(配置)
```

![img](https://img2018.cnblogs.com/blog/893654/201912/893654-20191204123614952-1820969912.png)

在配置文件中添加ESLint插件的配置文件路径：

```
// ❌不推荐使用，这样之后的所有项目都需要重新配置
{
   "eslint.options": {"configFile": "/Users/lyralee/Desktop/MyStudy/React/webpackdemo/.eslintrc.js"},
   // ...其他的配置
}
```

###  5. 细节注意

#### 1. 动态import校验

 