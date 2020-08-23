# React 16.x折腾记 - (1) React Router V4 和antd侧边栏的正确关联及动态title的实现

## 前言

一如既往,实战出真理，有兴趣的可以瞧瞧,没兴趣的大佬请止步于此。

## 效果图

- 基于`antd`的`sidebar`组件封装

![img](https://user-gold-cdn.xitu.io/2018/8/9/1651e0d4524b9c3b?w=1136&h=1050&f=gif&s=1351427)

![img](https://user-gold-cdn.xitu.io/2018/8/10/16521b5810e9a9f5?w=2042&h=1404&f=gif&s=679758)

**折腾记的技术栈选型**

- `Mobx & mobx-react`(用起来感觉良好的状态管理器)
- `React 16.4.2` (从这个起步,用新不用旧)
- `React Router V4` (如上)
- `antd` (版本追求如上 , 阿里出品的UI框架)
- `styled-components` (不想写单独的样式文件,用这个是棒棒的,用过都说好)
- `webpack 4.16.5`(版本追求如上)

## 实现思路

**实现思路**

- 自行维护一份静态路由表
- 结合路由的`history`对象的`pathanme`
- 在组件渲染完毕的情况下,再去遍历路由表,通过`setState`重新渲染侧边栏
- 为什么不在组件初始化的时候就设置,那这样对于404的路由没法控制
  - `react-router-dom v4`虽然提供了全局404组件,但是`history`里面没有代表404的状态

**实现目标**

- 点击侧边栏的子菜单会改变标题,对应的item也会高亮
- 直接修改路由,初次加载等会自动展开对应的分组,高亮对应的子项
- 不匹配的路由不展开和高亮任何

**能学到啥**

我尽量注释,而收获见仁见智了

我的思路? 我的的代码姿势? 仅供参考

## 实现代码

### 基础版

- **静态路由表一份**

```javascript
export const sidebarData = [
    {
        key: 'group0',
        title: {
            icon: 'dashboard',
            text: '数据分析'
        },
        children: [
            {
                key: '1',
                text: '数据监控',
                path: '/dashboard/monitor'
            },
            {
                key: '2',
                text: '数据分析',
                path: '/dashboard/analyze'
            }
        ]
    },
    {
        key: 'group1',
        title: {
            icon: 'play-circle',
            text: '音频管理'
        },
        children: [
            {
                key: '6',
                text: '声兮列表',
                path: '/voice/sxlist'
            },
            {
                key: '7',
                text: '回声列表',
                path: '/voice/calllist'
            }
        ]
    },
    {
        key: 'group2',
        title: {
            icon: 'schedule',
            text: '活动中心'
        },
        children: [
            {
                key: '11',
                text: '活动列表',
                path: '/active/list'
            },
            {
                key: '12',
                text: '新建活动',
                path: '/active/add'
            }
        ]
    },
    {
        key: 'group3',
        title: {
            icon: 'apple-o',
            text: 'APP管理'
        },
        children: [
            {
                key: '16',
                text: '移动交互',
                path: '/appmanage/interaction'
            },
            {
                key: '17',
                text: '回声列表',
                path: '/test'
            },
            {
                key: '18',
                text: '用户列表',
                path: '/user/list'
            }
        ]
    },
    {
        key: 'group4',
        title: {
            icon: 'safety',
            text: '安全中心'
        },
        children: [
            {
                key: '21',
                text: '举报处理',
                path: '/safety/report'
            },
            {
                key: '22',
                text: '广播中心',
                path: '/safety/broadcast'
            }
        ]
    },
    {
        key: 'group5',
        title: {
            icon: 'user',
            text: '系统设置'
        },
        children: [
            {
                key: '26',
                text: '个人设置',
                path: '/user/setting'
            },
            {
                key: '27',
                text: '用户列表',
                path: '/user/list'
            }
        ]
    },
    {
        key: 'group6',
        title: {
            icon: 'info-circle',
            text: '平台设置'
        },
        children: [
            {
                key: '31',
                text: '用户协议',
                path: '/platform/license'
            },
            {
                key: '32',
                text: '帮助中心',
                path: '/platform/help'
            }
        ]
    }

];

export const groupKey = sidebarData.map(item=>item.key);


123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121122123124125126127128129130131132133134135136137138139140141142143144145
```

- sidebar

```javascript
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// antd
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const { SubMenu, Item } = Menu;
import { sidebarData, groupKey } from 'pages/Layout/SidebarData';

// Logo组件
import Logo from 'pages/Layout/Logo';
@withRouter
class Sidebar extends Component {
    constructor(props) {
        super(props);
        // 初始化置空可以在遍历不到的时候应用默认值
        this.state = {
            openKeys: [''],
            selectedKeys: [''],
            rootSubmenuKeys: groupKey,
            itemName: ''
        };
    }

    setDefaultActiveItem = ({ location }) => {
        const { pathname } = location;
        sidebarData.map(item => {
            if (item.pathname) {
                // 做一些事情,这里只有二级菜单
            }
            // 因为菜单只有二级,简单的做个遍历就可以了
            if (item.children && item.children.length > 0) {
                item.children.map(childitem => {
                    // 为什么要用match是因为 url有可能带参数等,全等就不可以了
                    // 若是match不到会返回null
                    if (pathname.match(childitem.path)) {
                        this.setState({
                            openKeys: [item.key],
                            selectedKeys: [childitem.key]
                        });
                        // 设置title
                        document.title = childitem.text;
                    }
                });
            }
        });
    };

    componentDidMount = () => {
        // 设置菜单的默认值
        this.setDefaultActiveItem(this.props);
    };

    OpenChange = openKeys => {
        console.log(openKeys);
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        console.log(latestOpenKey);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [...openKeys]
            });
        }
    };

    render() {
        const { openKeys, selectedKeys } = this.state;
        const { collapsed, onCollapse } = this.props;
        const SideTree = sidebarData.map(item => (
            <SubMenu
                key={item.key}
                title={
                    <span>
                        <Icon type={item.title.icon} />
                        <span>{item.title.text}</span>
                    </span>
                }>
                {item.children &&
                    item.children.map(menuItem => (
                        <Item
                            key={menuItem.key}
                            onClick={() => {
                                // 设置高亮的item
                                this.setState({ selectedKeys: [menuItem.key] });
                                // 设置文档标题
                                document.title = menuItem.text;
                            }}>
                            <Link to={menuItem.path}>{menuItem.text}</Link>
                        </Item>
                    ))}
            </SubMenu>
        ));
        return (
            <Sider
                collapsible
                breakpoint="lg"
                collapsed={collapsed}
                onCollapse={onCollapse}
                trigger={collapsed}>
                <Logo collapsed={collapsed} />
                <Menu
                    subMenuOpenDelay={0.3}
                    theme="dark"
                    openKeys={openKeys}
                    selectedKeys={selectedKeys}
                    mode="inline"
                    onOpenChange={this.OpenChange}>
                    {SideTree}
                </Menu>
            </Sider>
        );
    }
}

export default Sidebar;


123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121
collapsed`,`onCollapse`这些是控制侧边栏缩小的,接受的是外部的`props
```

### 拓展版思路

**举一反三,同样我们同在可以在静态路由添加鉴权,比如某个路由仅限某些用户访问!**

**这样鉴权机制可以做到很细致化,但是对应的判断逻辑也会多起来,看业务改了**

**也可以维护过渡效果,添加对应的字段,然后每次访问不同URL的时候更改过渡效果**

以上的都需要依赖状态管理器,来维护,因为涉及到不同组件的通讯,`mobx`也可以,`redux`也行，萝卜青菜各有所爱

## 答疑

- 小伙伴留言说要看我的目录如何构建的,其实和常规的搭建差不多,如下

**如何生成漂亮的目录树**

用了`tree`命令,然后我做了个`alias`组合，方便生成

```
alias gdtree="tree -I 'node_modules|dist|.git|.vscode|.DS_Store|.idea' -L 2 -a"
```

我直接写到环境文件里了, `-L`就是遍历的层级, `-a`是所有文件(包括隐藏), `-I`是正则忽略

```bash
├── .babelrc  # babel配置
├── .browserslistrc #浏览器的兼容范围
├── .editorconfig # 基础规范
├── .eslintignore # eslint忽略
├── .eslintrc # eslint 配置
├── .gitignore
├── .postcssrc.js # postcss配置
├── .prettierrc # 格式化代码的配置文件
├── README.md
├── build  # webpack的构建目录
│   ├── webpack.base.config.js # 通用的webpack配置,可以理解为common,开发和生产都依赖,比如插件等
│   ├── webpack.development.js  # 开发模式专有,热更新,反向代理啥的
│   └── webpack.production.js # 尽可能的压缩切割,抽离样式为CSS文件什么的
├── jsconfig.json # 用来映射webpack alias 的,这样vscode下才能智能提示alias的路径
├── package.json
├── public
│   ├── favicon.png
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js # 根组件
│   ├── PrivateRoute.js # 私有路由,对Route的封装
│   ├── assets # 静态资源
│   ├── components # 通用组件
│   ├── index.js # webpack的主入口
│   ├── pages # 页面组件
│   ├── services # api的封装,以及汇总地方
│   ├── store # 状态管理
│   └── utils # 公用的代码片段,比如一些函数什么的
├── tests # 存放jest单元测试的目录
│   └── union
└── yarn.lock

1234567891011121314151617181920212223242526272829303132333435
```

## 总结

公司最近打算重构整个后台管理系统，把老的两个系统整合在一起。

因为小作坊只有我一个前端开发，单打独斗的好处(bei shang)就是技术选型可以自己把握，

说做就做,用最新的`webpack4` 搭了个架子,开始折腾(因为比较新,更新依赖很容易出问题)。

等项目完毕再把脚手架放出来,估计`webpack`5都出来了…

有人肯定会说,官方有现成的`antd pro`为嘛不用，我看了跟dva高度结合,不喜欢,那就自己搭架子。

之前用`vue`和`ng`都是整个系统布局自己写一遍，这次试试用现成的侧边栏来实现

有不对之处请留言,看到会及时修正,谢谢阅读.