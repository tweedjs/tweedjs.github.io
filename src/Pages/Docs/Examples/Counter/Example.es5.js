var Tweed = require('tweed')
var n = Tweed.Node
var mutating = Tweed.mutating

module.exports = Counter

function Counter () {
  this._count = 0
}

mutating(Counter.prototype, '_count')

Counter.prototype.render = function () {
  return (
    n('button', { 'on-click': function () { this._count++ } },
      'Clicked ', this._count, ' times'
    )
  )
}
