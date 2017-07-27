'use strict';

const
    Webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    postcssImport = require('postcss-import'),
    cssnext = require('postcss-cssnext'),
    ExtractTextWepackPlugin = require('extract-text-webpack-plugin');

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
            use: ExtractTextWepackPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            minimize: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function() {
                                return [
                                    cssnext({
                                        autoprefixer: {
                                             browsers: [
                                                 'last 10 Chrome versions',
                                                 'last 10 Firefox versions',
                                                 'Safari >= 6',
                                                 'ie > 8'
                                             ]
                                        }
                                    }),
                                    postcssImport({
                                        addDependencyTo: Webpack
                                    })
                               ];
                           }
                        }
                    },
                    {
                        loader: 'stylus-loader'
                    }
                ]
            })
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
