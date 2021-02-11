---
title: 初识vmt
author: NUA努努 | Loudomian
---
::: tip 
 VMT全篇作者是 NUA努努 ，你可以[通过这里](/other/donate.md#独立作者)感谢他。

 Loudomian 进行重新排版。
:::

> [**Valve 开发者社区**](https://developer.valvesoftware.com/wiki/Main_Page) 提供文献技术支持

# .vmt 是什么

- 起源引擎不直接使用textures（*纹理贴图，以下简称纹理*）。一切都通过materials（*材质，以下简称材质*）进行着色。

- 材质是可以在任何文本编辑器中创建的脚本文件（**这里指的是 .vmt**），但是建议您将Notepad ++与社区制定的语法突出显示规则结合使用。

> 这里指的是valve官方给notepad++写的自定义识别文件格式，在我分享的网盘里面有，叫vdf
:::details 漏斗悄悄话
本漏使用 Visual Studio Code 搭配商店的 Valve KeyValue Files Support 可爽了（
:::

- 为了检测您的资料，您必须将其保存在游戏或mod的\materials扩展名为的文件夹下的.vmt后缀文件。

- ~~（不做地图可以跳过）~~ 如果要为现有模块专门为地图创建材质和纹理，请考虑使用`BSPZIP \ Packbsp \ Pakrat \ Compile Pal`将材质和纹理文件打包在地图文件本身中。这样可以避免他们迷路。
>意思是用 `BSPZIP`把贴图模型打包到bsp地图里，这就是为啥有的地图文件体积特别大却完整，有的小但是经常显示紫黑格子等等问题的原因

# 语句格式：
一般情况下的 .vmt 写法如下

    LightmappedGeneric
    {
    	$basetexture coast\shingle_01
    	$surfaceprop gravel
    }

什么意思呢，换成中文：

    着色器  
    {
            $参数 值
    }

### 着色器：
|着色器|对象  |
|--|--|
| LightmappedGeneric | 笔刷 |
| VertexLitGeneric | 模型 |

我们平时做模型所用到的是后者，所以写 .vmt 时候注意一下就行了，前者不可见的！

### 参数：
然后是这个（常用的）参数：
| 参数 | 功能 |值类型|
|--|--|--|
| $basetexture | 最基础的纹理着色器 |纹理路径|
| $phong | 反射开关 |bool|
| $surfaceprop | 材质的物理属性 |物理属性|
| $envmap | 创建镜面反射 |纹理路径|
| $bumpmap | 为材质提供三维照明信息，使用凹凸贴图（也叫法线贴图） |纹理路径|
| $detail | 细节纹理（比如说衣服的布料纹理） |纹理路径|
| $selfillum | 自发光（灯或者屏幕） |bool|
| $model | 告知此材质给模型着色而不是笔刷（不必要） |bool|
| $alpha | 启用alpha通道（透明通道） |0-1浮点 |

这里简单地列出来一些顶级参数，下面会每一个参数都详细讲一下。

另外提一点，别人写的vmt里面值的部分都被引号括起来，但其实这是不必要的。
**如果需要在参数值中使用空格或制表符**，才必须用 “引号” 将整个值引起来。
:::details 漏斗悄悄话
不过通常为了美观和防止一些莫名其妙的问题，我建议你爱上打引号 XD
:::

## 类型

### 人要脸树要皮：基础纹理 $basetexture

#### 示例：

    VertexLitGeneric
    {
    	$basetexture	brick\brickwall031b
    }
    
上面的代码是最基础的vmt写法，如果只想快速转个模型的话，完全可以只写这一个参数即可，但是这肯定不完美，实际效果极为垃圾，所以下面是此参数的二级参数：
| 二级参数 | 功能 |
|--|--|
| $basetexturetransform | 变换纹理，包括移动，旋转，缩放 |
| $frame | 为多帧纹理显示的帧（动态贴图） |
| $ basetexture2 | WorldVertexTransition着色器允许使用两个贴图 |
| $basetexturetransform2 | 贴图2的变换纹理 |
上述函数sfm加载大概率会出错，所以不推荐使用，但对其他起源游戏还是可以参考的，下面写一下注意事项：

`$basetexturetransform`
默认位置是"center .5 .5 scale 1 1 rotate 0 translate 0 0"。参数修改时把此项引号内内容修改并列在vmt中。

`$frame`
为多帧纹理显示的帧。通常由AnimatedTexture或TextureToggle代理设置，但可以手动设置。该值必须是有效的索引，否则*可能发生崩溃*。（后面会说AnimatedTexture和TextureToggle）

`$basetexture2`
与$ basetexture写法相同（但只支持WorldVertexTransition着色器）。

`$basetexturetransform2`
与$basetexturetransform相同。

---

### 硬表面和真实皮肤：高光纹理 $phong
这里用到的知识是mask（蒙版）贴图知识，详细的内容可以查看相关讲解[Detail Mask二级贴图](https://blog.csdn.net/cangod/article/details/85963282)，从这篇文章中可以看到人物应用 mask 贴图后皮肤反射极为真实，但是sfm也是可以达到这种效果的（就是不太明显啦）。

![](https://img-blog.csdnimg.cn/20200317202911480.jpg)

假设已经有了一张 mask 贴图了，他的二级参数怎么写呢：
#### 例子：



    VertexLitGeneric 
    { 
    	$ phong  1
    
    	$ bumpmap 				[ texture ] 
    	$ phongexponent 			5 
    	$ phongexponenttexture 			[ texture ] 	
    	$ phongboost 				1.0 
    	$ phongfresnelranges 			“ [0 0.5 1]” 
    }

这都啥意思？你直接列代码我不懂啊！
别急嘛。
实际上 $phong 参数后接的值为 bool 格式，1 是启用的意思（ 1 为ture），默认情况下（如果不写）就为 0 或者 false ，不启用。

![](https://img-blog.csdnimg.cn/20200317203215584.jpg)

| 二级参数（蒙版） | 功能 | 值格式 |
|--|--|--|
| $ bumpmap | 带alpha通道一个的凹凸贴图充当默认的Phong蒙版贴图 | 贴图路径|
| $basemapalphaphongmask | 使用$ basetexture的Alpha通道 | bool|
| $basemapluminancephongmask | 基于$basetexture亮度的蒙版phong作用强度 | bool|
| $phongexponent | 全局指数值，整体亮度 |整数 |
| $phongexponenttexture | 使用指数图 | 贴图路径 |
| $phongexponentfactor | 将指数纹理乘以该数量（2013版本引擎） | 整数|
| $invertphongmask | 反转遮罩的值 | bool|
| $forcephong | 即使在GPU级别较低的情况下，也可以在phong材料上强制phong着色。这要求将convar mat_phong设置为1，否则它将不起作用 |bool |
| $diffuseexp | 这与$ phongexponent，$ phongexponenttexture有关 |浮点 |
| $shinyblood | 仅在《 Left 4 Dead》系列中使用 | 整数 |
| $shinybloodexponent | 仅在《 Left 4 Dead》系列中使用 |整数 |

| 二级参数（亮度） | 功能 | 值格式 |
|--|--|--|
| $phongboost | Phong亮度因子。较大的值会产生更强烈的高光，适用于金属和玻璃等表面。 | 浮点|
| $phongfresnelranges | 菲涅尔光效果（下面单独说） |三元一维数组 |
| $phongdisablehalflambert | 禁用Phong材质上的强制半朗伯阴影 |  bool|

| 二级参数（色彩） | 功能 | 值格式 |
|--|--|--|
| $phongalbedotint | 允许$ basetexture着色Phong高光的颜色。着色量由$ phongexponenttexture的绿色通道定义 | |
| $phongalbedoboost | Phong反照率过亮系数。范围0-255 （Counter-Strike）| 浮点|
| $phongtint | 峰反射的反照率色彩。（基于其他通道） | RGB数组|
| $phongwarptexture |用于创建虹彩效果（《半条命2：新作》第二集2007年） |贴图路径 |

基本上就这些二级函数，其他还有一小部分参数都是新参数了，老掉牙的SFM根本不能识别，这里就不列举了。
重点说一下几个参数：
`$ bumpmap`

使用法线贴图，也就是蓝了吧唧的那个贴图，当光照射到这个贴图上时，反射光将包含高度信息，即使模型是一张平面也可以依靠这个贴图反射出高度效果。

![](https://img-blog.csdnimg.cn/20200317204841118.jpg)
![](https://img-blog.csdnimg.cn/20200317204901961.jpg)

`$ phongexponent`
法线贴图的反射光整体亮度（作用于法线贴图）

![](https://img-blog.csdnimg.cn/20200317203340648.jpg)

`$ phongexponenttexture`
这个用到的是指数图，就是一种主色调是绿色的贴图，里面稍微带一点红色，这个是调整法线贴图效果的。在指数图中：**红色通道-指数蒙版**（蒙版作用强度大小，0-255，其中值0是最大作用，255是无作用），**绿色通道-对比度遮罩**（同时受$ phongalbedotint参数影响 范围0-255，值为0时无色，255时全色），蓝色通道-无 ，**Alpha通道**： $ rimlight遮罩（仅当$ rimmask 1时启用）

`$ phongboost`
反射的亮度信息（**跟$ phongexponent不一样啊**），之前我做了一个光剑模型，还不知道自发光函数，只能依靠这个函数来提高我的光剑亮度，那么这个效果同样来自于反射光，比如我给这个函数赋值为10.0，那么当光照射到这个模型上时，这个模型将反射出巨亮的光。相反给一个极低的值，比如0.1，这个模型即使光照过去也显得非常暗淡。

`$phongfresnelranges`
做mmd风格的人物模型的必备参数，先解释一下啥是菲涅尔效果，在VMT中，Frensel术语使用以下格式定义。**X表示视角等于表面法线时**表面的反射性。**Z表示视角等于掠射角时**的反射率。**Y代表这两者之间**的反射率。 

![](https://img-blog.csdnimg.cn/20200317204548905.jpg)

`$phongfresnelranges`
 [φX φY φZ]，当远离摄像机的视点时，它们会线性地增亮表面。格式是三元一维数组，例如[0.05 0.5 1]。假如此时模型一个球体模型，你会看到他的边缘是比较亮的。具体看图理解叭。

![](https://img-blog.csdnimg.cn/20200317204609858.jpg)

`Phong_mask`

![](https://img-blog.csdnimg.cn/20200317203843555.jpg)

::: tip 提示
可以用以下两种方法之一定义Phong指数纹理：`$phongexponenttexture` 定义一个纹理，该纹理在每个纹理元素的基础上定义一个表面的指数值。

`$phongexponent` 覆盖指数纹理，并且在开发过程中非常有用，可以在不绘制通道的情况下获得快速的总体镜面反射项。

然后通常在创建给定纹理贴图并将其添加到给定材料的混合中时将其注释掉。Phong 指数纹理将图像的红色和绿色通道用于不同的目的。

红色通道定义 Phong 指数值，绿色定义反照率着色。但是，反照率着色是一项“正在进行的工作”功能，当前在某些分支的当前着色器中不受支持。

因此，为了简单起见，应对指数纹理使用灰度。

![$ phongwarptexture](https://img-blog.csdnimg.cn/20200317203016904.png)
:::

#### 例子：


    VertexLitGeneric
    {
    	$basetexture models/Alyx/alyx_faceandhair
    	$bumpmap models/alyx/alyx_head_normal
    	$halflambert 1
    	$nodecal 1
    	$model 1
    
    	$phong 1
    	$phongexponent 33
    	$phongexponenttexture models/Alyx/alyx_head_exponent
    	$phongboost	6
    	$phongfresnelranges	"[0.05 0.5 1]"
    }
    
---

### 三、光追技术他爹：环境贴图 $envmap

![](https://img-blog.csdnimg.cn/20200317204324816.jpg)

由于引擎的机能限制，不可能做到光线实时追踪，而且游戏里的追踪实际上也没太大意义，比如一闪而过的队友，他们的头盔反光根本看不清，所以类似这一种一闪而过的光滑硬表面景色反射，直接用一张固定的图片代替反射出的景色即可，这项参数同样可以用于眼睛反射的景物光，提升模型的真实度。

重要的是，envmap 照射角度不同，反射的景色图片随之旋转。

> $envmap 是所有Source游戏中可用的材质着色器参数。它创建镜面反射，在光滑表面上可以看到。它通过定义要绘制为反射的“环境贴图”（特别是cubemap）来实现此目的；通常是最近的env_cubemap实体。反射不是动态的。

#### 例子

    $ envmap env_cubemap


> 通常使用“ env_cubemap”，因为它告诉VBSP在env_cubemap编译地图时交换最近的名称。但是，也可以使用手动创建的静态立方体贴图图像。

> **注意：如果$ envmap在不指定$ basetexture的情况下使用，则无论如何都将强制绘制镜面反射。**
> （引用自valve论坛[$envmap](https://developer.valvesoftware.com/wiki/$envmap)词条）

这段话的大致意思是如果指定的是env_cubemap则将把当前载入的地图的hdr图像作为模型的envmap，当然也可以自己指定自制或者已存在的贴图的路径。

当模型没有基础贴图时，模型表面将只有反射，就是所谓的镜面反射了。

那么咋搞自己的hdr贴图呢？
##### 创建自定义静态立方体贴图纹理

在某些情况下可能需要创建自定义立方体贴图纹理，并且在某些Valve模型中偶尔使用。

在VTFEdit中，您需要以正确的方向将立方体贴图的6面另存为单独的纹理，以使其正确显示在Source Engine中。因此，某些面可能需要顺时针或逆时针旋转。

在定向之前，每个面都需要水平镜像。

![](https://img-blog.csdnimg.cn/20200317204430108.jpg)

在此页面的右侧，您将找到两个引导图像，以帮助正确旋转环境渲染的每一侧。

将这两个指南中的一个或两个保存在计算机上，然后将环境渲染导入到计算机上或以较小的比例重新创建，然后按照图像指示旋转侧面。

将每一面另存为单独的图像文件，其名称应为在该特定正方形上找到的数字。这将确保正确构建环境纹理，因为数字还表示VTFEdit中的导入顺序。

![](https://img-blog.csdnimg.cn/20200317204645139.png)

准备好所有图像面后，您可以将它们全部导入VTFEdit并选择“环境图”。纹理格式由您决定，通常DXT5可以。

![](https://img-blog.csdnimg.cn/20200317204657240.jpg)

然后将其全部保存为.vtf文件，并在VMT中使用它，如下所示：


    $envmap "effects/my_cubemap"

其中引号内的路径是你的envmap贴图路径，如果要自制的话推荐放在你的其他贴图同路径下。

| 二级参数 | 功能 | 值类型 |
|--|--|--|
| $envmapmask | 用于控制反射强度的指示图 | 纹理路径 |
| $envmaptint | 控制反射的红色，绿色和蓝色通道的强度。可以使用任何正数。默认值为"[1 1 1]"，表示强度为100％。（此命令通常用于调暗镜面反射的亮度，而不会对$envmapmask造成影响） | RGB数组 |
| $envmapcontrast | 控制反射的对比度。0是自然对比度，而1是颜色的全平方（即颜色*颜色）（*启用Phong时将不起作用。提示：使用较高的对比度可以减少相对较暗的区域并增加“热点”*） | 0-1浮点 |
| $envmapsaturation | 控制反射的颜色饱和度。0是灰度，而1是自然饱和度。（*在模型上启用Phong时将不起作用。*） | 0-1浮点 |
| $envmapframe | 用于启动动画立方体贴图的框架。 | 整数 |
| $basetexturenoenvmap | 用于具有两个反照率的材料，以使一个或另一个哑光。（请参阅$ basetexture和$ basetexture2） | bool |
| $envmapoptional | 设置应该绘制反射的兼容的DirectX版本 | 80/81/90/95 |
| $envmapfresnel | 在反射中 添加菲涅耳效果。0是无，而1则是完全效果，类似于Water。效果乘以大于1的值。（此函数用于VertexLitGeneric着色器，另外LightmappedGeneric和WorldVertexTransition需要使用$ fresnelreflection） | bool |
| $envmapfresnelminmaxexp | 为设置菲涅耳效果的范围VertexLitGeneric。默认情况下"[0 1 2]"，使面向观察者的表面反射性小于面向侧面的表面。（第一个值是菲涅耳的最小量，第二个值是菲涅耳的最大值，最后一个值是指数。） | 三元数组 |
| 控制台命令 | -- | -- |
| mat_specular | 禁用或启用镜面反射。默认值1。 | -- |
| r_showenvcubemap | 调试命令以全强度显示所有动态对象上的立方体贴图 | -- |

> （省略了6个仅用于csgo的参数和2个07年淘汰的参数）

### 四、酱糊基础贴图的救星：细节贴图$ detail
当基础贴图分辨率不太高而模型贼大，把贴图拉的糊成一片的时候，细节贴图就能发挥作用了，相当于一个正片叠底的PS图层啦，在原有的贴图上叠加一层贴图，可大可小，可调整透明度等等参数，当然也可以用于衣服的纹理细节上面（如果用凹凸贴图表现衣服纹理的话必须开启照明光才能看出来，细节贴图就算不开光照也可以看出来）

![](https://img-blog.csdnimg.cn/20200317204757196.jpg)
那最基础的写法：


    $detail <texture>


#### 二级参数：
| 二级参数 | 功能 | 值类型 |
|--|--|--|
| $detailtexturetransform | 旋转，缩放等细节纹理。 | 字符串/数组 |
| $detailscale | 以给定的次数将细节纹理拟合到材质上（默认= 4）。通常用于代替$detailtexturetransform128px细节纹理的7或8左右的值。 | 浮点 |
| $detailblendfactor | 控制细节纹理影响基础纹理的量。精确的使用取决于混合因子。在大多数情况下，它的行为类似于$ alpha。值0通常会使细节纹理不起作用，而值1则应用全部效果。 |0-1浮点  |
| $detailblendmode | 如何将细节材料与反照率结合在一起 | 方法序号 |
| $detailtint | 修改细节纹理的颜色。 | RGB数组 |
| $detailframe | 启用动态细节纹理 | 整数 |

#### 例子：
    
    $ detail "detail\metal_detail_01" 
    $ detailtexturetransform "center .5 .5 scale 1 1 rotate 0 translate 0 0"
    $ detailscale 4.283 
    $ detailblendfactor .65 
    $ detailblendmode 0
    
详细说几个参数：
##### 1.$detailtexturetransform:
默认位置是"center .5 .5 scale 1 1 rotate 0 translate 0 0"。
1. center定义旋转点。仅rotate在使用时有用。
2. scale将纹理适合给定次数的材质。' 2 1'是X轴上50％的比例。
3. rotate旋转纹理柜台度-clockwise。接受任何数字，包括负数。
4. translate按给定的数字移动纹理。' .5'将其移动一半。

##### 2.$detailblendmode:
可以使用12种不同的细节混合方法。
0 =贴图调制此功能与DecalModulate着色器相同-低于128的颜色会使图像变暗，高于128的颜色会使图像变亮。
1 =添加剂细节纹理的颜色将添加到基础纹理中。这与$ additive相同。
2 =半透明的细节细节纹理将作为半透明覆盖层应用到基础纹理的顶部。
3 =混合因子淡入度细节纹理作为半透明覆盖层应用，但忽略其alpha通道。取而代之的是，使用混合因子来确定从底部显示多少基本纹理。
4 =半透明底这有效地翻转了两个纹理的正常分层。细节纹理显示在“下方”，基本的Alpha通道将其控制为半透明的覆盖层。细节Alpha通道控制总体材质Alpha-用于半透明，遮罩或其他用途。
5 =未点燃的添加剂细节纹理的颜色与模式1相同地添加到基本纹理，但是此颜色不受光照的影响，因此看起来会发光。
6 =未点燃附加阈值淡入这将添加不受模式5照明影响的颜色，但首先会根据混合因子是高于还是低于0.5来修改以两种模式添加的颜色。方法： 屏幕截图。
7 =两模式DecalModulate仅使用细节纹理的红色和Alpha通道。该操作类似于DecalModulate着色器或混合模式0，但是基本的Alpha通道在使用红色（0）或Alpha（255）细节通道作为调制源之间逐渐减弱。有效地允许使用两个细节材料，尽管它们都是灰度的。
8 =乘基本通道的颜色乘以细节纹理的颜色。 错误： 由于缺少着色器组合，因此与$ phong不兼容。
9 =通过局部Alpha的基本蒙版仅使用细节Alpha通道。它与基本纹理的Alpha通道相乘以生成最终的Alpha值。
10 =自阴影凹凸贴图细节纹理用作（可能是附加的）$ ssbump凹凸贴图。混合因子将被忽略。注意：您可以使用它在同一材质上获得标准凹凸贴图和自阴影凹凸贴图。但是，这很昂贵，应该非常谨慎地使用。
11 = SSBump反照率未知功能，内部使用。评论说：“着色器在这里发挥了魔力-无需用户指定模式11”。
12+其他任何值都将禁用细节效果。

> 一般用0模式即可，默认也是0


### 五、灯泡和屏幕：自发光参数$ selfillum
自发光确定表面在何处进行自发光，而与环境照明无关。这种类型的遮罩可以使表面的像素充满来自颜色纹理的着色。（*不能与$ translucent（半透明）或$ alphatest（alpha遮罩）同时使用。*）

#### 二级参数：
|  |  | |
|--|--|--|
| $selfillumtint |调整自发光效果的颜色。默认值为“ [1 1 1]”。  | RGB数组 |
| $selfillummaskscale | 缩放自发光效果强度。默认值为1.0。 | 0-1浮点 |
| $selfillummask | 效果专用的蒙版纹理。（光源遮罩） | 纹理路径 |
| $selfillum_envmapmask_alpha |使材料从的Alpha通道派生其自发光蒙版$ envmapmask 。注意：$ selfillum_envmapmask_alpha替换原始$ selfillum命令，因此它们不能一起使用。| bool |
| $selfillumtexture | 使用selfillum纹理。从Source 2007开始不推荐使用。 | 纹理路径 |
| $selfIllumFresnel | 允许材料使用菲涅耳范围。如果启用则中断。$ envmap $ normalmapalphaenvmapmask | bool | 
| $selfIllumFresnelMinMaxExp | 默认值：[0.0 1.0 1.0] 菲涅耳范围与$phongfresnelranges类似。第一个值是最小照度，第二个值是最大照度，最后一个值是菲涅耳指数。 | 浮点数组 | 

#### 例子：

    LightmappedGeneric
    {
        $basetexture "props/tvscreen005a"
        $selfillum 1
        $selfillummask <texture>
    }


### 其他参数
#### 1.$ alpha 、$ translucent 、$ alphatest
这三个函数都是透明函数
1. $ alpha：这个函数取值0-1的浮点数，是启用alpha通道的程度，比如basetexture有透明通道，那么我要把这个alpha开到1才能完全出现透明情况，如果是0则不透明，如果是0.5的话就是半透明，其他数值亦然。
2. $ alphatest：这个有点不好解释，取值是0或1，大概意思是透用某一个alpha程度的通道。
3. $ translucent：这个就是透明混合函数了，把纹理的透明和部分和不透明部分搞一个渐变，属于比较高级的操作把，总感觉用处不太大。

#### 2.$ nocull
这个函数是无视法线的函数，模型它有法线，法线射出面就是外表面，另外那面就是内表面，其中外表面可以漫反射，就是可以显示，内表面看不到，用透明代替，这个函数作用是把两面都变成外表面，都可以显示。
**这个函数用于打开的衣服、一个面的敞开物（例如单面杯子）、一张画、纸币、一个面的头发等。**
#### 3.$ surfaceprop
这个是用于游戏的物理属性函数，其中包含碰撞时发出什么声音、射击表面会发出什么效果、质量、浮力、弹力、表面对附近声音（混响，回声，吸收...）的影响。
值有liquid、solid、wall等
*这个函数在SFM里不必要。*

#### 4.$ halflambert
它是一个布尔参数，用于启用半朗伯照明，该照明将照明进一步围绕模型以防止其丢失定义。
它仅适用于模型。
*注意：从Source 2007开始，VertexLitGeneric无论启用什么$ halflambert设置，$ phong都将强制启用半朗伯照明，除非启用了$ phongDisableHalfLambert*


### 完整的vmt实例
下面给一个完整实例，用到的是starcold大佬的POD模型的vmt，在此感谢。

![](https://img-blog.csdnimg.cn/20200317204948929.jpg)


```js
    VertexlitGeneric
    {
     $basetexture "cold\NIERPOD\robot"
     $bumpmap "cold/bumpmap"
     $phongwarptexture  "cold/specmap"
     $halflambert 1
     $nocull 1
     $phong 1
     $phongexponent "50"
     $phongboost "1.5"
     $phongfresnelranges "[0.05 0.5 1]"
     $phongalbedotint "1"
     $color "2"
     $lightwarptexture   "cold/lightmap"
    }

```

用效果图作为结尾，这张图由DreamHeart梦心大佬制作，在此感谢。

![](https://img-blog.csdnimg.cn/20200317204927343.jpg)



**啊对了，如果你发现了文章有错或者你有问题想问的话不用留言，直接加SFM贴吧官方群进群问大佬们即可！**
