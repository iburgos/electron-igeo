const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const path = require('path');
const appRoot = path.resolve(__dirname, '../app');

const styleLoader = [
    'css-loader?sourceMap',
    'postcss-loader',
    'resolve-url-loader',
    'sass-loader?sourceMap&expanded'
].join('!');

const sassLoaders = [
    'css-loader?sourceMap',
    'sass-loader?iincludePaths[]=' + path.resolve(__dirname, './app/styles')
]

module.exports = {
    entry: {
        'polyfills': './app/polyfills',
        'vendor': './app/vendor',
        'app': './app/components/main'
    },

    resolve: {
        modules: [helpers.root(__dirname, '/node_modules/')],
        descriptionFiles: ['package.json'],
        extensions: ['', '.ts', '.js', '.scss', '.html']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: "babel-loader?presets[]=es2015!ts-loader",
            exclude: [/node_modules/]
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            include: helpers.root('app', 'images'),
            loader: 'file?name=/images/[name].[ext]'
        }, {
            test: /\.html$/,
            loader: 'html',
            query: {
                minimize: true
            }
        }, {
            test: /\.css$/,
            include: helpers.root('app', 'styles'),
            loader: 'raw'
        }]
    }
};