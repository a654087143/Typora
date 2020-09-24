# 函数式编程 react优化 之装饰器模式

![img](https://csdnimg.cn/release/blogv2/dist/pc/img/original.png)

[fire-fire-fox](https://me.csdn.net/wangrong111222) 2018-06-30 22:56:15 ![img](https://csdnimg.cn/release/blogv2/dist/pc/img/articleReadEyes.png) 1675 ![img](https://csdnimg.cn/release/blogv2/dist/pc/img/tobarCollect.png) 收藏

版权

https://blog.csdn.net/wangrong111222/article/details/80870410

首先来说下 装饰器模式；

装饰器模式（Decorator Pattern）允许向一个现有的对象添加新的功能，同时又不改变其结构。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。

就是一个函数，经过包装 增强了 原有的功能； 并且还是原来的函数名字； 但是其实已经增强过了。就像一个人 ，穿了一层机甲， 就像钢铁侠一样。。。我是个漫威迷。



```
//定义基础函数
function Stark  () {
    console.log("是的 我就是托尼·史塔克（Tony Stark）,钢铁侠（Iron Man）");
}
//定义包装方法，并且把原有的函数入进去
function IronMan(fn) {
    //增加一个返回 封装 加强 
         return  function(){
             console.log("准备穿上我的铠甲")
             fn();
             console.log("我已经变成了钢铁侠,正带领复仇者联盟拯救世界")
         }
}
// 把原来的函数内存地址替换；
Stark=IronMan(Stark);
//调用增强过的函数
Stark();
```



得到结果

准备穿上我的铠甲
是的 我就是托尼·史塔克（Tony Stark）,钢铁侠（Iron Man）
我已经变成了钢铁侠,正被带领复仇者联盟拯救世界

这样我们就得到了一个 穿上了战甲的 史塔克，不再是一个普通人，可以去和神抗争了；



下面 我们来说下关于装饰器在react中的应用---高阶组件（ HOC） 

a higher-order component is a function that takes a component and returns a new component.

其实react 组件从根本上来说是一个函数；所以react算是是函数式编程；（编程分为函数式编程和面向对象编程）

HOC分为 两种模式；

1，属性代理  包裹组件 增强组件 将原有的 组件props和现有的组件props进行融合；

2，反向继承 React组件继承了被传入的组件，所以它能够访问到的区域、权限更多，相比属性代理方式，它更像打入组织内部，对其进行修改。



属性代理HOC------钢铁侠 ； 



```
//创建 Stark
class Stark extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            是的 我就是托尼·史塔克（Tony Stark）,钢铁侠（Iron Man）
        </div>)
    }
}
//定义 增强功能的函数 把组件入参
function IronMan(Component) {
   //定义 包装组件
    class IronManComponent extends React.Component{
        constructor(props){
            super(props)
        }
        render(){
            //把传入的组件的props展开，这样就能把所有的窜见来props 继承过来
            return(<div>
                <Component {...this.props} />
                <p>现在我已经是钢铁侠了，准备打败灭霸</p>
            </div>)
        }
    }
    //返回包装加强后的组件
    return IronManComponent
}
// 把原来的组件内存地址替换，下面已经调用过了；
Stark=IronMan(Stark);
```





这样就实现了高阶组件



不过这样写还是麻烦点

es6 有专门的 修饰器符号 @ 

这样 我们可以定义一些 专门的高阶函数类在外部，需要包装的时候就引入 这些函数

比如这里的高阶函数就是IronMan；

引入以后 直接



```
//创建 Stark //紧贴着class这行去 @ ，后面不能有 '；' 之类的特殊字符，就完成了 高阶组件的封装  
@IronMan 
class Stark extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            是的 我就是托尼·史塔克（Tony Stark）,钢铁侠（Iron Man）
        </div>)
    }
}
```

这样就实现了简单的高阶组件 



![img](https://img-blog.csdn.net/20180630230052640?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dhbmdyb25nMTExMjIy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)



反向继承HOC------金刚狼； 

如果说属性代理是像 外部的增强， 反向代理更像是 深入自己身体内部的改造；很像是金刚狼的故事。

洛根被X武器工程绑架进行改造实验，骨骼表面被覆盖了一层艾德曼金属，从此成为高效的[杀人机器](https://baike.baidu.com/item/杀人机器)，也就是有名的十号武器—Weapon X。



```
//定义 基础组件
class Wolverine extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log("我只想安静的生活")
    }
    render(){
        return(
            <div>
                我是洛根 ，一名雇佣兵。
            </div>
        )
    }
}

//定义 深入内部的反向继承函数 ，并且深入内部去修改原有的方法；
const WeaponX=(Component)=>{
    return class  WeaponXComponent extends  Component{
        //深入内部去修改原有的方法；
        componentDidMount(){
            console.log("啊，不好，我被改造了")
        }
        render(){
            return(<div>
                <Component/>
                <p>我现在被改造为了杀人机器---WeaponX</p>
            </div>)
        }
    }
};
//执行 改造
Wolverine=WeaponX(Wolverine);
```

然后就变成反向继承 组件了；同样可以使用@符号