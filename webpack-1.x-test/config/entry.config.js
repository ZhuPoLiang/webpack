'use strict';

const
    path = require('path'),
    mode = require('yargs').argv.mode;

const
    folderPath = require('./folder-path.config'),
    devServerCofing = require('./dev-server.config');

module.exports = {
    index: mode === 'dev'
        ? [
            'webpack/hot/dev-server',
            'webpack-dev-server/client?http://'+ devServerCofing.host + ':' + devServerCofing.port,
            path.join(folderPath.srcPath, 'index')
          ]
        : path.join(folderPath.srcPath, 'index')
}
