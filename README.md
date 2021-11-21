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

## request对象

+ data事件：数据会被分割成极小的包传输，通过此事件接收数据。
+ `request.on('data', (chunk) =>{...})`
+ end事件：所有数据传输完成时触发
+ `request.on('end', ()=>{...})`
+ 继承了stream.Readable类

## response对象

+ 有getHeader/setHeader/write/end等方法
+ 可以控制所有响应属性
+ 继承了Stream类

## 实现功能

### 根据不同的url返回不同文件

关键代码：见index.ts中的switch部分

### 解析url参数

关键代码：引入url模块，使用url.parse
