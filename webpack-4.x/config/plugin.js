'use strict';

const
    path = require('path'),
    Webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const
    configPath = require('./config-path'),
    dllConfig = require(path.join(configPath.dllPath, 'dll-config.json'));

module.exports = [
    new Webpack.DllReferencePlugin({
        context: configPath.dllPath,
        manifest: require("../dist/dll/dll-manifest.json")
    }),
    new CleanWebpackPlugin(
        ['dist/static/*/*'],
        {
            root: configPath.rootPath,
            verbose: true,
            dry: false
        }
    ),
    new HtmlWebpackPlugin({
        title: 'webpack 4.x',
        template: 'src/index.html',
        filename: 'index.html',
        hash: false,
        inject: 'body',
        bundleName: './dll/' + dllConfig.dll.js,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        chunks: ['app']
    })
];
