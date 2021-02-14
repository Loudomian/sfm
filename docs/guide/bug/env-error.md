---
title: 环境错误
---
![](https://img.imgdb.cn/item/6028c17fd2a061fec7ca632d.jpg)

将 SourceFilmmaker 移动到另一个分区后，启动 SourceFilmmaker 会出现 **环境错误** 的提示。简单的来说，你软件是放在C盘的，现在被你放到了D盘。

不幸的是，即使你通过简单的卸载重装，这个问题也无法被自动解决。所以我们强烈建议**不要移动软件本体** 以防止出现此次错误。

## 解决方式

### 找到环境变量

在你的电脑中搜索 `envi` 以开启系统属性，这时你可以看到右下角的环境变量。

![](https://img.imgdb.cn/item/6028bbe8d2a061fec7c7a591.jpg)

![](https://img.imgdb.cn/item/6028bc31d2a061fec7c7c947.jpg)

### 修改用户变量

在环境变量中，你只需要把目光放在上方的小窗口中，不用管下方的系统变量。

在用户变量中，你应该会看到下面几个变量：

- VGame
- VContent
- VProject
- VTools

如果没有，请通过 `新建...`创建它们，并将值设定为目前 SourceFilmmaker的安装路径，如：

![](https://img.imgdb.cn/item/6028c00ed2a061fec7c9a4dc.jpg)

完成操作后，请保存，并**重启电脑**。