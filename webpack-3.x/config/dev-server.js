'use strict';

const configPath = require('./config-path');

module.exports = {
    contentBase: configPath.distPath,
    host: configPath.host,
    port: configPath.port,
    inline: true,
    hot: true,
    historyApiFallback: true
};
