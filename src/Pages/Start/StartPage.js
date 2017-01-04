import { Node } from 'tweed'

export default class StartPage {
  constructor (...children) {
    this._children = children
  }

  render () {
    return (
      <div>
        {this._children.map((c) => c.render())}
      </div>
    )
  }
}
