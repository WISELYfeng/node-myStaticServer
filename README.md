# 说明

代码为饥人谷第86课静态服务器教学中跟着敲的。以此记录。

2021.11.16

## 创建项目

+ yarn init -y
+ 新建index.ts
+ ts-node-dev启动项目
+ 安装 @types/node模块
+ 在index.ts中创建server
+ 监听server的request事件，监听8888端口

## 使用TypeScript

+ 参数加上类型，ts就可以提示该参数可用的属性
  
## curl命令

+ `curl -v http://localhost:8888/`会在命令行中显示请求信息
+ `curl -v -d "name:xxx" http://localhost:8888/` 以post形式去发送请求
