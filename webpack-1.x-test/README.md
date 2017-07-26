# webpack起步小例子

#### 包含功能

* 自动反编译ES6语法、编译JSX语法；
* 自动编译.styl后缀的stylus语法CSS文件；
* 根据指定模板文件自动创建HTML文件；
* 打包时依赖库单独生成dll文件、文件名增加hash值、压缩混淆JS文件；
* 图片文件小于8KB则自动转换成base64编码；
* 运行devServer时自动打开浏览器窗口、React组件热加载；

#### 单独打包合并依赖文件

```
	npm run dll
```

注：build或dev前必须先dll生成单独依赖库文件否则会报错；

#### 打包文件

```
	npm run build
```

#### 运行devServer

```
	npm run dev
```
