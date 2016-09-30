const fs = require('fs')
const request = require('request-promise')
const debug = require('./debug')
// post /topics/update 编辑主题
//
// 接收 post 参数
//
// accesstoken String 用户的 accessToken
// topic_id String 主题id
// title String 标题
// tab String 目前有 ask share job
// content String 主体内容
// 
// 返回值示例
//
// {success: true, topic_id: '5433d5e4e737cbe96dcef312'}

module.exports = function update(topic) {
  if (!topic.topic_id) {
    console.log('编辑主题时topic_id是必须参数，请填写')
  }
  
  var new_topic = topic
  
  new_topic['accesstoken'] = process.env.CNODE_TOKEN
  new_topic['content'] = fs.readFileSync(topic.file).toString()

  debug(process.env.CNODE_TOKEN)
  debug(new_topic)
  
  return request.post({
    url:'https://cnodejs.org/api/v1/topics/update', 
    form: new_topic
  }, function(err,httpResponse,httpResponse){
     /* ... */ 
    debug(err)
    debug(httpResponse)
    debug(httpResponse)
  })
}
