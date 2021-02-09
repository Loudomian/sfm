---
title: 自发光
author: NUA努努
---

谢邀，人在航母，刚下蒙古。

在更新vmt科普之前呢，
首先骂一句起源引擎哈：
真垃圾！就算要我努努饿死，从这跳下去！我也不会用你起源引擎做自发光！

诶，真香嘿！兄弟你也来做吧！

澄清一点，之前那篇 .vmt 科普里面有很多错误，多到数不清了，所以建议看一下说明就ok了，当作一个工具帖，如果你想做 .vmt 的话还是推荐来看这个 .vmt 进阶系列，我会一个个说明一下这些参数如何工作。

先说一下自发光把！

## 自发光参数不发光

自发光参数：

```
$ selfillum <bool>
```

起源的自发光引擎更合适的叫法应该是 “无明暗” （blender里的无明暗）：无视任何光线效果，包括 hdr地图光，也包括灯光 Light，最终的效果是强制着色为贴图原本的颜色，就是在 Vtfedit 或者 Photoshop 里看到的效果，是什么颜色就显示什么颜色，所以基本上没啥用，我确实想不到禁用光照有什么用处？

看一下效果啊

![](https://pic.downk.cc/item/5ec259a5c2a9a83be58b60d0.png)

左图是不打光，右侧是打光，可以明显看到即使不打光的情况下模型也会特别的亮

下面是部分参数写法

```
	$selfillum 1 //无明暗
 	$selfillummask "cold\white"//（自发光）的贴图
```

![](https://pic.downk.cc/item/5ec259a5c2a9a83be58b60d6.png)

其中的white就是一张纯白色的图片，用来提供白色光，给自身着色，但是不会影响其他地方的模型，因为本身没产生光源

![](https://pic.downk.cc/item/5ec259a5c2a9a83be58b60dd.png)所以如果用这个参数制作发光效果，还需要用到自己建的一个光，打在旁边。效果如下

![](https://pic.downk.cc/item/5ec259a5c2a9a83be58b60e3.png)

如果你觉得这个光实在太亮了，要调整的话只能通过修改贴图的颜色或者亮度才能达成目的，**经测试，其他参数都没有用，只有这个办法。只要加了其他参数，此效果就会失效**

下面测试使用测色自发光贴图：

![](https://pic.downk.cc/item/5ec259a5c2a9a83be58b60cb.png)哇，这也太赛博朋克了。

要说明的一点，这个贴图是根据UV分布的，所以很实用吧。

Cold 佬说：这个自发光参数适合于各种霓虹灯模型，但唯一缺点就是无法对附近模型产生影响。

所以相当于一个无明暗的贴图叠加吧，因为其他函数一使用就必定卡 Bug 导致效果失效。**确实会失效，而且在 .vmt 显示青色的参数是根本不会起作用的参数**

![](https://pic.downk.cc/item/5ec259abc2a9a83be58b79a3.png)

### 总结
$selfillum是开关

$selfillummask是自发光的贴图


## 假的自发光

使用 Detail 参数外加 Detailblendmode 5 或 6 可以使模型看起来是自发光，

其中 Detail 参数的二级能用在这里的只有：

```
$detail "cold\white" //texture
  $detailscale 1 //same as size of diffuse? 用于对准UV!
  $detailblendfactor 1 //lower values make less visible
  $detailblendmode 5 //6 also works
  $color 10//模型本身亮度（无光地图则无光）
```
这里面最重要的是 $detailblendmode这个参数，看一下说明：

> 5 = 未点燃的添加剂细节纹理的颜色与模式1相同地添加到基本纹理，但是此颜色不受光照的影响，因此看起来会发光。
>
> 6 = 未点燃附加阈值淡入这将添加不受模式5照明影响的颜色，但首先会根据混合因子是高于还是低于0.5来修改以两种模式添加的颜色。

其次是这个混合因子 $detailblendfactor 1
这个参数的值是个浮点值，从0到1.0，但是这个值控制的效果只根据上面那个参数控制，比如模式6里面说的低于0.5来修改两种模式添加的颜色，说的不很清楚，我也没测试这个，感觉用处不大，默认值是1.0，加不加都可以。

再之后是 $detailscale 这个参数
这个参数的效果是将 Detail 贴图的比例跟 Basetexture 的贴图比例同化，也就是说如果两张贴图像素大小相同的话就可以把 Detail 的贴图对齐UV，（这里说这个的原因是因为，Detail 函数本身用于细节，会把贴图平铺在模型表面，所以加上这个参数就可以对齐UV了）

最后说的是最简单的$detail，后面跟的就是贴图路径了。
在 Detialblendmode 为5的情况下黑色会自动无视，白色变为发光部分。


那看一下效果：

![](https://pic.downk.cc/item/5ec259abc2a9a83be58b79a8.png)

没有用的参数：$detailtint


## 下面是官方说的 Envmap 假冒自发光<Badge text="测试失败" type="error"/>

这个我测试时候使用了方形白色贴图写到了envmap的参数里，但是没有效果，连基础的envmap效果也没有。

所以这个应该只能识别六面的起源hdr贴图，还没有试，后面可能会试试吧。精力不足啊！

所以，这个自发光的函数确实不太给力啊。

## 成果展示

通过打光啊，改写 .vmt 啊，最终实现了一个落地灯。

![](https://pic.downk.cc/item/5ec259abc2a9a83be58b79ad.png)

说一下我的思路哈，首先发亮的部分用第一个或者第二个方法模拟它自己本身的亮度，然后再打一个小光模拟它照明的基座之类的东西。
下面是vmt写法：

``` js
"VertexlitGeneric"
{
  //基础贴图-法线贴图-反射贴图
  "$basetexture" "cold\WoodLight\pic1"
  "$bumpmap" "cold\WoodLight\pic1_n"
  //冯氏高光
  $phong 1
  $basemapalphaphongmask//使用$ basetexture的Alpha通道，可以同步透明部分？
  $phongexponent "10"//硬度-int
  $phongboost "2"//亮度-float-0-1
  $phongalbedotint "1"//允许高光贴图有颜色属性附到反照率
   $phongexponenttexture "cold\WoodLight\pic1_m"//高光贴图(硬度贴图)
   //fake self-illum//可以使用假的自身发亮
  $detail "cold\WoodLight\pic1" //texture
  $detailscale 1 //same as size of diffuse? 用于对准UV!
  $detailblendfactor 1 //lower values make less visible
  $detailblendmode 5 //6 also works
  //$detailtint [255 1 1]//无影响
  $color 5
  //可以解决阴影问题
  $AmbientOcclusion 0//浮点型 ssao开启程度
```

然后是放一下网络原图：
::: details
![](https://pic.downk.cc/item/5ec259abc2a9a83be58b79b9.png)
:::

::: tip 
参考 [Valve开发者论坛 Glowing Textures](https://developer.valvesoftware.com/wiki/Glowing_Textures#.24selfillum_textures)
:::
