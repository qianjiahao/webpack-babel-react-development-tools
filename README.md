###简易ES6开发环境搭建

    git clone git@github.com:qianjiahao/ES6-dev.git

    npm run start

    browers localhost:5000/webpack-dev-server/bundle 

#### 每次启动会删除旧文件

    ------------>
    Deleting ===> bundle-fetch.js
    Deleting ===> bundle-index.js
    ------------>
    Hash: 22705f0606402a85fbdd
    Version: webpack 1.11.0
    Time: 1461ms
              Asset     Size  Chunks             Chunk Names
    bundle-fetch.js  1.42 kB       0  [emitted]  fetch
    bundle-index.js   645 kB       1  [emitted]  index
        + 163 hidden modules
    

#### 将需要打包的文件及对应路径添加至entry

    var entry = {
      'index': './app/index.js',
      'fetch': './app/fetch.js'
    }
