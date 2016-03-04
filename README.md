##Introduction

基础结构参考自https://github.com/gaearon/react-transform-boilerplate
作者Dan Abramov

###react-webpack-babel-development-tools
在起基础之上添加了对主业务资源，js库资源，css资源的分离打包，和对生产环境html的模板的生成

##Usage

    git clone https://github.com/qianjiahao/webpack-babel-react-development-tools.git [your project name]
    cd [your project name]
    npm install

development
  
    npm start -> http://localhost:3000

production

    npm run build


##Detail

分离主业务与库资源

    // webpack.config.dev.js
    
    entry: {
      app: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client',
        './src/index'
      ],
      vendors: ['react']
    },

    // 将主业务与库资源分离
    // 优势：当我们更新项目时，如果库资源没有涉及更新，直接打包主业务资源即可;
    // 并且分离库资源后的主资源文件大小也非常的小，可加快文件的下载速度，节省流量。


    plugins: [
      new webpack.optimize.CommonsChunkPlugin('vendors', '[name].js'),
    ],

    // 根据我们的entry打包库资源，名字由entry的名字命名。


分离合并样式资源文件

    // 由于我们在entry的文件中引入了样式文件 src/App.js
    import './styles/common.css';

    // webpack.config.dev.js
    
    var ExtractTextPlugin = require('extract-text-webpack-plugin');
    
    module: {
      loaders: [
        {
          test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')
        }
      ]
    }

    plugins: [
      new ExtractTextPlugin('style.css')
    ],

    // 我们需要 style-loader , css-loader 模块去加载引入的资源文件，
    并通过 extract-text-webpack-plugin 来合并打包样式资源，命名为 style.css 。

加载打包图片

    // webpack.config.dev.js
    
    module: {
      loaders: [
        {
          test: /\.(png|jpg)$/, loader: 'url?limit=250000'
        }
      ]
    }

    // 我们选择加载的图片格式为png或jpg，并限定当文件小于25kb，转换为base64编码。
    // 优势：将一些小并且不常更新的图片转换base64编码后，可以减少一次或多次http请求。
    // 但这个limit应该定义成一个合适的值，因为如果将稍大些的图片转为base64后，会生成大量字符，
    // 反而降低我们的加载速度。

加载font/svg

    // webpack.config.dev.js
    
    module: {
      loaders: [
        {
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

加载Google Material icons

    // 我们使用google开源的icon库，首先引入资源文件 src/template/index.ejs 、index.html
    
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    // 本地我们需要定义一些样式  src/styles/font.css
    
    .material-icons {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;  /* Preferred icon size */
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
    }

    /* Rules for sizing the icon. */
    .material-icons.md-18 { font-size: 18px; }
    .material-icons.md-24 { font-size: 24px; }
    .material-icons.md-36 { font-size: 36px; }
    .material-icons.md-48 { font-size: 48px; }
    .material-icons.md-56 { font-size: 56px; }
    .material-icons.md-64 { font-size: 64px; }
    .material-icons.md-80 { font-size: 80px; }

    /* Rules for using icons as black on a light background. */
    .material-icons.md-dark { color: rgba(0, 0, 0, 0.54); }
    .material-icons.md-dark.md-inactive { color: rgba(0, 0, 0, 0.26); }

    /* Rules for using icons as white on a dark background. */
    .material-icons.md-light { color: rgba(255, 255, 255, 1); }
    .material-icons.md-light.md-inactive { color: rgba(255, 255, 255, 0.3); }

    // 使用时就选择合适的icon即可，注意：在react中，class需要改为className  src/App.js

    <i className="material-icons md-36">face</i>

生成html文件

    // 定义模板 src/template/index.ejs
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
        <title><%= htmlWebpackPlugin.options.title %></title>
    </head>
    <body>

        <div id="root"></div>
    </body>
    </html>

    // webpack.config.dev.js
    
    var Html = require('html-webpack-plugin');

    plugins: [
      new Html({
        title: 'webpack-babel-react-development-tools',
        filename: 'index.html',
        template: path.join(__dirname, 'src/template/index.ejs')
      }),
    ],

    // 通过工具来生成我们的模板文件，title会替换index.ejs中的title，filename定义了生成文件的名字，template定义了模板的路径，[html-webpack-plugin@2.x版本后，工具生成的资源文件会已chunk的形式自动注入]。

生产环境

    通过将文件名添加hash来强制让用户更新资源文件，防止旧文件对项目的影响。



