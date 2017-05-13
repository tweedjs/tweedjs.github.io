/** @jsx VirtualNode */

import { VirtualNode } from 'tweed'
import style from './Hero.css'

export default class Hero {
  render () {
    return (
      <div>
        <h1 class={style.heading}>
          <img
            src='/tweed-logo.svg'
            alt='Tweed'
            class={style.logo}
          />
        </h1>
        <h2 class={style.heading}>An Object Oriented JavaScript UI Library</h2>
      </div>
    )
  }
}
