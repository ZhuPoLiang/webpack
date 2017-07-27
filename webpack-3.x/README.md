# webpack 3.x 小例子

#### 包含功能

* 编译ES6以及JSX的语法；
* 编译后缀为.styl的css文件，并提取出css文件，开启css module，自动补全浏览器兼容前缀；
* 根据模板创建HTML文件，并引入相关的静态资源文件；
* 单独打包依赖dll文件；
* 生产阶段文件名自动增加hash值、压缩混淆JS文件、图片文件小于8KB转换成base64编码；
* 开发阶段devServer时自动打开浏览器窗口、React组件热加载；

#### 单独打包合并依赖文件

```
	yarn run dll
```

注：build或dev前必须先dll生成单独依赖库文件否则会报错；

#### 打包文件

```
	yarn run build
```

#### 运行devServer

```
	yarn run dev
```
