'use strict'

var api = require('../api')

if (!process.env.CNODE_TOKEN) {
  api = require('../api')('3d5ba965-747e-45ab-b879-cae06136ea7e')
}

api.create('cnodejs api测试信息请忽略', '我是用来测试的,请忽略')
  .then(function(response){
    console.log(response)
  }).catch(function (err) {
    console.log(err)
  })