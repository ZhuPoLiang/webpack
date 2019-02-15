'use strict';

const
    Webpack = require('webpack'),
    OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');

const configPath = require('./config-path');

module.exports = [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
    new OpenBrowserWebpackPlugin({
        url: 'http://' + configPath.host + ':' + configPath.port
    })
].concat(require('./plugin'));
