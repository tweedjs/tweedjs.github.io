/** @jsx VirtualNode */

import { VirtualNode } from 'tweed'
import Hero from './Hero'
import Demo from './Demo'
import CTA from './CTA'
import style from './StartPage.css'

export default class StartPage {
  title = 'Tweed – An OO JS UI Library'

  constructor (...children) {
    this._children = children
  }

  static load (router) {
    return new StartPage(
      new Hero(),
      new Demo(),
      new CTA(router)
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
