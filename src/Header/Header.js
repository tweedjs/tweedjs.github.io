/** @jsx Node */

import { Node } from 'tweed'
import style from './Header.css'

export default class Header {
  constructor (scroll, ...items) {
    this._scroll = scroll
    this._items = items
  }

  render () {
    const className = this._scroll.isAtTop
      ? style.header
      : style.stickyHeader

    return (
      <header class={className}>
        <nav role='navigation'>
          <ul class={style.menu}>
            {this._items.map((item) => (
              <li class={style.menuItem}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
}
