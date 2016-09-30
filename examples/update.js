'use strict'

var api = require('../api')

if (!process.env.CNODE_TOKEN) {
  // '3d5ba965-747e-45ab-b879'，不正确，需自己设置
  api = require('../api')('3d5ba965-747e-45ab-b879')
}

// var topic = {
//   topic_id: '57eb2ab8ea2fa420446d4366',
//   title: 'cnodejs api updated2',
//   content: 'cnodejs api updated',
//   tab: 'share'
// }

var topic = require(process.cwd() + '/.cnode.json')

console.log(topic)

// api.update(topic)
//   .then(function(response){
//     console.log(response)
//   }).catch(function (err) {
//     console.log(err)
//   })