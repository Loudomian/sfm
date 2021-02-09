---
title: Auto Rigger
---

**AutoRigger** ，自动装配 IK，实际上并不是自动的（ 仍然需要你进行一些细微调整。Auto Rigger 是一个非常方便的 IK RIG 自制脚本，如果你不知道什么是 IK RIG 请点击 [这里](/guide/rig.html#ik-rig（反向动力骨架）) 。

十分推荐新手或者大佬阅读本篇指南以提升 SFM艺术 制作水平。

## 获取 Auto Rigger

你可以通过 [Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=444750868) 或者 [SFMLab](https://sfmlab.com/item/612/) 获得这个脚本，建议使用 Workshop ，会自动更新。

![](https://ae01.alicdn.com/kf/HTB1qtJndG1s3KVjSZFA760_ZXXac.png)

## 使用

### 打开 Auto Rigger

载入一个你想要制作 IK RIG 的模型，我这里使用我做的一个 黎明杀机 角色，你可以在 [这里](https://sfmlab.com/item/3449/) 下载。

![](https://ae01.alicdn.com/kf/HTB1M6VfdUKF3KVjSZFE760ExFXan.png)

右键模型选择 Rig > auto-rigger ，然后会弹出一个新菜单。

![](https://ae01.alicdn.com/kf/HTB1JCJgdUGF3KVjSZFm762qPXXaA.png)

### 认识 Auto Rigger

![](https://ae01.alicdn.com/kf/HTB1rhdkdRaE3KVjSZLe760sSFXac.png)

---

#### 第一层

我们先看第一层的三个选项：

| 英文   | 中文 |
| ------ | ---- |
| Head   | 头部 |
| Neck   | 颈部 |
| Pelvis | 骨盆 |

头部，即控制模型头部的末端骨骼（有可能头部有两个骨骼控制，选择最接近头顶的）。

![](https://ae01.alicdn.com/kf/HTB1iUdidUGF3KVjSZFm762qPXXaL.png)

接着颈部，即控制模型脖子的开端骨骼（有可能颈部有两个骨骼控制，选择最接近胸口的）。

![](https://ae01.alicdn.com/kf/HTB1zshjdLWG3KVjSZPc762kbXXaO.png)

然后是盆骨，这个骨骼跟 roottransform 有一样的作用，可以控制整个模型的移动，但控制重心不一样。

![](https://ae01.alicdn.com/kf/HTB1fPtmdRWD3KVjSZKP761p7FXaU.png)

![](https://ae01.alicdn.com/kf/HTB1zZljdL5G3KVjSZPx762I3XXa5.png)

---

#### 第二层

第二层包括左右两部分，只要弄好了左边，即懂得怎么弄右边。

选项有：

| 英文          | 中文     |               |                  |
| ------------- | -------- | ------------- | ---------------- |
| boneUpperLegL | 左大腿骨 | boneCollarL   | 左衣领骨（肩膀） |
| boneLowerLegL | 左小腿骨 | boneUpperArmL | 左上臂骨         |
| boneFootL     | 左脚骨   | boneLowerArmL | 左下臂骨         |
| boneToeL      | 左脚趾骨 | boneHandL     | 左手掌骨         |

---

我们先看腿部分，选择绿色部分的骨骼，相信你肯定知道啥是大腿和小腿，所以就不详细截图，请自行选择。

![](https://ae01.alicdn.com/kf/HTB1UpJrdRCw3KVjSZFl763JkFXaN.png)

手部分依然如此，自行选择。

![](https://ae01.alicdn.com/kf/HTB1LqpldRiE3KVjSZFM762QhVXaN.png)

---

#### 第三层

包括了脊柱数量选择与绑定，你会看到有 4 - 1 spine bone 选择，请查看你的模型脊柱的数量，脊柱即为 Pelvis 的首个子骨骼一直延伸到作为头和肩膀的父骨骼。



这个模型有3个脊柱骨，所以设置为从下往上的3根分别为 spine 0 / 1 / 2 。



![](https://ae01.alicdn.com/kf/HTB1g8djdL1H3KVjSZFB762SMXXao.png)

---

#### 第四层

其他选项，你可以选择一些设定调整这个 IK RIG ，以下是选项：

| 英文                      | 中文             | 说明                                                         |
| ------------------------- | ---------------- | ------------------------------------------------------------ |
| Toggle IK Chain Auto-Find | 启用IK链自动寻找 | 方便生殖器等额外组件获得IK效果，不如直接使用 Mets Magic Rig （详情查询 Rig 指南） |
| use toe bones             | 使用脚趾骨       | 让脚趾可以受到控制，推荐开启                                 |
| use collar bones          | 使用肩骨         | 让肩骨可以受到控制，推荐开启                                 |
| add footroll              | 脚滚动           | 一个让脚不动，脚前后端翘起的 Flex ，需要在右侧栏目使用，请多次尝试轴向，通常为 Z 轴 |
| rig fingers               | 套用手指         | 让 IK RIG 效果下的手指不会卡顿，推荐开启，请选择带有 RIG 名称的手指进行操作，效果优越 |

![rig fingers](https://ae01.alicdn.com/kf/HTB1rdVldL5G3KVjSZPx762I3XXaM.png)

---

### 创建/修改 IK RIG

点击 Create Script 后，会生成一个 rig_角色名字.py 脚本到指定目录，你可以在 Rig 栏目里找到并使用；



如果生成的 IK RIG 并不能正常使用，你可以通过 Load Rig Script 选择 .py 脚本 进行二次修改，直到你满意为止。



### Q&A：

- Q：生成的脚本无法正常使用怎么办？
- A：检查什么骨骼不可用，多次修改，一定能使用。



- Q：粉色的骨骼太多了怎么办？
- A：点击 Unkown 栏目前的三角隐藏未知骨骼

![](https://ae01.alicdn.com/kf/HTB18dpudRCw3KVjSZR0762cUpXat.png)

## 结语

Auto Rigger 是一个很棒的插件，希望所有 SFMer 可以学会使用它，做出令人赏心悦目的艺术。

![](https://ae01.alicdn.com/kf/HTB123NmdNiH3KVjSZPfq6xBiVXaj.jpg)

