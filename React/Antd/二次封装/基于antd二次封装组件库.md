# 基于antd二次封装组件库

附件下载：[基于antd二次封装组件库.zip](https://links.jianshu.com/go?to=https%3A%2F%2Ffile.yocoder.cn%2FarticleAccessory%2F%E5%9F%BA%E4%BA%8Eantd%E4%BA%8C%E6%AC%A1%E5%B0%81%E8%A3%85%E7%BB%84%E4%BB%B6%E5%BA%93.zip)

Ant Design是蚂蚁金服提供的一个优秀的react组件库，npm上包名为antd。文档详细、使用简单，节省了react开发的大部分时间。antd提供的是通用组件，而针对特定的业务场景，我们可以进一步封装，提高开发效率

## 修改antd组件库名为yoantd

1. 从github上下载Ant Design源码
2. 将antd改成自己的包名，我的是改成yoantd

- 修改文件夹名字为yoantd，修改package.json文件里的包名、版本号、描述等信息

- 在site/bisheng.config.js文件里找到webpackConfig，配置别名，将antd改成yoantd。加了这个配置之后，

  ```
  import { Button } from yoantd
  ```

  就不会从node_modules导入，而是从components导入

  ![img](https:////upload-images.jianshu.io/upload_images/15059580-2ae97041c249a9ff.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

  修改别名

1. 添加antd依赖，经过上面第2步的操作后，工程里已经依赖不到antd了，因为源码本身是通过别名引用了自身的components，而在第2步中把别名改成了yoantd

- 使用命令`npm install --save antd`添加依赖

- 在site/theme/template/Layout/index.jsx里导入antd.css

  ![img](https:////upload-images.jianshu.io/upload_images/15059580-da392dad16ea9218.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

  添加antd依赖

## 删除一些不用的东西

经过以上3个步骤后，成功的将antd改名为yoantd，已经可以发布到npm了，但是很多东西我们是不需要的，可以删除

1. 删除components下的所有组件，只留下style文件夹
2. 删除site/theme/static/template.html里对index-1.css、index-2.css、common.js的引用，因为这3个文件不存在，引用的话启动后console会报错
3. 删除docs/react文件夹，这个文件夹下放的是我们不需要的一些介绍文档
4. 删除页面头部、底部

- 删除site/theme/template/Layout/index.jsx里的Header
- 删除site/theme/template/Home/index.jsx里的Footer
- 删除site/theme/template/Content/MainContent.jsx里的Footer

1. 删除CHANGELOG.zh-CN.md里的antd更新日志

## 添加一个组件

你应该很熟悉这样的一个场景，点击删除按钮时，弹出确认框，点击确认才会真正的调用删除接口。针对这个场景，我们可以对Button组件进行扩展，当type="del"时，点击删除时直接弹出确认框

1. 在components下新建`button-plus`文件夹（组件开发只需要关注components一个文件夹，工程里的其他文件都可以无视）

- index.tsx --> 导出组件
- button-plus/index.tsx  --> 组件入口
- button-plus/index.zh-CN.md  --> 说明文档
- button-plus/demo/ --> 写demo，组件是使用样例

1. 编写组件、说明文档、demo、更新日志，具体可以下载附件查看

## 修改主页（启动后默认打开的页面）

1. 在site/theme/template/Redirect.jsx文件里插入一条配置，将首页指向更新日志



```csharp
const redirect = {
  '/index-cn': '/changelog-cn',
  ...
}
```

1. 修改site/theme/index.js的`index-cn`路由组件为`redirectTmpl`



```bash
  childRoutes: [
      ...
      {
        path: 'index-cn',
        component: redirectTmpl,
      }
      ...
]
```

## 启动工程

1. 使用命令`npm install`下载依赖

2. 使用命令

   ```
   npm start
   ```

   启动工程

   ![img](https:////upload-images.jianshu.io/upload_images/15059580-4026faeba8ad5331.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

   启动工程

## 发布到npm

1. 修改package.json里的scripts，执行`npm publish`命令时会先执行`npm run prepublish`，改成下面这样，发布前先编译打包



```bash
"prepublish": "antd-tools run dist && antd-tools run compile"
```

1. 具体的发布步骤可以参考下面这篇文章
    https://www.jianshu.com/p/2698b10c4c9f



作者：_刘家强
链接：https://www.jianshu.com/p/1b7ae88ec2fc
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。