###[重构]JavaScript 2015 Development Tools 开发/生产环境

### Base on Webpack Babel React and Gulp

###Development[开发模式]

    npm run build  (执行打包并watch文件变化，持续build)

    npm run gulp-watch  (需要重新开一个终端，让gulp来watch打包后的文件变化，同步刷新浏览器，ps:浏览器需要安装livereload插件)

    npm run start-build  (需要重新开一个终端，起服务)

###Production[生产环境]

    npm run prod  (执行打包并压缩文件，生成source-map ps:文件会在dist文件夹中)

    npm run start-prod  (起服务)

####Babel configuration

    .babelrc 文件中配置
    // 需安装 babel-preset-es2015 babel-preset-react 模块

    {
      "presets": ["es2015", "react"]
    }
