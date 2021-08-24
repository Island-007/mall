// 用来配置路径的别名，方便路径的寻找
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      // set 第一个参数：设置的别名 第二个参数：设置的路径
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('assets', resolve('./src/assets'))
      .set('network', resolve('./src/network'))
      .set('common', resolve('./src/common'))
  }
}