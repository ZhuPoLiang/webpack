'use strict';

const
    MiniCssExtractPlugin = require('mini-css-extract-plugin');

const configPath = require('../config/config-path');

module.exports = {
    rules: [
        {
            test: /.jsx?$/,
            exclude: /node_modules/,
            include: configPath.srcPath,
            use: [
                'react-hot-loader',
                'babel-loader'
            ]
        },
        {
            test: /.styl$/,
            include: configPath.srcPath,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'stylus-loader'
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            include: configPath.srcPath,
            loader: 'url-loader',
            options: {
                name: 'static/images/[name].[ext]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            include: configPath.srcPath,
            loader: 'url-loader',
            options: {
                name: 'static/fonts/[name].[ext]'
            }
        }
    ]
};
