var path = require('path');
var fs = require('fs');
var fse = require('fs-extra');
var entry = require('./webpack.config.js').entry;

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
  }
};



fs.readdir('./dist', function(err, subPath) {
  if(subPath && subPath.length) {
    console.log('------------>');
    subPath.map(function(sub) {
      console.log('Deleting ===> ' + sub);
    });
    console.log('------------>');

    fse.emptyDir('./dist', function(err) {
      if(err) return err;
    });
  }
});
