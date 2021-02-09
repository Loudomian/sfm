---
title: 让模型富有光泽
---
这个操作会让你的模型具有汗、反光的效果。

## 第一步

打开你需要添加的模型，这里我用猎空演示。

![](https://ae01.alicdn.com/kf/HTB1h59pT4jaK1RjSZFAq6zdLFXao.jpg)

选中模型右键 Add override materials，为模型材质添加一个元素修改器。

![](https://ae01.alicdn.com/kf/HTB1LSKjT7PoK1RjSZKbq6x1IXXaB.jpg)

你可以通过点击 Show in Element Viewer 里的 Model 快速查看元素修改器。

![](https://ae01.alicdn.com/kf/HTB13gGeT5rpK1RjSZFhq6xSdXXaR.jpg)

## 第二步

在模型修改器找你想要修改的材质。

![](https://ae01.alicdn.com/kf/HTB1VYOiT3HqK1RjSZFEq6AGMXXaN.jpg)

右键选择 Add Attribute 的 float。

![](https://ae01.alicdn.com/kf/HTB1.v1eT9zqK1RjSZFHq6z3CpXaY.jpg)

并在 float 添加变量 ```$phongboost```。

![](https://ae01.alicdn.com/kf/HTB1.v1eT9zqK1RjSZFHq6z3CpXaY.jpg)

## 第三步

点开折叠找到 ```$phongboost``` 后面的 0 为变量，修改0为其他数字以达到光溜溜效果。

![](https://ae01.alicdn.com/kf/HTB19zvBa2c3T1VjSZPfq6AWHXXan.jpg)

你可以重复第二步把 ```$phongboost``` 换成 ```$phongexponent``` 以限定光溜溜的部分达到更好的视觉效果。

![](https://ae01.alicdn.com/kf/HTB1maGgT7voK1RjSZFDq6xY3pXa3.jpg)

::: tip 插曲
这种光泽叠加仅限于在有光照下起作用！没有光不行哦！玩得开心！
:::

