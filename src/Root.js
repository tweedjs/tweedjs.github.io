/** @jsx Node */

import { Node } from 'tweed'
import style from './Root.css'
import Header from './Header/Header'
import StartPage from './Pages/Start/StartPage'
import Hero from './Pages/Start/Hero'
import ScrollHint from './Pages/Start/ScrollHint'
import Examples from './Pages/Start/Examples'
import CodeExample from './Pages/Start/CodeExample'

export default class Root {
  static async make () {
    return new Root(
      new Header(),
      new StartPage(
        new Hero(),
        new ScrollHint(),
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
