# Echarts关于中国地图的china.js文件下载



早上用到Echarts的中国地图map时，需要用到china.js文件，但Echarts的官网地图js下载已经暂停提供下载了，找了下，有如下链接可下载到：
1.Github地址：https://github.com/apache/incubator-echarts

2.百度云网盘(如果失效请留言，我会尽快更新)：
链接: https://pan.baidu.com/s/1j_edGU2ka9YeHBTErqDWdg 密码: ft9n

下载好后，需要在html或jsp中引入链接如下：

```
  <script type="text/javascript" src="echarts/china.js"></script> 1
```

最终效果如下：
![这里写图片描述](https://img-blog.csdn.net/20180420153512256?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjQxMzg4Nw==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

这里再说下，关于地图的主题也可以去官网下载js文件，如下载的是shine主题，以下代码引入：

```
<script type="text/javascript" src="echarts/shine.js"></script> 1
......
...
     var myChart = echarts.init(document.getElementById('main'),'shine');
...
......
```





![image-20200820221805244](E:\东西\微服务\东西\React\React系统学习\1-12：Echart\中国地图\china.js.assets\image-20200820221805244.png)