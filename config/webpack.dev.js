var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

   output: {
         path: helpers.root('build'),
         publicPath: 'build',
         filename: '[name].js',
         sourceMapFilename: '[name].js.map',
         chunkFilename: '[id].chunk.js'
     },

  plugins: [
    new ExtractTextPlugin('[name].css')
  ],

  // devServer: {
  //   historyApiFallback: true,
  //   stats: 'minimal'
  // }
});
