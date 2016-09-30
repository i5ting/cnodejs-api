const fs = require('fs')
const cacheFile = process.cwd() + '/.cnode.json'

module.exports = {
  set: function (obj) {
    var str = JSON.stringify(obj, null, 2); 
    fs.writeFileSync(cacheFile, str);
  },
  get: function () {
    var str = fs.readFileSync(cacheFile)
    return JSON.parse(str)
  },
  exist: function() {
    return fs.existsSync(cacheFile)
  }
}