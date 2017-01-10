/** @jsx Node */

import { Node } from 'tweed'
import style from './Header.css'

export default class Header {
  constructor (scroll, router, ...items) {
    this._scroll = scroll
    this._router = router
    this._items = items
  }

  render () {
    const className = this._scroll.isAtTop
      ? style.header
      : style.stickyHeader

    return (
      <header className={className}>
        <nav role='navigation'>
          <ul className={style.menu}>
            {this._items.map(({ href, title, props }) => (
              <li>
                {this._router.link(
                  href, title, Object.assign({},
                    props,
                    { className: style.menuItem }
                  )
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
}
