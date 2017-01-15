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
    if (!/^import (.*?) from 'tweed'/.test(code)) {
      const [, mainClass] = /^class (\w+)/.exec(code)
      code = [
        "import { Node, mutating } from 'tweed'\n" +
        "import render from 'tweed/render/dom'",
        code,
        `render(new ${mainClass}(), document.querySelector('#app'))`
      ].join('\n\n')
    }

    const visitJSFiddle = () => {
      const form = document.createElement('form')
      form.method = 'POST'
      form.target = '_blank'
      form.action = 'https://jsfiddle.net/api/post/library/pure/'

      const htmlField = document.createElement('input')
      htmlField.name = 'html'
      htmlField.value = "<div id='app'></div>"

      const jsField = document.createElement('textarea')
      jsField.name = 'js'
      jsField.value = code

      const panelField = document.createElement('input')
      panelField.name = 'panel_js'
      panelField.value = '3'

      const fiddleLinkElement = document.createElement('a')
      fiddleLinkElement.href = '/fiddle.js'

      const resourcesField = document.createElement('input')
      resourcesField.name = 'resources'
      resourcesField.value = fiddleLinkElement.href

      form.appendChild(htmlField)
      form.appendChild(jsField)
      form.appendChild(panelField)
      form.appendChild(resourcesField)

      form.submit()
    }

    return (
      <button className={style.tab} on-click={visitJSFiddle}>JSFiddle</button>
    )
  }
}