#!/usr/bin/env node

var fs = require('fs')
var debug = require('debug')('weide')

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var home = '/Applications/微信web开发者工具.app/'


if(undefined !== process.env.CNODE_TOKEN) {
  home = process.env.CNODE_TOKEN + '/'
}

