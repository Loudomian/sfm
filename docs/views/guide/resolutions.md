---
title: 分辨率
---

hmmm, Source Filmmaker 默认情况下是以 720P 的分辨率运行，包括**动画渲染**输出最高选项也是，你需要通过一些方法开启 1080P 甚至是更高的分辨率，本篇指南将会告诉你如何改变分辨率。
::: danger 注意
高分辨率会影响性能，建议制作时使用默认分辨率，导出动画再使用。
::: 
## 第一步

不要启动 Source Filmmaker ，右键 Steam 里的 Source Filmmaker ，点击属性。

![](https://ae01.alicdn.com/kf/HTB1dHejTZbpK1RjSZFyq6x_qFXam.jpg)

## 第二步

左下角会有一个 设置启动项 ，点击并输入 ```-sfm_resolution 1080 -w 1920 -h 1080``` 确定。

::: tip 插曲
```-sfm_resolution 1080``` 是告诉 Source Filmmaker 启动时使用 1080P ;

``` -w 1920 -h 1080``` 则是因为如果不这样写会在每次开启软件时会弹出分辨率不支持。
:::

![](https://ae01.alicdn.com/kf/HTB1OnmfT3HqK1RjSZFgq6y7JXXap.jpg)

## 结语

只要你根据上方设置，开启 Source Filmmaker 后，你便可以输出 1080P 的动画了。

如果需要更搞分辨率的话你可以修改参数。

2K ```-sfm_resolution 1440 -w 2560 -h 1440``` 4K ```-sfm_resolution 2160 -w 3840 -h 2160``` 