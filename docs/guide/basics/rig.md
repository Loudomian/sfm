---
title: Rig
---

Rig 中文译名索具，即装配船帆的索具。在 Source Filmmaker 里，它的定义与 Skeleton（骨架）相同，只不过不一样的说法，类似 Blender 的 Armature 。

在 Source Filmmaker 的模型右键后会出现 Rig 一词的多子级按钮，这是用于更换当前模型的骨架的唯一方法。

而 Rig 又可以分为 FK Rig（默认/正向动力学骨架）、IK Rig（反向动力学骨架）、Animations Rig（动画骨架）通过阅读本指南你可以了解到三种骨骼的特性与实操效果。

::: tip 提示
你可以通过[ [这里](/repertory/scripts.html#rig) ]找到各种 Rig 的下载与介绍。
:::
## FK Rig（默认/正向动力骨架）

这种骨架就是最基础最普通的骨架，子级骨骼无法影响父级骨骼，适用于做静图，不适用于做动画，因为静图追求动作的稳定摆放，所以会产生巨大的工作量。

![](https://ae01.alicdn.com/kf/HTB1uUehT3HqK1RjSZFPq6AwapXaj.jpg)

## IK Rig（反向动力骨架）

IK Rig 常用作于做动画，它的特性是子级可以影响父级，或是特定父级可以控制一定的子级，如：手部可以控制整个手臂的移动，盆骨控制身体主干移动却不会改动手部脚部。

### 如何使用

在 Source Filmmaker 中，右键你想使用 IK Rig 的模型 > Rig 选择对应的 IK Rig ，等待几秒的卡顿后，初始的 FK Rig 就会变成 IK Rig 。

::: tip 插曲
在 Source Filmmaker 中 IK Rig 有通用和限定的区分并储存在 ```/script``` 中，很多 SFMLab 模型作者会储存完全适配自己模型的 IK Rig ，正常命名为 ```rig_biped_``` 模型名字 ，通用的 IK Rig 可以点击这里（还没写）。

IK Rig 有两种骨骼适配：```bip_``` 和 ```ValveBiped_``` 两种，根据模型骨骼命名前缀区分选中哪种 IK Rig 。
:::

::: warning 小问题
使用通用 IK Rig 后，可能会出现修改手指部分时,软件卡顿，属于正常现象。

可以通过将目前片段缩减到10秒或使用 [Auto-Rigger](/guide/advanced/auto-rigger.md) 制作独立 IK Rig 解决。
:::

![](https://ae01.alicdn.com/kf/HTB1jEihT3HqK1RjSZFPq6AwapXaZ.jpg)

![](https://ae01.alicdn.com/kf/HTB1wXKjT3HqK1RjSZFEq6AGMXXaH.jpg)

### 效果

角色动作摆布将会更加方便。

![](https://ae01.alicdn.com/kf/HTB1ZgSqT4jaK1RjSZFAq6zdLFXap.jpg)

## Animation Rig（动画骨架）

动画骨架自带了一系列的循环动画序列，相当于动画预设。

### 如何使用

替换 Rig 的流程与 IK Rig 的流程相同，但会在一旁多出一个骨架，此刻你已经无法通过模型本身的骨架去控制模型了，要用新的骨架进行控制。

::: tip 插曲
模型的 Flex 和 视觉目标 依旧要到模型本身的视图去进行操作。
:::

![](https://ae01.alicdn.com/kf/HTB1ksKkTVzqK1RjSZFCq6zbxVXa0.jpg)

#### 使用序列动画

右键带有 Host 结尾命名的模型动画集 > Import > Sequence

![](https://ae01.alicdn.com/kf/HTB1Qx1eT9zqK1RjSZFjq6zlCFXaj.jpg)

打开的新窗口即内置的动画序列，选择你想要的动画序列后点击 Open 。

![](https://ae01.alicdn.com/kf/HTB1Ib9jT3HqK1RjSZFEq6AGMXXa9.jpg)

之后动画就加载到人物身上，可以通过曲线编辑器进行操作。

![](https://ae01.alicdn.com/kf/HTB1Gb5jT3HqK1RjSZFEq6AGMXXaJ.jpg)

## 结语
    
上面就是三种 Rig 的介绍与特性，你可以通过右键模型 > Rig > Detach Rig > Detach All 删除替换效果。

![](https://ae01.alicdn.com/kf/HTB1BeidTY2pK1RjSZFsq6yNlXXaz.jpg)