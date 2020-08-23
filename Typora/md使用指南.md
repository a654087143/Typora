# Markdown上手指南

## 前言

markdown 是一门很实用的标记语言，若是有HTML 基础学起来会非常快。

演示效果均是从[typora](https://www.typora.io/) 展示的,为什么用它，因为它是一个成熟的 md 编辑器！

- markdown 所见即所得, 部分还增加了人性化的交互(比如代码高亮)
- 支持公式
- 支持大部分的拓展语法
- 支持主流的流程图渲染

**温馨提示:**

已经会的不用往下面看了,文章的目的是给我们研发组的小伙伴快速上手的。

因为前端这块的文档基本切换到MD来维护，花了点时间录制了一波GIF演示



## 基础语法

基础语法是支持度最高的,市面上主流的 markdown 解析器基本都支持。

拓展语法需要借助不同的插件或者库实现,通用性没那么强。

**注意点** : 所有标记仅支持英文模式(半角)！！



### 标题

```markdown
# H1
## H2
### H3
#### H4
##### H5
###### H6
123456
```

![2019-12-11 11.19.10.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTI2ZDFmZTlk?x-oss-process=image/format,png)

### 文字强调



#### 粗体

```markdown
**我是粗体**
1
```

![2019-12-11 11.25.40.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTI2ZjBjMTJh?x-oss-process=image/format,png)



#### 粗体

```markdown
_我是斜体_
*我也是斜体*
12
```

![2019-12-11 11.26.17.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTI0MjY5ODYx?x-oss-process=image/format,png)

#### 着重强调(粗体+斜体)

```markdown
***我着重的强调,再哔哔我嫩死你***
1
```

![2019-12-11 11.38.08.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTI2ODIxZDYw?x-oss-process=image/format,png)



### 列表



#### 有序列表

有序列表的格式是: 数字小数点+空格+文本

```markdown
1. afdslf
2. fsadfae
3. Ewarewr
123
```

![2019-12-11 11.29.24.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTI4NDFmYTA5?x-oss-process=image/format,png)



### 无序列表

格式: 横线(星号) + 空格 + 文本

```markdown
- asdklfjsaf 
- fasdfsadf 


* 发水电费卢卡斯
* 发顺丰惹我
123456
```

![2019-12-11 11.33.56.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTJjOTM2ZjEx?x-oss-process=image/format,png)



### 列表混合及嵌套

不管是有序列表还是无序列表,都支持多级嵌套，也支持有序无序列表混用。

若是增加一些外部扩展，还支持todo混入

```markdown
- 测试啊
  - 真的测试啊
  - 你不信啊
    1. 我是三级有序列表
    2. 呵呵哒
  - 唉
123456
```

![2019-12-11 11.57.09.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTRlZTA3ZTQx?x-oss-process=image/format,png)



### 外部链接

格式：方括号小括号(链接)

```markdown
[点击我就跳到百度了](https://www.baidu.com) 
1
```

![2019-12-11 11.51.50.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTUwNmZkMWY0?x-oss-process=image/format,png)

### 图片引用展示

格式：感叹号+外部链接的格式。 链接支持相对引用！

```markdown
![closeup photo of computer code screengrab](https://images.unsplash.com/photo-1524666643752-b381eb00effb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)
1
```

![2019-12-11 11.55.22.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTUwNzMzZDg1?x-oss-process=image/format,png)



### 水平分割线

格式: 空行 —

```markdown
呼叫逗比

---

逗比回应你了
12345
```

![2019-12-11 12.00.06.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTUyZWM4OTcz?x-oss-process=image/format,png)

### 引用

一般你引用了别处的内容，这个就可以用上了

格式： 大于号(>) + 空格 + 内容

```markdown
>床前明月光
>
>疑是地上霜
>
> - 这是**李白**的诗歌 
12345
```

![2019-12-11 13.41.43.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTUzNTM3Zjg3?x-oss-process=image/format,png)



### 行内代码

行内代码的效果通用都是灰色,不能针对语法高亮

格式：反引号+内容+反引号

```markdown
`module.exports= ()=>{}`
1
```

![2019-12-11 12.02.41.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTU1MDIzNjE4?x-oss-process=image/format,png)



## 拓展语法



### 表格

表格的语法也很简单，就是写的多一些，因为列越多写的越多。

默认的列左对齐,也支持设置居中和右对齐, 横杆大于等于3， 列的竖必须闭合才能代表一列！

- 默认对齐(左对齐) : `:----`
- 居中对齐 : `:---:`
- 右对齐: `---:`

```markdown
| 默认左对齐     |       居中对齐       |     右对齐 |
| :--- | :------------------: | -------: |
| 啊水电费萨德 | 阿斯顿六块腹肌阿斯顿 | 发水电费 |
| 1321 | 432 | 654645 |
| 啊水电费萨德 | 阿斯顿六块腹肌阿斯顿 | 发水电费 |
| 1321 | 432 | 654645 |


12345678
```

[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-MbUY8gE8-1576062450902)(https://user-gold-cdn.xitu.io/2019/12/11/16ef47716e4aac10?w=864&h=237&f=gif&s=71560)]



### 代码高亮

代码高亮看采用的是什么高亮库了,比如前端这块有用highlightjs 或 prism的。
所以高亮支持语言也得看高亮库是否支持！！

```markdown

```

我是纯文本 plain text，因为我没有指定语言

```
​```javascript
// 我是 js 高亮
import vue from 'vue';
12345
# 我是 bash 高亮
ls -l | grep 'haha'
12
```

![Kapture 2019-12-11 at 14.27.58.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9jZG4ubmxhcmsuY29tL3l1cXVlLzAvMjAxOS9naWYvMTg2MTkwLzE1NzYwNDU3MzcwODUtZjZiZTQwZTctZGEyMC00ZGYxLTk0YTYtMTUwNGQ4Nzk5NDBlLmdpZg#align=left&display=inline&height=412&name=Kapture 2019-12-11 at 14.27.58.gif&originHeight=412&originWidth=854&size=1097891&status=done&style=none&width=854)



### 任务列表

这个很实用，就是展示待办事项效果, 算是列表的变种，可以混合使用

- `- [ ] text` : 方括号内部空格代指是待办事项
- `- [x] text` : 方括号内部 x代指事项已经完成

```markdown
- v1版本
  - [x] 用户接口打通
  - [ ] 用户接口合并
    - [ ] 合并重复字段
    - [ ] 呵呵到

123456
```

![Kapture 2019-12-11 at 14.36.32.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTdhMmEwZjJl?x-oss-process=image/format,png)



### 文字高亮

格式：双等号+文本+双等号

```markdown
===听说我要呗高亮了===

==是啊==

==亮瞎眼了==
12345
```

![Kapture 2019-12-11 at 14.40.08.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTdkZGRlMTg5?x-oss-process=image/format,png)



### 脚注

这个东西在写文献用的最多

格式：

- 声明: `[^text]: description`
- 引用: `hello[^text]`

```markdown
[^李白]: 一个喝酒的诗人

床前明月光[^李白]

1234
```

![Kapture 2019-12-11 at 14.45.25.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTgyNGMzMGRk?x-oss-process=image/format,png)



### 删除线

你没看错，这不属于第一个版本的草案的内容，也是后续才有的

格式：两个波浪线+文本+波浪线

```markdown
~~我给删除了，你看~~
1
```

![Kapture 2019-12-11 at 14.52.08.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTg2ZTM5YTg4?x-oss-process=image/format,png)



### 下标

把字缩放，适合用来表现公式类的

```markdown
H~2~o
1
```

![Kapture 2019-12-11 at 14.53.46.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDc3MTg2ZDg2MzE3?x-oss-process=image/format,png)

### mermaid

mermaid 不仅仅可以画流程图,具体可以看[mermaid 上手指南](https://www.yuque.com/crper/mermaid_intro)

![image.png](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDdjOGZiNjhmNzE2?x-oss-process=image/format,png)
![Kapture 2019-12-11 at 18.07.24.gif](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMi8xMS8xNmVmNDdjOGZkYTVlYzQ5?x-oss-process=image/format,png)



## 总结

Markdown 的标准方案一直都没有更新,现在的增强大多都是依赖第三方实现。
比如更加丰富的表格功能,数学公式等等！
但是这并不能阻挡 md 流行, 随时可见的身影，代码社区，编程工具内置实现等等。
有不对之处请留言,谢谢阅读