'use strict';

const
    Webpack = require('webpack'),
    OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const
    folderPath = require('./folder-path.config'),
    devServerCofing = require('./dev-server.config');

module.exports = [
    new Webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoErrorsPlugin(),
    new OpenBrowserWebpackPlugin({url: 'http://' + devServerCofing.host + ':' + devServerCofing.port})
].concat(require('./plugins.common'));
