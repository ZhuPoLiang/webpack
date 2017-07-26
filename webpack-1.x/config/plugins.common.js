'use strict';

const
    path = require('path'),
    Webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackMd5Hash = require('webpack-md5-hash');

const
    folderPath = require('./folder-path.config'),
    dllConfig = require('../dist/dll/dll-config.json');

module.exports = [
    new Webpack.DllReferencePlugin({
        context: folderPath.dllPath,
        manifest: require("../dist/dll/dll-manifest.json")
    }),
    new WebpackMd5Hash(),
    new ExtractTextPlugin('static/styles/[name].[contenthash:8].css', {
        allChunks: true,
        disable: false
    }),
    new HtmlWebpackPlugin({
        title: 'webpack 1.x',
        template: 'src/index.html',
        filename: 'index.html',
        bundleName: path.join('/dll', dllConfig.dll.js),
        hash:false,
        inject: 'body',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        chunks:['index']
    })
];
