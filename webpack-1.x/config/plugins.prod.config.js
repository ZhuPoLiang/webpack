'use strict';

const
    Webpack = require('webpack'),
    CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = [
    new Webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
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
    }),
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.optimize.MinChunkSizePlugin({
        compress: {
            warnings: false
        }
    }),
    new Webpack.optimize.AggressiveMergingPlugin()
].concat(require('./plugins.common'));
