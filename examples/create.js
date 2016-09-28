require('..')
  .create('cnodejs api测试信息请忽略', '我是用来测试的,请忽略')
  .then(function(response){
    console.log(response)
  }).catch(function (err) {
    console.log(err)
  })