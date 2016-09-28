#!/usr/bin/env node

const fs = require('fs')
const debug = require('debug')('cnode')

const argv = require('yargs')
  .usage('Usage: $0 [options]')
  .option('file', {
    alias: 'f',
    describe: 'choose a file, default README.md'
  })
  .help('h')
  .alias('h', 'help')
  .argv

// debug(argv)
var file = 'README.md'

if (argv.f || argv.file) {
  file = argv.f ? argv.f : argv.file
}

debug(file)

const content = fs.readFileSync(file).toString()

// 获取第一个标题 title
// 获取内容，即README.md  content
// 默认为分享  tab
var headings = require('headings')(file)
var title = headings[0]['text']

debug(title)
debug(content)

// create topic on cnodejs.org
create(title, content)

function create (title, content) {
  var api = require('./api')

  if (!process.env.CNODE_TOKEN) {
    debug('请提供授权token，然后配置export.CNODE_TOKEN=xxxx')
    console.log('请提供授权token，然后配置export.CNODE_TOKEN=xxxx')
    return
  }

  api.create(title, content)
    .then(function (response) {
      // 发布成功之后应该记下topic id = 57eb2ab8ea2fa420446d4366
      // 以便日后更新之用
      debug(response)
    }).catch(function (err) {
      debug(err)
    })
}
