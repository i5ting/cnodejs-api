# cnodejs-api

client for https://cnodejs.org/api

[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cnodejs-api/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://img.shields.io/npm/v/cnodejs-api.svg?style=flat-square)](https://www.npmjs.com/package/cnodejs-api)
[![Build](https://travis-ci.org/i5ting/cnodejs-api.svg?branch=master)](https://travis-ci.org/i5ting/cnodejs-api)
[![codecov.io](https://codecov.io/github/i5ting/cnodejs-api/coverage.svg?branch=master)](https://codecov.io/github/i5ting/cnodejs-api?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

- [x] create topic
- [x] update topic
- [x] 支持cli把markdown发布到cnode
- [ ] update topic

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
$ cnode -h
Usage: cnode [options]

Options:
  --file, -f  choose a file, default README.md
  -h, --help  Show help                                                [boolean]

```

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

## Debug

```
$ DEBUG=cnode cnode
```

## Reffer

- https://github.com/i5ting/ava-practice

