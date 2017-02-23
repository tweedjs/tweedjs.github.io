/** @jsx Node */

import { mutating, Node } from 'tweed'
import style from '../Docs/Article.css'

export default class Demo {
  @mutating.sync _time = new Date()

  constructor () {
    setInterval(() => {
      this._time = new Date()
    }, 1000)
  }

  render () {
    return (
      <div class={style.article}>
        <pre>
          <code>
            <span class='token keyword'>export default class</span>
            <span class='token class-name'> App</span>
            <span class='token punctuation'> {'{'}</span>

            <br />

            <span class='token keyword'>  @mutating</span>
            <span class='token plain'> now</span>
            <span class='token operator'> =</span>
            <span class='token keyword'> new</span>
            <span class='token class-name'> Date</span>
            <span class='token punctuation'>()</span>

            <br />
            <br />

            <span class='token keyword'>  constructor</span>
            <span class='token punctuation'> () {'{'}</span>

            <br />

            <span class='token function'>    setInterval</span>
            <span class='token punctuation'>(()</span>
            <span class='token operator'> =></span>
            <span class='token keyword'> this</span>
            <span class='token punctuation'>.</span>
            <span class='token plain'>now</span>
            <span class='token operator'> =</span>
            <span class='token keyword'> new</span>
            <span class='token class-name'> Date</span>
            <span class='token punctuation'>(),</span>
            <span class='token number'> 100</span>
            <span class='token punctuation'>)</span>

            <br />

            <span class='token punctuation'>  {'}'}</span>

            <br />
            <br />

            <span class='token function'>  render</span>
            <span class='token punctuation'> () {'{'}</span>

            <br />

            <span class='token keyword'>    return</span>
            <span class='token punctuation'> (</span>

            <br />

            <span class='token tag'>{'      <strong>'}</span>

            <br />

            <span class='token plain'>        now = </span>
            <span class='token punctuation'>{'{'}</span>
            <span class='token keyword'>this</span>
            <span class='token punctuation'>.</span>
            <span class='token plain'>now</span>
            <span class='token punctuation'>.</span>
            <span class='token function'>toLocaleString</span>
            <span class='token punctuation'>(){'}'}</span>

            <br />

            <span class='token tag'>{'      </strong>'}</span>

            <br />

            <span class='token punctuation'>    )</span>

            <br />

            <span class='token punctuation'>  {'}'}</span>

            <br />

            <span class='token punctuation'>{'}'}</span>
          </code>
        </pre>

        <strong>now = {this._time.toLocaleString()}</strong>
      </div>
    )
  }
}
