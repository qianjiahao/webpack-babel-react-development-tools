var fse = require('fs-extra');
var fs = require('fs');
var basePath = './dist';

fs.readdir(basePath, function(err, subPath) {
  if(subPath && subPath.length) {
    console.log('------------>');
    subPath.map(function(sub) {
      console.log('Deleting ===> ' + sub);
    });
    console.log('------------>');

    fse.emptyDir(basePath, function(err) {
      if(err) return err;
    });
  }
});

var entry = {
  'index': './app/index.js'
}

module.exports = {
  entry: entry,
  output: {
    path: 'dist',
    filename: "bundle-[name].js"
  },
  resolve: {
    modulesDirectories: ['', 'node_modules','assets/styles']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?optional[]=runtime&stage=0'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"}
    ]
  }
}
