---
title: 脚本
---

脚本是个广义的定义，Source Filmmaker 中的脚本定义为全部放置在 ```/scripts``` 文件夹的 ```.py``` 格式文件。

## Rig 

### IK Rig

#### Met's Magic Rig（Met的魔法索具）

[ [SFMLab](https://sfmlab.com/item/1385/)]

**介绍：**

- 此装备脚本使用正则表达式和实际骨架层次结构来查找要应用IK约束的手臂和腿骨。
这意味着只要模型的骨骼层次结构正确，并且您的骨骼名称是英文并且没有拼写错误，这个索具都可以正常使用。

- 适配各种动物：猫、马...

- 有衣服、生殖器、翅膀、尾巴的常规表达组便于控制

- 会自动根据名字为 Flex 分组。

- JiggleBones 会破坏这个 Rig 的效果，请在一开始关闭掉 JiggleBones。[ [教程](/guide/advanced/jigglebones.html#第二步) ]

- 强制启用 rig_footroll ，这是一个很酷的滑块控制，可让你在不移动脚趾的情况下抬起脚踝。rig脚本将尝试将其应用于每个模型，并且它将适用于某些模型。

其他懒得写了，这个最好用，万能 IK Rig，Met 牛逼！

---

### Animation Rig

#### Overwatch Animation Rig

脚本：[ [WorkShop](https://steamcommunity.com/sharedfiles/filedetails/?id=745187752)]  动画：[ [WorkShop](http://steamcommunity.com/workshop/filedetails/?id=745191468)]

**介绍：**

- 本体 Animation Rig ：```overwatch_animations_bip``` 和 ```overwatch_animations_valvebiped```

- 包含了很好用的 IK Rig ：```rig_overwatch_anims_bip``` 和 ```rig_overwatch_anims_valvebiped```

- 内含守望先锋 安娜、死神、猎空、士兵：76、黑百合、莱因哈特、法老之鹰、卢西奥、禅亚塔、路霸、源氏、半藏、黑影的人物动作。

- 适合不会K动画的萌新使用，一键跑步不是梦。

