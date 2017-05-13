/** @jsx VirtualNode */

import { VirtualNode } from 'tweed'
import style from './ScrollHint.css'

export default class ScrollHint {
  constructor (scroll) {
    this._scroll = scroll
  }

  render () {
    const className = this._scroll.isAtTop
      ? style.hintShown
      : style.hintHidden

    return (
      <span class={className}>
        Scroll down for examples 👇
      </span>
    )
  }
}
