###简易ES6开发环境搭建

    git clone git@github.com:qianjiahao/ES6-dev.git

    npm run build   // 单纯打包（纯纯滴）

    npm run dev     // 开发环境

    npm run deploy  // 生产环境

    browers localhost:3000/webpack-dev-server

#### 每次启动会删除旧文件

    正在读取 --> /Users/qianjiahao/ES6-dev/dist
    正在删除 --> bundle-index.js
    
    Hash: 15c762e1ead2e33285db
    Version: webpack 1.12.2
    Time: 1397ms
              Asset    Size  Chunks             Chunk Names
    bundle-index.js  645 kB       0  [emitted]  index
        + 162 hidden modules

#### 将需要打包的文件及对应路径添加至entry

    var entry = {
      'index': './app/index.js'
    }
