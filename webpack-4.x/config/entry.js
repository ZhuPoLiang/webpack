'use strict';

const
    path = require('path');

const
    configPath = require('../config/config-path');

module.exports = {
    app: path.join(configPath.srcPath, 'index')
};
