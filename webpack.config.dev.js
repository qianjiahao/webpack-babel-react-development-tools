var cleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var entry = require('./webpack.entry.js');

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   loader: 'url?limit=250000'
      // }
    ]
  },
  plugins: [
    new cleanWebpackPlugin([path.join(__dirname, 'dist')]),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),  
  ]
};
