---
title: 音频格式
---

SourceFilmmaker 支持的声音文件格式范围非常有限——只有一种。

不兼容的格式导致的问题可以让 SourceFilmmaker 无响应到无法控制音频的输出。换句话来说，格式不对，可以导入，但是肯定会出现问题。

你的音频文件必须是 **16位PCM格式的.wav文件** ，频率为 **44100Hz** (虽然 11025 和 22050Hz 也可以使用，但效果并不理想)。其他任何格式都不能保证有效。

同时，由于某种原因，SourceFilmmaker 无法处理冗长的音频文件，无论其格式是否正确。将音频文件切成较短的片段，然后导入SourceFilmmaker。

::: theorem 实例帮助
最稳的还是单声道22050Hz

然后后期

然后依然可能会闪退
::: right
来自 wy
:::

## 详细格式

格式：WAV

采样值：44100/22050/11025Hz

位深度：16位

长度：30秒/段

你可以通过使用 [Adobe Audition](https://baike.baidu.com/item/Adobe%20Audition/6782463?fr=aladdin) 进行修改

## 导入

当你修改好后，你需要将 .wav 文件放到指定位置才能被 SourceFilmmaker 识别。

举例：SourceFilmmaker\game\usermod\sound\XXX

（usermod可改为同类素材库路径，如 workshop 或指定文件夹）（XXX可有可无）

## 使用

打开 SourceFilmmaker 后，在 片段编辑器 的 Timeline 下滑，找到 Music。

![](https://img.imgdb.cn/item/6028b764d2a061fec7c562a2.jpg)

右键音轨 > Add Clip to Track 选择你要的音频。

![](https://img.imgdb.cn/item/6028b77ad2a061fec7c56d50.jpg)

这时，你的音轨就会多了一个音频。

![](https://img.imgdb.cn/item/6028b791d2a061fec7c57ae5.jpg)