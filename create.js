// require('..').create('多岁的发生的范德萨', '我是用来测试的我是用来测试的我是用来测试的我是用来测试的我是用来测试的我是用来测试的我是用来测试的 胜多负少的')

import test from 'ava';

test.cb('POST /api/v1/topics', function (t) {
  require('..').create('cnodejs api测试信息请忽略', '我是用来测试的我是用来测试的我是用来测试的我是用来测试的我是用来测试的我是用来测试的我是用来测试的 请忽略')
    .then(function(response){
      t.true(response["success"])
      t.end()
    }).catch(function (err) {
      t.fail('server error ' + err)
      t.end()
    })
});




