'use strict';

const
    Webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    postcssImport = require('postcss-import'),
    cssnext = require('postcss-cssnext'),
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
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        minimize: true
                    }
                },
                'postcss-loader',
                'stylus-loader'
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            include: configPath.srcPath,
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: 'static/images/[name].[hash:7].[ext]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            include: configPath.srcPath,
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: 'static/fonts/[name].[hash:7].[ext]'
            }
        }
    ]
};
