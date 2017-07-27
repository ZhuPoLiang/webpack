'use strict';

const
    path = require('path'),
    merge = require('webpack-merge');

const
    configPath = require('../config/config-path');

module.exports = merge({
    devtool: false,

    entry: require('../config/entry'),

    output: {
        path: configPath.distPath,
        filename: './static/scripts/[name].[chunkhash].js'
    },

    resolve: require('../config/resolve'),

    module: require('../config/module.prod'),

    plugins: require('../config/plugin.prod')
}, require('./webpack.config'));
