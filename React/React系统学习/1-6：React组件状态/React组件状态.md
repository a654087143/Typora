# React状态



![image-20200804230219120](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804230219120.png)

#### 1.基础模板（返回当前时间）

* ![image-20200804230322660](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804230322660.png)
* ![image-20200804230422569](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804230422569.png)
* ![image-20200804230410737](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804230410737.png)

#### 1.1 动态返回当前时间 （错误示范）

* 每秒调用一次类组件
  
  * ![image-20200804230455938](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804230455938.png)
* 以为拿到最新状态时间后，给到 render 渲染出来。
  
* ![image-20200804230603810](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804230603810.png)
  
* ##### 时间根本没动态改变

  * ![image-20200804230824767](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804230824767.png)



###  1.3 为什么重复调用组件，没有刷新状态

* 1. 在 setInteval() 打印时间看看，是有每秒刷新

  * ![image-20200804231109990](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804231109990.png)
  * ![image-20200804230943895](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804230943895.png)

* 2.在状态里面打印时间，第13行代码，是没有刷新的，只调用了一次

  * ![image-20200804231402870](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804231402870.png)
  * ![image-20200804231307820](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804231307820.png)

* 1.3这里如果是函数返回组件的话是可以刷新时间的，因为函数里面没有状态。但是类组件有状态，是不能刷新状态的。

  * ![image-20200804231515780](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804231515780.png)

#### 2.重复渲染组件，状态不变原因

* 主要React 是为了增加性能，重复调用组件的话，他会以为前一次和当前次调用的组件是一样的，然后构造函数和状态是一致的，所以在state 里面重新获取时间是没用的，React 不会重新初始化构造函数里面的东西 。要靠setState 来调用 diff 函数（要当前类函数的所有setState完，才会调用 diff 函数），当前 setState 完的状态值对比旧的虚拟 dom， 发现对比后有变化，才会改变。
* 1.在渲染函数 render 里面输出，是会动态跟着组件调用的次数来输出的
  * ![image-20200804232214441](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804232214441.png)
  * ![image-20200804232227272](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804232227272.png)

- 2.所以在渲染函数 render 里面这么写是可以动态加载时间的
  - ![image-20200804232300408](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804232300408.png)
  - ![image-20200804232517414](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804232517414.png)
  - ![image-20200804232527021](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804232527021.png)



#### 3.正常动态获取当前时间的写法 （生命周期）

- 1.不建议循环类组件类获取动态时间，这样会把 setInterval 和 ReactDom、Clock 组件耦合在一起，是我们不乐意见到的，因为我们更新时间和 ReactDom、Clock 完全是没关系的，更新时间是组件里面自发性的操作
  - ![image-20200804232621238](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804232621238.png)
- 2.我们只想见到的是组件里面更新时间，利用生命周期函数来触发某个时间点的函数。（错误）
  - ![image-20200804233022734](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804233022734.png)

### 使用 setState 的原因

3.setState才能改变状态，主要React 是为了增加性能，重复调用组件的话，他会以为前一次和当前次调用的组件是一样的，然后构造函数和状态是一致的，所以在state 里面重新获取时间是没用的，React 不会重新初始化构造函数里面的东西 。要靠setState 来调用 diff 函数（要当前类函数的所有setState完，才会调用 diff 函数），当前 setState 完的状态值对比旧的虚拟 dom， 发现对比后有变化，才会统一的去Dom修改。

- ![image-20200804235752231](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804235752231.png)

- 4. setState前后输出时间，旧版React 是不一样的，新版是一样的。新版 set 完就改变了。

  - ![image-20200804235410617](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200804235410617.png)



### props和state区别

![image-20200913130522117](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\React组件状态.assets\image-20200913130522117.png)

![image-20200913130439115](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\React组件状态.assets\image-20200913130439115.png)



#### 点击事件函数注意

* 用 e 的时候，输出，可以看到有多个属性，但是发现 target 是null。因为这里使用的是代理的模式，要真的在代码里面写了 e.target 才会直接代理了 target 的对象，才有值。 用 e 的话，就等于只代理了 e 的对象，里面的属性没值。
  * ![image-20200805000248700](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200805000248700.png)
  * ![image-20200805000314826](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200805000314826.png)

* 用 e.target 代理可以获取当前控件
  * ![image-20200805000035893](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200805000035893.png)
  * ![image-20200805000347746](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200805000347746.png)
* 设置索引， 获取索引
  * ![image-20200805000423971](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200805000423971.png)
  * ![image-20200805000435666](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200805000435666.png)
* 调用函数的时候没有绑定 this 的话，没资格setState
  * ![image-20200805000620637](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200805000620637.png)
* 只要在构造函数给 click 函数重新等于一个绑定了 this 的函数就行了，或者使用箭头函数也行 clickEvent () =>{ }
  * ![image-20200805000730090](E:\东西\微服务\东西\React\React系统学习\1-6：React组件状态\Untitled.assets\image-20200805000730090.png)