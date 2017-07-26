'use strict';

const
    path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    postcssImport = require('postcss-import'),
    cssnext = require('postcss-cssnext'),
    merge = require('webpack-merge'),
    mode = require('yargs').argv.mode,
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const
    folderPath = require('../config/folder-path.config');

const options = {
	module: {
		loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot','babel'],
                include: folderPath.srcPath
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style','css!postcss')
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract('style','css!postcss!stylus'),
                include: folderPath.srcPath
            },
            {
				test: /\.(png|jpg)$/i,
				loader: 'url-loader?limit=6144&name=static/images/[name].[hash:8].[ext]',
                include: folderPath.srcPath
			},
			{
				test: /\.(svg|woff|eot|ttf)([\?]?.*)$/i,
				loader: 'url-loader?limit=6144&name=static/fonts/[name].[hash:8].[ext]',
                include: folderPath.srcPath
			}
		]
	},

    resolve: {
        root: folderPath.rootPath,
        extensions: ['', '.js', '.jsx', '.css', '.styl'],
        modulesDirectories: ['node_modules']
    },

    postcss: function() {
        return [
            cssnext({
                autoprefixer: {
                    browsers: 'ie >= 9'
                }
            }),
            postcssImport({
                addDependencyTo: webpack
            })
       ];
    }
};

module.exports = merge(
    mode === 'prod' ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js'),
    options
);
