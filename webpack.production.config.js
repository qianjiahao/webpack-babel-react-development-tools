var path = require('path');
var fs = require('fs');
var entry = require('./webpack.config.js').entry;
var clean = require('./webpack.clean.js');


module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[name]-[hash].js'
  },
  resolve: {
    modulesDirectories: ['', 'node_modules','assets/styles']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=250000'
      }
    ]
  },
  plugins: [
    clean(path.join(__dirname,'dist'))
  ]
};
