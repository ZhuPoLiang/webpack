'use strict';

const
    path = require('path'),
    Webpack = require('webpack'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    CompressionWebpackPlugin = require('compression-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

const
    configPath = require('./config-path');

module.exports = [
    new Webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 10000
    }),
    new Webpack.optimize.AggressiveMergingPlugin(),
    new MiniCssExtractPlugin({
        filename: './static/styles/[name].[chunkhash:7].css'
    }),
    new WebpackMd5Hash(),
    new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8
    })
].concat(require('./plugin'));
