# cnode api && 快速发布README.md到cnode

[![Join the chat at https://gitter.im/cnodejs-api/Lobby](https://badges.gitter.im/cnodejs-api/Lobby.svg)](https://gitter.im/cnodejs-api/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

client for https://cnodejs.org/api

[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cnodejs-api/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://img.shields.io/npm/v/cnodejs-api.svg?style=flat-square)](https://www.npmjs.com/package/cnodejs-api)
[![Build](https://travis-ci.org/i5ting/cnodejs-api.svg?branch=master)](https://travis-ci.org/i5ting/cnodejs-api)
[![codecov.io](https://codecov.io/github/i5ting/cnodejs-api/coverage.svg?branch=master)](https://codecov.io/github/i5ting/cnodejs-api?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

- [x] create topic
- [x] update topic
- [x] 支持cli把markdown发布到cnode（首次为创建，以后为修改）
- [ ] 主题首页
- [ ] 主题详情
- [ ] 收藏主题
- [ ] 取消主题
- [ ] 用户所收藏的主题
- [ ] 新建评论
- [ ] 为评论点赞
- [ ] 用户详情
- [ ] 获取未读消息数
- [ ] 获取已读和未读消息
- [ ] 标记全部已读


## Install

```
$ npm i -g cnodejs
```

需要在环境变量配置用户的cnode token

## Usages

### cli

快速发布README.md到cnode，只需要2步

1） 需要在环境变量配置用户的cnode token
  
```
export CNODE_TOKEN=xxx
```

2） 执行cnode命令，默认文件是README.md

```
Usage: cnode [options]

Options:
  --file, -f  choose a file, default README.md
  --open, -o  open in browser
  -h, --help  Show help                                                [boolean]
```

如果第一次发布成功，会生成.cnode.json文件作为缓存文件，以后再次执行cnode命令会更新。

### api

```
$ npm i -S cnodejs
```

then

```
var api = require('cnodejs')

if (!process.env.CNODE_TOKEN) {
  api = require('cnodejs')('3d5ba965-747e-45ab-b879')
}
```

### create topic

```
api.create('cnodejs api测试信息请忽略', '我是用来测试的,请忽略')
  .then(function(response){
    console.log(response)
  }).catch(function (err) {
    console.log(err)
  })
```

### update topic

```
var topic = {
  topic_id: '57eb2ab8ea2fa420446d4366',
  title: 'cnodejs api updated2',
  content: 'cnodejs api updated',
  tab: 'share'
}

api.update(topic)
  .then(function(response){
    console.log(response)
  }).catch(function (err) {
    console.log(err)
  })
```

说明： `topic_id` 为必选项，目前api中其他参数不填即为空

## 针对于使用cnode建立的站点 

```
$ export CNODE_URL=xxx
```

其他同上

## Debug

```
$ DEBUG=cnode cnode
```

## Reffer

- https://github.com/i5ting/ava-practice

