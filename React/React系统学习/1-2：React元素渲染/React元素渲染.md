#### React元素渲染

概念：

![image-20200802165106684](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802165106684.png)



1. 转换一下，看成React就是把一个普通js对象渲染在一个指定的 root元素上。

   1. ![image-20200802162622181](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802162622181.png)

2. 为什么这样写不会报错，因为也是 jsx 语法，生成一个普通的 js 对象元素。app是组件，h1 元素是组件的最小单位。

   1. ![image-20200802162845954](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802162845954.png)

3. 引用 h1

   1. ![image-20200802163008249](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802163008249.png)
   2. ![image-20200802163030400](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802163030400.png)

   

4. 只有一个根节点

   1. ![image-20200802163405904](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802163405904.png)
2. 所以只能写在 h1 里面
      
      1. ![image-20200802163437176](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802163437176.png)   

   

   

   ### 获取日期

   1. 1
   1. ![image-20200802163825022](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802163825022.png)
      2. ![image-20200802163737998](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802163737998.png)

   

   

   2. 2
      1. ![image-20200802163849653](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802163849653.png)
      2. ![image-20200802163804094](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802163804094.png)

   

   3. 时刻变化
      1. ![image-20200802163939780](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802163939780.png)
   
   4. element 多个元素时候太难看了，可以用括号括起来
      1. ![image-20200802164049748](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802164049748.png)

### 函数式组件写法 （主要特性是可以反复使用，一个组件=封装）

1. 函数式组件返回 element 对象，形成一个组件，改造上面代码，上面写的太乱了
   1. ![image-20200802164409578](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802164409578.png)

2. 编写一个运行组件的函数 run()，时间date 在父组件的里面传给子组件 Clock
   1. ![image-20200802164642561](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802164642561.png)

3. 调用一下run()
   1. ![image-20200802164741033](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802164741033.png)
   2. 报错，toLocalTimeString写错，是toLocaleTimeString
      1. ![image-20200802164805897](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802164805897.png)
      2. ![image-20200802164836000](E:\东西\微服务\东西\React\React系统学习\1-2：React元素渲染\React元素渲染.assets\image-20200802164836000.png)