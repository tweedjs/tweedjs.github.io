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
      <header className={className}>
        <nav role='navigation'>
          <ul className={style.menu}>
            {this._items.map(({ href, title, props }) => (
              <li>
                <a
                  className={style.menuItem}
                  href={href}
                  {...props}
                >{title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
}
