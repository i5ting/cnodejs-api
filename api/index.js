const requireDirectory = require('require-directory');

function r(token) {
  if (token) {
    process.env.CNODE_TOKEN = token
  } else {
    console.log('请提供授权token作为参数')
  }
  
  if (!process.env.CNODE_URL) {
    process.env.CNODE_URL = 'https://cnodejs.org'
  }
  
  if (!process.env.CNODE_TOKEN) {
    debug('请提供授权token，然后配置export.CNODE_TOKEN=xxxx')
    console.log('请提供授权token，然后配置export.CNODE_TOKEN=xxxx')
    return
  }
  
  return requireDirectory(module);
}


module.exports = process.env.CNODE_TOKEN ? requireDirectory(module): r;