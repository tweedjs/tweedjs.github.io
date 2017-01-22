/** @jsx Node */

import { Node } from 'tweed'
import Hero from './Hero'
// import ScrollHint from './ScrollHint'
// import Examples from './Examples'
// import CodeExample from './CodeExample'

export default class StartPage {
  title = 'Tweed – An OO JS UI Library'

  constructor (...children) {
    this._children = children
  }

  static load () {
    return new StartPage(
      new Hero(),
      // new ScrollHint(scroll),
      // new Examples(
      //   new CodeExample()
      // )
    )
  }

  render () {
    return (
      <div>
        {this._children.map((c) => c.render())}
      </div>
    )
  }
}
