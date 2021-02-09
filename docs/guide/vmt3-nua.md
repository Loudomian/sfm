---
title: 冯氏高光
author: NUA努努
---





这个高光这个以前从来没有仔细研究过，感觉云里雾里，现在突然觉得这个参数简直是模型救星！

首先解释一下这个冯氏高光是个啥：

> 冯氏光照模型是由三部分组成，一个是环境光，一个是漫射光，还有一个就是镜面光。冯氏光照模型的提出主要就是为了去做出光照效果来影响物体的表面的颜色的。冯氏模型阐述了镜面光的计算依赖于观察者的观察方向和反射光向量之间的夹角，所以下面就会去去简单的介绍下镜面光的概念。高强度的镜面光趋向于它所照射的表面上形成一个亮点，也就是镜面亮点。这个镜面两点的应用的话，其实就好比现实世界中总是存在金属的，金属看上去具有金属光泽，会有一个亮点，其实我们的镜面光就是去模拟这个效果的。镜面反射可以使反射光线沿指定路径反射,常常用于聚光、增强亮度。
> [冯氏光照模型-作者rv0p111](https://blog.csdn.net/ZCMUCZX/article/details/79683263)

## 没看懂吧，下面上个图就懂了
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7bc2a9a83be5bcf085.png)
看到中间那个光晕了没，那个就是高光，这是blend中的冯氏高光效果
高光的参数有三个：1、颜色-贴图。2、硬度。3、强度。
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7bc2a9a83be5bcf088.png)
为了方便看，我用了279的blend引擎，可以明显看到上面的白色，中间的强度，下面的硬度。

分别说一下：
### 1、贴图-颜色
这个影响的是高光的颜色
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7bc2a9a83be5bcf08b.png)
若我改了颜色则效果就是
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7bc2a9a83be5bcf08f.png)
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7bc2a9a83be5bcf081.png)
有点那味了是吧，我再上个贴图
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7fc2a9a83be5bcf65e.png)
那么投射出来的高光就是贴图了，跟那种防盗水印似的。
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7fc2a9a83be5bcf661.png)
随你的视角变化


### 2、强度
这是1.0
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7fc2a9a83be5bcf663.png)
0.5
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7fc2a9a83be5bcf666.png)
0.1
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a7fc2a9a83be5bcf66b.png)强度变小，越来越淡

### 3、硬度
硬度一般默认为50 （此时强度1.0）
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a83c2a9a83be5bcfc9f.png)
硬度20
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a83c2a9a83be5bcfca1.png)
可以看到硬度变小，就是材料变软了光晕明显变大了
如果调到3      （1是最小值）
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a83c2a9a83be5bcfca4.png)
光晕就会变得巨大，如果此时在加上较弱的强度，那么质感就有了
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a83c2a9a83be5bcfca6.png)

白光不明显，加上贴图
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a83c2a9a83be5bcfcab.png)
**啊，跑题了**
这里只是简单介绍一下关于冯氏高光的知识点，下面进入正题！！！

## SFM中的冯氏高光
先上vmt：有用的参数

```python
 //冯氏高光
 $phong 1
  $basemapalphaphongmask//使用$ basetexture的Alpha通道，可以同步透明部分？
  $phongexponent "50"//硬度-int
  $phongboost "1.0"//亮度-float-0-1
  $phongalbedotint "1"//允许高光贴图有颜色属性附到反照率
  $phongexponenttexture "cold\mm"//高光贴图(硬度贴图)
  $phongfresnelranges "[0.05 0.5 1]"//菲涅尔
  //"$phongwarptexture"  "cold\mm3"//翘曲
```
上个对比图
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a87c2a9a83be5bd02d1.png)
硬度：
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a87c2a9a83be5bd02c3.png)
#### 说明
这里要说明一点，虽然$ phongboost 亮度是取值0-1.0但是仍然可以取值超过1.0甚至取到10.0都是可以的，着色器仍然正常工作！亮度越大，你就越感觉那个光发油！油腻腻的感觉！
然后就是$ phongexponent 硬度只要是大于等于1的整数都可以，硬度越小，高光的光晕约大，硬度越大，高光的光晕越小。小硬度模拟磨砂、布料，大硬度模拟金属、玻璃。

如果你搞一个1.5硬度加50亮度的模型，那么效果就很有意思了

效果图暂时找不到了，本来想上传一个吃鸡男性角色那个
那个就是油腻腻的皮肤，其实是个反例嗷


### 二、高光贴图

来说一说

```python
  $ phongalbedotint "1"
//允许高光贴图有颜色属性附到反照率
```

这个如果不开的话，高光贴图的颜色根本不会应用到模型上，相当于

```python
 $phongexponenttexture "cold\mm"
 //高光贴图(硬度贴图)
```

这个参数的开关了
那么高光贴图又是干啥用的？
还是上图：
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a87c2a9a83be5bd02c6.png)
看见丝袜上的小纹路了没，那个就是高光贴图的效果，这个高光贴图只会用于高光反射光。如果不打光的话，那这些根本看不到的。
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a87c2a9a83be5bd02ca.png)
高光贴图相当于一个高光下的细节纹理了。
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a87c2a9a83be5bd02cc.png)
这里提一嘴：高光贴图与法线贴图同时使用的话更配哦（提一嘴：$ ssbump参数可以自动通过高光图生成法线图）。可以加深效果。
如果此时环境中有很多光，那么效果爆炸！

哦对了，顺便提一嘴：各位看到这个丝袜的高光特别细没，一般高光就是一个点亮，这个是一长条都亮，明显是用了菲涅尔效果，关于更多菲涅尔效果的说明也会在以后讲！

**关于做高光贴图我会单开一个文章讲，先欣赏一下高质量模型~**
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a8bc2a9a83be5bd0974.png)



 **优秀案例：**



![在这里插入图片描述](https://pic.downk.cc/item/5ec37a8bc2a9a83be5bd0978.png)
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a8bc2a9a83be5bd097d.png)

### 三、翘曲参数
这个就很有意思了，这个参数官方都没怎讲！
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a8bc2a9a83be5bd0983.png)
就这么一嘴，我就自己搞了一会，给整明白了
我在昨天更新了vmt科普的帖子，里面新加了个lightwarptexture参数，那个参数的效果是基础的反照率的效果，可以是基础贴图的光发生改变，贴图是个一维色带，可是$ phongwarptexture参数用的是二维色带！而且效果用于高光反射！
我自己搞出的效果如下：
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a8bc2a9a83be5bd0971.png)
左边是我用的贴图，右边是效果！你会发现本来应该照在模型上均匀衰减的光强变成了一道道的同心圆
原因就在于，默认的翘曲贴图应该是从左到右，从黑到白渐变，可是我加上的贴图发生了变化，
从左到右依次是黑白黑白来回变化，所以光照也发生了变化，可以理解成从左到右是一系列坐标，坐标对应的是光照强度对应的效果！

所以，我又尝试了彩色贴图：
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a94c2a9a83be5bd17a1.png)
于是我发现了新大陆。

但实际上这个效果并不是这么用的，请看工坊大佬做的猫女皮衣效果：
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a94c2a9a83be5bd17a4.png)
发现没有？先不说由法线贴图+高光带来的效果，看它的反光！

这不就是我一直苦苦在寻找的--模拟环境光反射吗？之前有个苦恼，只要一使用envmap，那么phong高光直接跟你说再见，二者不兼容啊，那我想给高光加上环境信息那还有可能吗？
答案当然是，响屁吃！吃响屁！sfm还反射环境，还光追，追你妹。
所以这个作者很机智的使用了一个翘曲参数模拟环境光！
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a94c2a9a83be5bd17a6.png)
看到名字没，softcube
soft是柔软变化，cube即为envmap的cube_map的cube，意思是立方体，也就是环境盒，
作者明显是想用这个蓝黄色调的图片模拟环境光！效果也很明显！
![在这里插入图片描述](https://pic.downk.cc/item/5ec37a94c2a9a83be5bd17a8.png)
（ps：其实我这里说错了，其实作者用的应该是lightwarp，但是这两个warp实现的效果类似，差不多的，你也可以吧warp贴图放在phong上，但是很可能会出现小小的问题啦，就比如白光照射只反射蓝光什么的，所以建议两个warp参数同时使用啊！）

参考文献：[valve开发者论坛](https://developer.valvesoftware.com/wiki/)

