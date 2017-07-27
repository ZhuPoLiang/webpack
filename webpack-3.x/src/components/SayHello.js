'use strict'

import indexStyle from '../common/styles/index';
import React from 'react';

export default class SayHello extends React.Component {
    render() {
        return (
            <div className={indexStyle.content}>
                <h1>hello, Webpack 3 and React 15!!</h1>
                <h3>摘要：使用webpack打包项目</h3>
                <h4>
                    具体功能如下：
                </h4>
                <p>
                    1、编译ES6以及JSX的语法；
                </p>
                <p>
                    2、编译后缀为.styl的css文件，并提取出css文件，开启css module，自动补全浏览器兼容前缀；
                </p>
                <p>
                    3、根据模板创建HTML文件，并引入相关的静态资源文件
                </p>
                <p>
                    4、生产阶段自动压缩js、css文件
                </p>
                <p>
                    5、开发阶段devServer自动弹出浏览器窗口、react组件热加载
                </p>
                <p className={indexStyle['text-right']}>
                    -- end
                </p>
            </div>
        )
    }
};
