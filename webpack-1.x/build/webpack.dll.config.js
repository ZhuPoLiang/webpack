'use strict';

const
    path = require('path'),
    webpack = require('webpack'),
    AssetsPlugin = require('assets-webpack-plugin'),
    CompressionWebpackPlugin = require('compression-webpack-plugin'),
    rm = require('rimraf');

const
    folderPath = require('../config/folder-path.config');

const
    vendors = [
        'react',
        'react-dom',
    ];

rm(folderPath.dllPath, err => {
    console.log('\ndll目录已清除');
});

module.exports = {
    entry: {
        dll: vendors
    },

    output: {
        path: folderPath.dllPath,
        filename: '[name].[chunkhash:8].js',
        library: '[name]_[chunkhash:8]'
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(folderPath.dllPath, '[name]-manifest.json'),
            name: '[name]_[chunkhash:8]',
            context: folderPath.dllPath
        }),
        new AssetsPlugin({
            filename: 'dll-config.json',
            path: folderPath.dllPath
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            except: ['$super', '$', 'exports', 'require']
        }),
        new CompressionWebpackPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(js)$'),
          threshold: 10240,
          minRatio: 0.8
        })
    ]
};
