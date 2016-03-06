var path = require('path');
var webpack = require('webpack');
var Html = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index',
    vendors: ['react']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]-[hash].js',
    publicPath: ''
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new Html({
      title: 'webpack-babel-react-development-tools',
      filename: 'index.html',
      template: path.join(__dirname, 'src/template/index.ejs')
    }),
    new webpack.optimize.CommonsChunkPlugin('vendors', '[name]-[hash].js'),
    new ExtractTextPlugin('style-[contenthash].css')
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/, loaders: ['babel'], include: path.join(__dirname, 'src'), exclude: /node_modules/
      },{
        test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')
      },{
        test: /\.(png|jpg)$/, loader: 'url?limit=25000'
      },{
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },{
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },{
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },{
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
