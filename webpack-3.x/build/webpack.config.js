'use strict';

const env = require('yargs').argv.env;

module.exports = env === 'dev'
    ? require('./webpack.dev.config')
    : require('./webpack.prod.config');
