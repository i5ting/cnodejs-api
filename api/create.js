var request = require('request-promise')
var debug = require('./debug')
//
// 接收 post 参数
//
// - accesstoken String 用户的 accessToken
// - title String 标题
// - tab String 目前有 ask share job
// - content String 主体内容
// 
// 返回值示例
//
// {success: true, topic_id: '5433d5e4e737cbe96dcef312'}

module.exports = function create(title, content, category) {
  var _category = 'share'
  if (category) {
    _category = category;
  }
  
  var f = {
    accesstoken: process.env.CNODE_TOKEN,
    title: title,
    content: content,
    tab: _category
  }
  
  debug(process.env.CNODE_TOKEN)
  debug(f)
  
  return request.post({
    url:'https://cnodejs.org/api/v1/topics', 
    form: f
  }, function(err,httpResponse,httpResponse){
     /* ... */ 
    debug(err)
    debug(httpResponse)
    debug(httpResponse)
  })
}
