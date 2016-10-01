#!/usr/bin/env node

const fs = require('fs')
const debug = require('./api/debug')
const cache = require('./cache')
var api = require('./api')

if (!process.env.CNODE_TOKEN) {
  debug('请提供授权token，然后配置export.CNODE_TOKEN=xxxx')
  console.log('请提供授权token，然后配置export.CNODE_TOKEN=xxxx')
}

const argv = require('yargs')
  .usage('Usage: $0 [options]')
  .option('file', {
    alias: 'f',
    describe: 'choose a file, default README.md'
  })
  .option('open', {
    alias: 'o',
    describe: 'open in browser'
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

if (argv.t || argv.title) {
  title = argv.t ? argv.t : argv.title
}

debug(title)
debug(content)

if (cache.exist()) {
  _update()
} else {
  var config = {
    title: title,
    file: file,
    tab: 'share',
    topic_id: ''
  }

  // create topic on cnodejs.org
  _create(title, content)
}

function _create (title, content) {
  api.create(title, content)
    .then(function (response) {
      // 发布成功之后应该记下topic id = 57eb2ab8ea2fa420446d4366
      // 以便日后更新之用
      debug(response)
      var o = JSON.parse(response)
      config.topic_id = o['topic_id']

      debug(config)

      cache.set(config)
      console.log('发帖成功')

      _open(config.topic_id)
    }).catch(function (err) {
      debug(err)
    })
}

function _update () {
  var topic = cache.get()

  debug(topic)

  if (topic) {
    topic['title'] = title
  }

  if (content) {
    topic['content'] = content
  }

  api.update(topic).then(function (response) {
    debug(response)
    console.log('编辑帖子成功，地址如下')

    _open(topic.topic_id)
  }).catch(function (err) {
    console.log(err)
  })
}

function _open (topicId) {
  var url = 'https://cnodejs.org/topic/' + topicId
  console.log('    ' + url)

  if (argv.o || argv.open) {
    require('open')(url)
  }
}
