'use strict';

module.exports = {
    devtool: 'cheap-source-map',

    entry: require('../config/entry.config'),

    output: require('../config/output.config'),

    devServer: require('../config/dev-server.config'),

    plugins: require('../config/plugins.dev.config')
};
