/** @jsx Node */

import { mutating, Node } from 'tweed'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-jsx'
import './PrismTweed'

import style from './Example.css'

export default class Example {
  @mutating _selectedIndex = 0

  constructor (Ex) {
    this._result = new Ex()
    this._source = Ex.source
  }

  _page () {
    const keys = Object.keys(this._source)

    if (this._selectedIndex === -1) {
      return (
        <div className={style.resultPage}>
          {this._result}
        </div>
      )
    }

    for (let i = 0; i < keys.length; i++) {
      if (i === this._selectedIndex) {
        return (
          <pre className={style.codeWrapperInBox}>
            <code
              className={style.code}
              innerHTML={highlight(this._source[keys[i]], languages.tweed)}
            />
          </pre>
        )
      }
    }

    return ''
  }

  _tabs () {
    return (
      <ul className={style.tabs}>
        {Object.keys(this._source).map((label, index) => (
          <li>
            <button
              className={this._selectedIndex === index ? style.selectedTab : style.tab}
              on-click={() => { this._selectedIndex = index }}
            >
              {label}
            </button>
          </li>
        ))}
        <li>
          <button
            className={this._selectedIndex === -1 ? style.selectedResultTab : style.resultTab}
            on-click={() => { this._selectedIndex = -1 }}
          >
            Result
          </button>
        </li>
      </ul>
    )
  }

  render () {
    return (
      <div>
        {this._tabs()}
        <div className={style.wrapper}>
          <div className={style.half}>
            {this._page()}
          </div>
          <div className={style.resultHalf}>
            {this._result}
          </div>
        </div>
      </div>
    )
  }

  static shell (code) {
    return (
      <pre className={style.codeWrapper}>
        <code
          className={style.code}
          innerHTML={
            code
              .replace(/</g, '&lt;')
              .replace(/>/g, '&gt;')
              .replace(/(^|\n)\$/g, (m) =>
                `<span class='token prompt'>${m}</span>`
              )
          }
        />
      </pre>
    )
  }

  static html (code) {
    return (
      <pre className={style.codeWrapper}>
        <code
          className={style.code}
          innerHTML={highlight(code, languages.tweed)}
        />
      </pre>
    )
  }
}
