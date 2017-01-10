var n = require('tweed').Node

function Hello () {}

Hello.prototype.render = function () {
  return n('h1', null, 'Hello World')
}

module.exports = Hello
