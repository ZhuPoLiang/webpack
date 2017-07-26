'use strict';

const
    rm = require('rimraf');

const
    folderPath = require('../config/folder-path.config');

rm(folderPath.staticPath, err => {
    console.log('\nstatic目录已清除');
});

module.exports = {
    devtool: false,

    entry: require('../config/entry.config'),

    output: require('../config/output.config'),

	plugins: require('../config/plugins.prod.config')
};
