var webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    debug: true,

    output: {
        path: helpers.root('build'),
        publicPath: 'build',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills', 'common'],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin(),
        new webpack.ProvidePlugin({		
            $: 'jquery',		
            jQuery: 'jquery',
            'window.jQuery': 'jquery',		
            Hammer: 'hammerjs/hammer'
        })
    ]
});