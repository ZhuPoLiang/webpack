'use strict';

const
    path = require('path'),
    merge = require('webpack-merge');

const
    configPath = require('../config/config-path');

module.exports = merge({
    devtool: 'cheap-source-map',

    entry: require('../config/entry'),

    output: {
        path: configPath.distPath,
        filename: './static/scripts/[name].js'
    },

    module: require('../config/module.dev'),

    resolve: require('../config/resolve'),

    devServer: require('../config/dev-server'),

    plugins: require('../config/plugin.dev')
}, require('./webpack.config'));
