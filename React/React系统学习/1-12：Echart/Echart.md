#### Echart



1. 安装echart
   1. ![image-20200820214119677](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820214119677.png)
2. 导入
   1. ![image-20200820214149418](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820214149418.png)

3. 给一个div ，id标识map
   1. ![image-20200820214337772](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820214337772.png)

4. 生命周期：组件更新完毕后，echart就能初始化id=map的元素了。
   1. ![image-20200820214652952](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820214652952.png)
5. echart的一些option配置
   1. ![image-20200820214830737](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820214830737.png)

6. 一些数据
   1. ![image-20200820214918159](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820214918159.png)



7. 展示，地图还是没显示，是因为还要下载一个地图的插件
   1. ![image-20200820215143263](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820215143263.png)

8. china.js
   1. ![image-20200820215329503](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820215329503.png)

9. 直接在主页面入口引入js，因为不是npm安装的，不能import，迎新用到的身份证机的js估计也要这样导入
   1. ![image-20200820215717200](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820215717200.png)

10. echart没有加载
    1. ![image-20200820215829373](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820215829373.png)
11. 找到install 的 echart，扔到public 和china.js一个位置
    1. ![image-20200820215919016](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820215919016.png)
    2. ![image-20200820220009676](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820220009676.png)

3. ![image-20200820220054842](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820220054842.png)

12. echart 加载成功，样式报错
    1. ![image-20200820220122148](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820220122148.png)
    2. 设置样式
       1. ![image-20200820220219227](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820220219227.png)
       2. ![image-20200820220300641](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820220300641.png)
13. 加载出一点
    1. ![image-20200820220331998](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820220331998.png)

14. componentDidMount
    1. ![image-20200820220551577](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820220551577.png)
    2. ![image-20200820220606186](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\Echart.assets\image-20200820220606186.png)

https://www.cnblogs.com/demodashi/p/10492708.html