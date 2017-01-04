import { Node } from 'tweed'
import style from './Hero.css'

export default class Hero {
  render () {
    return (
      <div className={style.wrapper}>
        <h1 className={style.heading}>
          <img
            src='./tweed-logo.svg'
            alt='Tweed'
            className={style.logo}
          />
        </h1>
        <h2 className={style.heading}>An Object Oriented JavaScript UI Library</h2>
      </div>
    )
  }
}
