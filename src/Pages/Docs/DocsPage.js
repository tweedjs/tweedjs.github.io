/** @jsx Node */

import { Node } from 'tweed'

import style from './DocsPage.css'
import Documentation from './Documentation'

export default class DocsPage {
  static make () {
    return new DocsPage(new Documentation())
  }

  constructor (documentation) {
    this._documentation = documentation
  }

  render () {
    return (
      <div>
        <section>
          {this._header()}
          <div className={style.article}>
            {this._documentation}
          </div>
        </section>
      </div>
    )
  }

  _header () {
    return (
      <header className={style.header}>
        <h1 className={style.headerTitle}>Documentation</h1>
      </header>
    )
  }
}
