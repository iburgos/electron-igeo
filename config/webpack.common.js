var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './app/polyfills',
        'vendor': './app/vendor',
        'app': './app/components/main'
    },

    resolve: {
        modules: [helpers.root(__dirname, '/node_modules/')],
        descriptionFiles: ['package.json'],
        extensions: ['', '.ts', '.js', '.css', '.html']
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
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills', 'common'],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin()
    ]
};