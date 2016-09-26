#!/usr/bin/env node

const debug = require('debug')('cnodejs')

if (!process.env.CNODE_TOKEN) {
  debug('请提供授权token，然后配置export.CNODE_TOKEN=xxxx')
  console.log('请提供授权token，然后配置export.CNODE_TOKEN=xxxx')
}
