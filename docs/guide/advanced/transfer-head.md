---
title: 给模型换头
---

## 第一步 

打开 Source Filmmaker ，并载入地图和两个模型（左A右B）
我们的目的是让A的头换到B身上。

![](https://ae01.alicdn.com/kf/HTB1aWekT7PoK1RjSZKbq6x1IXXaz.jpg)

我们先对 A 进行操作，将他的 Pelvis 骨骼（简称P骨）加一个缩放。

![](https://ae01.alicdn.com/kf/HTB1YH1cT4TpK1RjSZR0q6zEwXXap.jpg)

缩放到这样就差不多了。

![](https://ae01.alicdn.com/kf/HTB1HjWeT4TpK1RjSZFKq6y2wXXav.jpg)

## 第二步

接着我们处理 B 我们修改的是他的 Head 骨骼（简称头骨）    

![](https://ae01.alicdn.com/kf/HTB1nOKqTZfpK1RjSZFOq6y6nFXai.jpg)

然后缩放到最小。

![](https://ae01.alicdn.com/kf/HTB1eTehT6TpK1RjSZKPq6y3UpXa0.jpg)

## 第三步

通过P骨进行移动将 A 的整个模型放到 B 的头部。

![](https://ae01.alicdn.com/kf/HTB1Z9LBa2c3T1VjSZPfq6AWHXXa8.jpg)

然后给 A 的 Neck 骨骼（简称N骨）加一个缩放。

![](https://ae01.alicdn.com/kf/HTB1__KiTYrpK1RjSZTEq6AWAVXaz.jpg)

仔细调整P骨和头骨之间的比例。

![](https://ae01.alicdn.com/kf/HTB1tK5dTYvpK1RjSZPiq6zmwXXaY.jpg)

## 第四步

通过P骨进行移动进行微调，让模型看上去浑然一体。

![](https://ae01.alicdn.com/kf/HTB1dmGdT9zqK1RjSZFjq6zlCFXaV.jpg)

## 第五步

::: danger 重点
请仔细查看相关操作，不要跳步骤！
:::

将 B 模型的 Neck 骨骼 拖动到 A 模型的 Pelvis 骨骼。

![](https://ae01.alicdn.com/kf/HTB1SbqmTVzqK1RjSZFvq6AB7VXah.jpg)

然后你可以点掉 A 模型前面的小箭头，隐藏掉 A 模型的骨骼。

![](https://ae01.alicdn.com/kf/HTB1qrWCT5LaK1RjSZFxq6ymPFXaD.jpg)

## 结语

现在 A 模型的头就已经可以用 B 模型的骨骼操控了。

![](https://ae01.alicdn.com/kf/HTB1mfmgT7voK1RjSZFDq6xY3pXat.jpg)

::: tip 小提示
如果移动骨头发现 A 的身体露了出来，你可以通过缩小 A 模型的P骨，放大N骨来调节比例。
:::