/** @jsx Node */

import { Node } from 'tweed'
import style from './Root.css'
import Header from './Header/Header'
import StartPage from './Pages/Start/StartPage'
import Hero from './Pages/Start/Hero'

export default class Root {
  static async make () {
    return new Root(
      new Header(),
      new StartPage(
        new Hero()
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
