/** @jsx Node */

import { Node } from 'tweed'
import Hero from './Hero'
import Demo from './Demo'
import style from './StartPage.css'

export default class StartPage {
  title = 'Tweed – An OO JS UI Library'

  constructor (...children) {
    this._children = children
  }

  static load () {
    return new StartPage(
      new Hero(),
      new Demo()
    )
  }

  render () {
    return (
      <div class={style.wrapper}>
        <div>
          {this._children.map((c) =>
            <div class={style.child}>{c.render()}</div>
          )}
        </div>
      </div>
    )
  }
}
