# vae-home

基于原生微信小程序开发的社交app，聊天，动态，仿vae+，可供开发者学习和了解原生小程序开发，***仅供学习参考使用***。

# 您可以收获到

- 组件化思想
- 项目目录划分
- 小程序的基本开发模式
- 自定义导航栏
- 文字无限滚动组件的封装
- 等等

# 项目展示

首页：
<br>
<img src="https://github.com/phk422/vae-home/blob/main/assets/proto-img/vaehome.png?raw=true" width="300px" />
<img src="https://github.com/phk422/vae-home/blob/main/assets/proto-img/vaehome2.png?raw=true" width="300px" style="margin-left: 15px;" />

圈子：
<br>
<img src="https://github.com/phk422/vae-home/blob/main/assets/proto-img/circle.png?raw=true" width="300px" />

发现：
<br>
<img src="https://github.com/phk422/vae-home/blob/main/assets/proto-img/find.png?raw=true" width="300px" />

消息：
<br>
<img src="https://github.com/phk422/vae-home/blob/main/assets/proto-img/message.jpg?raw=true" width="300px" />

我：
<br>
<img src="https://github.com/phk422/vae-home/blob/main/assets/proto-img/profile.jpg?raw=true" width="300px" />

# 项目目录结构

```
├─assets                 静态文件目录，用于存放图标/资源图等
│  ├─img                 项目图标
│  │  ├─dynamic
│  │  ├─find
│  │  ├─message
│  │  ├─navbar
│  │  ├─opr-img
│  │  └─tabbar
│  ├─proto-img           原型图，来自vae+ app 截图，这里推荐一波vae+ app, 因为一个人，爱上一群人！
│  └─vaeimg              资源图片，有时间的话写个接口
├─components             项目公共组件
│  ├─dynamic             动态组件
│  ├─icon-text
│  ├─menu-group
│  │  └─menu-item
│  ├─navbar
│  ├─scroll-txt
│  ├─swiper-img
│  ├─title-bar
│  └─vae-board
├─pages                  项目所有界面
│  ├─circle              圈子
│  ├─find                发现
│  ├─index               首页
│  │  └─cpns             首页组件抽取
│  │      └─navbar       首页导航栏
│  ├─message             消息
│  └─profile             我的
└─utils                  项目工具包目录
```

## 如果你觉得不错，记得给个star!

> 文档后续还会进一步完善，其他功能正在开发中~
