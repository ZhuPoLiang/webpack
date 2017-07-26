'use strict'

import React from 'react';

export default class SayHello extends React.Component {
    render() {
        return (
            <div className="content">
                <h1>hello, Webpack and React!!</h1>
                <h3>摘要：使用webpack打包项目</h3>
                <h4>
                    具体功能如下：
                </h4>
                <p>
                    1、自动编译ES6以及JSX的语法；
                </p>
                <p>
                    2、自动编译后缀为.styl的css文件，并且提取出css文件
                </p>
                <p>
                    3、自动生成HTML模板文件，并且引入相关的静态资源文件
                </p>
                <p>
                    4、打包输出自动压缩文件与图片
                </p>
                <p>
                    5、运行devServer自动弹出浏览器窗口、react组件热加载（无状态函数组件则是刷新浏览器）
                </p>
                <p className="text-right">
                    -- end
                </p>
            </div>
        )
    }
};
