'use strict';

import React from 'react';

export default class ArticleContent extends React.Component {
    render() {
        return (
            <div>
                <h3>摘要：使用webpack打包项目</h3>
                <h4>
                    具体功能如下：
                </h4>
                <p>
                    1、自动编译ES6以及JSX的语法；
                </p>
                <p>
                    2、自动编译后缀为.styl的css文件，并且单独分离出css文件
                </p>
                <p>
                    3、自动生成HTML模板文件，并引入相关的静态资源文件
                </p>
                <p>
                    4、打包输出文件时加入了自动压缩文件的功能
                </p>
                <p>
                    5、运行devServer时加入了自动弹出浏览器窗口的功能
                </p>
                <p className="text-right">
                    -- end
                </p>
            </div>
        )
    }
}
