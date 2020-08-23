# 发布和使用自己的NPM包

附件下载：[发布和使用自己的NPM包.zip](https://links.jianshu.com/go?to=https%3A%2F%2Ffile.yocoder.cn%2FarticleAccessory%2F%E5%8F%91%E5%B8%83%E5%92%8C%E4%BD%BF%E7%94%A8%E8%87%AA%E5%B7%B1%E7%9A%84NPM%E5%8C%85.zip)

NPM(node package manager) 是NodeJs官方提供的包管理工具，让开发者可以方便地下载、安装、升级、删除依赖包。因为NPM默认的镜像源([https://registry.npmjs.org](https://links.jianshu.com/go?to=https%3A%2F%2Fregistry.npmjs.org)) 在国外，下载会比较慢，一般会使用淘宝镜像，有两种使用方式：直接修改npm镜像源、下载cnpm。推荐下载使用cnpm，保留npm默认源。通过命令`npm install -g cnpm --registry=https://registry.npm.taobao.org`安装cnpm。大部分前端开发者应该都用过`npm install`命令下载依赖包，而发布命令`npm publish`用的比较少，接下来将通过一个实例来详细介绍如何发布npm包。

## 创建一个npm项目

1. 创建一个新的文件夹并进入，本例文件夹名【yo-coder】，执行`npm init`命令初始化项目，执行命令后有一些信息要填，直接忽略，一路回车即可(后面可以修改)，最后会在文件夹下生成一个package.json文件



```json
{
    "name": "yo-coder", // 项目名称，在npm仓库中唯一
    "version": "1.0.0", // 版本号
    "description": "",  // 描述
    "main": "index.js", // 使用import yo from \'yo-coder\'导入时，yo指向的文件
    "scripts": {        // 自定义命令\r\n      \"test\": \"echo 这是一个测试命令\"
    },
    "author": "朽木",    // 作者
   "license": "MIT"     // 一种开源协议，作者只保留版权，其他的可以为所欲为
}
```

1. 写一点代码
    为了演示方便，这里就简单的创建了一个index.js文件，导出两个方法



```jsx
exports.yo = function() {
    alert('Yo Coder!')
} 
exports.hello = function() {
    alert('Hello Coder!')
}
```

## 发布到npm

1. 到 [https://www.npmjs.com/signup](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.npmjs.com%2Fsignup) 注册npm账号，如果有账号了请忽略

2. 执行命令`npm adduser`，根据提示完成登录，登录后会在~/.npmrc文件里保存身份令牌，可以把这个文件拷贝到项目里，其他人直接指定这个配置文件进行发布，不用登录

3. 执行命令`npm publish`发布

4. 在npm网站上查看发布的包信息 [https://www.npmjs.com/package/yo-coder](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fyo-coder)

   ![img](https:////upload-images.jianshu.io/upload_images/15059580-f3e3740f5d8130c6.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

   查看npm仓库

   

5. 在淘宝NPM镜像网站上查看发布的包信息 [https://npm.taobao.org/package/yo-coder](https://links.jianshu.com/go?to=https%3A%2F%2Fnpm.taobao.org%2Fpackage%2Fyo-coder)
    cnpm不会实时更新，目前的同步频率为10分钟同步一次，可以手动点击SYNC触发同步

   ![img](https:////upload-images.jianshu.io/upload_images/15059580-8d45f787624e550e.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

   查看淘宝npm仓库

   

## 下载使用npm模块，以vue为例

> 如果你已经很熟悉vue或react这些项目，忽略以下内容吧

1. 执行`npm install -g vue-cli`命令安装vue脚手架，使用`vue -V`命令验证是否安装成功

2. 执行`vue init webpack yo-coder-test`初始化vue项目，这里项目名为【yo-coder-test】，一路回车后，会自动开始下载依赖包，因为默认是从npm源下载依赖包，会比较慢，按`ctrl c`取消下载，进入目录，手动使用`cnpm install`命令下载依赖包

3. 执行`npm run dev`命令启动vue项目，浏览器打开localhost:8080查看vue的欢迎界面

4. 执行`npm install --save yo-coder`命令，执行成功后会在package.json里记录依赖的包，方便下次直接执行npm install命令下载依赖包。install命令中的--save是运行时依赖，记录在在dependencies下，比如antd、element-ui等；--save-dev是开发时依赖，记录在devDependencies下，比如webpack、eslint等

5. 使用yo-coder模块，直接在App.vue里测试，效果就是一个简单的alert

   ![img](https:////upload-images.jianshu.io/upload_images/15059580-44a66608a8419cc2.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

   测试代码



作者：_刘家强
链接：https://www.jianshu.com/p/2698b10c4c9f
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。