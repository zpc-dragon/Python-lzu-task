# Python-lzu-task

2023秋的Python课设

## 分工

大作业的基本分工如下：

1. 个人负责前端页面开发
2. 一名同学负责服务器后端，响应前端用户的操作
3. 队长负责人工智能训练和服务器部署的核心内容

对于前端的主要界面和操作逻辑在此处说明

> 做三个页面，一个是登陆，然后是登陆进去的项目列表，里面可以新建和删除项目，最后每个项目数据集的页面大致如下
>
> ![d4ee5e18b7c83bcc23c3b1c74094168a](https://typora-zpc.oss-cn-beijing.aliyuncs.com/202312111528845.png)

根据老师上课的要求，界面要求不高，主要是后台和前台的交互比较重要

## 开发流程

- 后端明确通过点击需要哪些函数，或是展示哪些数据（12.11）
- 已完成对主界面的实现（12.12）
- 对主界面进行微调（12.23）
- 完善标签的增删改查(12.21)

## 实际效果

- 登录界面

![image-20231224131325084](https://typora-zpc.oss-cn-beijing.aliyuncs.com/image-20231224131325084.png)

- 用户管理界面

![image-20231224131244752](https://typora-zpc.oss-cn-beijing.aliyuncs.com/image-20231224131244752.png)

- 数据集详情页

![image-20231224131219653](https://typora-zpc.oss-cn-beijing.aliyuncs.com/image-20231224131219653.png)

## 其他

1. return 帐户密码错误的提示 √
2. 数据集的展示（用户 get_datasets数据格式）dataset的删除和重命名的两个标签 √
3. open_dataset函数的对应关系√
4. get_dataset拿到数据集内所有的图片信息并显示√
5. home做一下删除和部分图片展示√
6. 四周控件布局的调整√

相关仓库：https://github.com/LZUCSWang/OCSIP/tree/main

注：后期的代码开发均在相关仓库完成，此仓库不再更新维护

