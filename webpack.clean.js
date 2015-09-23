var fs = require('fs');
var path = require('path');
var colors = require('colors');

module.exports = function(dirPath) {
  return function() {
    var isExist = fs.existsSync(dirPath);
    var filePathContent = fs.readdirSync(dirPath);

    // 判断目录是否存在
    if(isExist) {
      try{
        console.log('正在读取 --> ' + colors.yellow(dirPath));

        // 判断目录是否为空
        if(filePathContent && filePathContent.length) {

          // 读取目录中的文件名
          filePathContent.map(function(filePath) {

            // 判断文件格式
            if(/\.js$/.test(filePath)) {
              try{
                console.log('正在删除 --> ' + colors.cyan(filePath));
                // 删除文件
                fs.unlinkSync(path.join(dirPath,filePath))
              }catch(e) {
                console.log('文件 --> ' + colors.cyan(filePath) + ' 删除失败');
                console.log(colors.red(e));
              }
            }
          })
        }else{
          console.log('目录 --> ' + colors.red(dirPath) + ' 读取为空');
        }
      }catch(e) {
        console.log('目录 --> ' + colors.red(dirPath) + ' 读取失败');
        console.log(colors.red(e));
      }
    }else{
      console.log('目录 --> ' + colors.rad(dirPath) + ' 不存在');
    }
  }
}
