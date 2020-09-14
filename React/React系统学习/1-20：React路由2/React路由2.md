## React路由2



1.如果不配置路由，react只会一直进入index.js，只有一个页面。配置了路由后，可以拦截路径，跳转到指定的路由。

![image-20200914211759956](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914211759956.png)

![image-20200914212048698](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914212048698.png)





##### 重定向：<Redirect to="/admin">

到某个路径，配置的路由拦截该路径，返回路由。

* 在函数式组件里面根据前一个路由传的参数，判断重定向跳转到相应的路由。
  * ![image-20200914210439851](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\Untitled.assets\image-20200914210439851.png)	



* 前一个组件页面：写了一个 Link 点击事件，点击后跳转到 /logininfo，并且自带state参数
  * ![image-20200914212424463](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914212424463.png)



##### 配置路由：

1.可以在组件里面用 component={ ()=>(<h1>首页</h1>)} 这种方式快捷编写 jsx 信息。

2.也可以在 component = {LoginInfo} 来嵌入一个函数式组件、类式组件

3. <a href="E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\react属性之exact.md">Route 里面的 exact 标识是用来精确匹配的。</a>

* ![image-20200914210721787](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\Untitled.assets\image-20200914210721787.png)









Switch组件

1.如果不用Switch，会所有路由都匹配

![image-20200914212256702](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914212256702.png)



* ![image-20200914212014542](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914212014542.png)
* ![image-20200914211938624](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914211938624.png)

2.用Switch的话就不会所有相同的路径都匹配，只会匹配到第一个后，后面相同路径的就不匹配了。

* ![image-20200914212112327](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914212112327.png)

* ![image-20200914212134900](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914212134900.png)

* ![image-20200914212325766](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914212325766.png)

#### history 父组件跳转到子组件（父组件用history传，子组件用location接收state参数。子再用回history传，父再用location接state参数。）

1. 用点击事件来跳转路由的（history.push），可以代替 Link

* ![image-20200914213704553](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914213704553.png)



2. 父组件跳转到子组件

* ![image-20200914213754437](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914213754437.png)
* ![image-20200914213531337](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914213531337.png)

* ![image-20200914213849799](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914213849799.png)



* ![image-20200914213906520](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914213906520.png)

3. 看一下子组件的props内容

* 原来
  * ![image-20200914214030750](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914214030750.png)

* 改成
  * ![image-20200914214124750](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914214124750.png)

4. 回去父组件添加参数

* ![image-20200914214210894](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914214210894.png)

5. 信息藏在子组件的 location 里面

* ![image-20200914214305552](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914214305552.png)



6. history的各种方法
   1. ![image-20200914214539912](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914214539912.png)







#### 动态路由

1.  :id 的意思是，路径会自动匹配 / 后面无论什么样的字符都行，例如 /aac , /ass 都会自动匹配到 / 的这个路由上 

* ![image-20200914213101589](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914213101589.png)

* path 是代理路径 /:id ，url 是真实的路径 /abc
  * ![image-20200914213244451](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914213244451.png)
  * ![image-20200914213417650](E:\东西\微服务\东西\React\React系统学习\1-20：React路由2\React路由2.assets\image-20200914213417650.png)

