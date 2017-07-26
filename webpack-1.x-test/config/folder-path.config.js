'use strict';

const path = require('path');

const folder = {};

folder.rootPath = path.resolve(__dirname, '../');
folder.srcPath = path.join(folder.rootPath, './src');

folder.distPath = path.join(folder.rootPath, './dist');
folder.staticPath = path.join(folder.distPath, './static');
folder.dllPath = path.join(folder.distPath, './dll');

module.exports = folder;
