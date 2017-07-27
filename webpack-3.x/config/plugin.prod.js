'use strict';

const
    path = require('path'),
    Webpack = require('webpack'),
    WebpackMd5Hash = require('webpack-md5-hash'),
    CompressionWebpackPlugin = require('compression-webpack-plugin'),
    ExtractTextWepackPlugin = require('extract-text-webpack-plugin');

const
    configPath = require('./config-path');

module.exports = [
    new Webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new Webpack.optimize.MinChunkSizePlugin({
        compress: {
            warnings: false
        }
    }),
    new Webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextWepackPlugin('./static/styles/[name].[chunkhash:7].css', {
        allChunks: true,
        disable: false
    }),
    new WebpackMd5Hash(),
    new Webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
        except: ['$super', '$', 'exports', 'require']
    }),
    new CompressionWebpackPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(js|css)$'),
        threshold: 10240,
        minRatio: 0.8
    })
].concat(require('./plugin'));
