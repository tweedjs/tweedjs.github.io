import { Node } from 'tweed'
import style from './CodeExample.css'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'

export default class CodeExample {
  render ({ code, component }) {
    return (
      <div className={style.example}>
        <div className={style.codeWrapper}>
          <pre className={style.code}>
            <code innerHTML={highlight(code, languages.typescript)} />
          </pre>
        </div>
        <div className={style.componentWrapper}>
          <div className={style.component}>{component}</div>
        </div>
      </div>
    )
  }
}
