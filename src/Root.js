/** @jsx Node */

import { Node } from 'tweed'
import style from './Root.css'
import Header from './Header/Header'
import LinkMenuItem from './Header/LinkMenuItem'
import StartPage from './Pages/Start/StartPage'
import Hero from './Pages/Start/Hero'
import ScrollHint from './Pages/Start/ScrollHint'
import Examples from './Pages/Start/Examples'
import CodeExample from './Pages/Start/CodeExample'
import Scroll from './Window/Scroll'

export default class Root {
  static async make () {
    const scroll = new Scroll()

    return new Root(
      new Header(
        scroll,
        new LinkMenuItem('Examples', '#examples'),
        new LinkMenuItem('GitHub', 'https://github.com/tweedjs/tweed', { target: '_blank' })
      ),
      new StartPage(
        new Hero(),
        new ScrollHint(scroll),
        new Examples(
          new CodeExample()
        )
      )
    )
  }

  constructor (header, page) {
    this._header = header
    this._page = page
  }

  render () {
    return (
      <div className={style.main}>
        {this._header}
        {this._page}
      </div>
    )
  }
}
