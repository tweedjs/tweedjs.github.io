var n = require('tweed').Node

function Hello () {}

Hello.prototype.render = function () {
  return n('span', null, 'Hello World')
}

module.exports = Hello
