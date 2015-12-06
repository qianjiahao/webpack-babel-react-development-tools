var path = require('path');
var webpack = require('webpack');
var entry = require('./webpack.entry.js');

var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[id].[name].[chunkhash].bundle.js',
    publicPath: '',
    chunkFilename: '[id].[name].[chunkhash].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: /\.css$/, loaders: ['style', 'css'] },
      { test: /\.(png|jpg)$/, loader: 'url?limit=250000' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new htmlWebpackPlugin({
      title: 'es2015 template',
      filename: 'index.html',
      template: path.join(__dirname, 'src/template/template.index.html')
    }),
    new cleanWebpackPlugin([path.join(__dirname, 'dist')]),
  ]
};
