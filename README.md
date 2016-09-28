# cnodejs-api

client for https://cnodejs.org/api

[![gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cnodejs-api/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![NPM version](https://img.shields.io/npm/v/cnodejs-api.svg?style=flat-square)](https://www.npmjs.com/package/cnodejs-api)
[![Build](https://travis-ci.org/i5ting/cnodejs-api.svg?branch=master)](https://travis-ci.org/i5ting/cnodejs-api)
[![codecov.io](https://codecov.io/github/i5ting/cnodejs-api/coverage.svg?branch=master)](https://codecov.io/github/i5ting/cnodejs-api?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

- [x] create topic
- [ ] 支持把markdown发布到cnode

## Install

```
$ npm i -g cnodejs
```


需要在环境变量配置用户的cnode token

```
export CNODE_TOKEN=xxx
```

## Usages

### cli

```

```

### for api
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

## Debug

```
$ DEBUG=cnode cnode
```
## Reffer

- https://github.com/i5ting/ava-practice
