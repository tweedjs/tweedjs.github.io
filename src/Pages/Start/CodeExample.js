import { Node } from 'tweed'
import style from './CodeExample.css'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'

export default class CodeExample {
  render ({ title, code, component }) {
    return (
      <div className={style.example}>
        <div className={style.codeWrapper}>
          {title ? (
            <h1 className={style.title}>{title}</h1>
          ) : ''}
          <pre className={style.code}>
            <code innerHTML={highlight(code, languages.typescript)} />
          </pre>
        </div>
        <div className={style.componentWrapper}>
          <div className={title ? style.componentWithTitle : style.component}>{component}</div>
        </div>
      </div>
    )
  }
}
