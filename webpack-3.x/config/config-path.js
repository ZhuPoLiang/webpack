'use strict';

const path = require('path');

const configPath = {};

configPath.rootPath = path.resolve(__dirname, '../');
configPath.srcPath = path.join(configPath.rootPath, './src');

configPath.distPath = path.join(configPath.rootPath, './dist');
configPath.staticPath = path.join(configPath.distPath, './static');
configPath.dllPath = path.join(configPath.distPath, './dll');

configPath.host = '192.168.0.44';
configPath.port = 2046;
configPath.dev = 'development';
configPath.prod = 'production';

module.exports = configPath;
