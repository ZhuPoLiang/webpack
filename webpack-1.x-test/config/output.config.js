'use strict';

const
    mode = require('yargs').argv.mode;

const
    folderPath = require('./folder-path.config');

module.exports = {
    path: folderPath.distPath,
    publicPath: '/',
    filename: mode === 'dev' ? 'static/scripts/[name].js' : 'static/scripts/[name].[chunkhash:8].js',
    library: '[name]_[chunkhash:8]'
}
