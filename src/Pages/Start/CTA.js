/** @jsx Node */

import { Node } from 'tweed'
import style from './CTA.css'

export default class CTA {
  constructor (router) {
    this._router = router
  }

  render () {
    return (
      <div class={style.wrapper}>
        {this._router.link('/docs', 'Read the Docs', { class: style.button })}
        <a href='https://github.com/tweedjs/tweed' class={style.button} target='_blank'>Source Dive</a>
      </div>
    )
  }
}
