var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './app/polyfills',
        'vendor': './app/vendor',
        'app': './app/components/app'
    },

    resolve: {
        extensions: ['', '.ts', '.js', '.json', '.css', '.html']
    },

    module: {
        loaders: [{
            test: /\.ts$/,
            loaders: ['ts', 'angular2-template-loader'],
            exclude: [/node_modules/]
        }, {
            test: /\.html$/,
            loader: 'html'
        }, {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
        }, {
            test: /\.css$/,
            exclude: helpers.root('app', 'styles'),
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        }, {
            test: /\.css$/,
            include: helpers.root('app', 'styles'),
            loader: 'raw'
        }]
    },


    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills', 'common'],
            minChunks: Infinity
        })

        // new HtmlWebpackPlugin({
        //     template: 'app/index.html'
        // })
    ]
};