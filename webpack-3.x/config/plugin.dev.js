'use strict';

const
    Webpack = require('webpack'),
    ExtractTextWepackPlugin = require('extract-text-webpack-plugin'),
    OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

const configPath = require('./config-path');

module.exports = [
    new Webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
    new ExtractTextWepackPlugin('./static/styles/[name].css', {
        allChunks: true,
        disable: false
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
    new OpenBrowserWebpackPlugin({
        url: 'http://' + configPath.host + ':' + configPath.port
    })
].concat(require('./plugin'));
