/** @jsx Node */

import { Node, mutating } from 'tweed'
import style from './CodeBox.css'

export default class CodeBox {
  @mutating selectedTab = 'JavaScript'

  render (tabs) {
    const languages = Object.keys(tabs)
      .map((name) => [name, tabs[name]])
    const codeElement = document.createElement('code')
    codeElement.innerHTML = tabs['JavaScript']
    let code = codeElement.textContent

    return (
      <div className=''>
        <ul className={style.toolbar}>
          {languages.map(([name, code]) => {
            const classes = this.selectedTab === name
              ? style.tabActive
              : style.tab
            return (
              <li>
                <button
                  className={classes}
                  on-click={() => { this.selectedTab = name }}
                >
                  {name}
                </button>
              </li>
            )
          })}
          <li className={style.rightButton}>
            {this._fiddleLink(code)}
          </li>
        </ul>
        {languages
          .filter(([name]) => name === this.selectedTab)
          .map(([, code]) => <div innerHTML={code} />)}
      </div>
    )
  }

  _fiddleLink (code) {
    const fiddleLinkElement = document.createElement('a')
    fiddleLinkElement.href = '/fiddle.js'
    if (!/^import (.*?) from 'tweed'/.test(code)) {
      const [, mainClass] = /^class (\w+)/.exec(code)
      code = [
        "import { Node, mutating } from 'tweed'\n" +
        "import render from 'tweed/render/dom'",
        code,
        `render(new ${mainClass}(), document.querySelector('#app'))`
      ].join('\n\n')
    }

    return (
      <form
        method='POST'
        target='_blank'
        action='http://jsfiddle.net/api/post/library/pure/'
      >
        <input type='hidden' name='html' value="<div id='app'></div>" />
        <input type='hidden' name='js' value={code} />
        <input type='hidden' name='panel_js' value='3' />
        <input type='hidden' name='resources' value={fiddleLinkElement.href} />
        <input type='submit' value='JSFiddle' className={style.tab} />
      </form>
    )
  }
}
