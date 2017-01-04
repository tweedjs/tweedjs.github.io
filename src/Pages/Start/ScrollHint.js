import { mutating, Node } from 'tweed'
import style from './ScrollHint.css'

const LIMIT = 100

export default class ScrollHint {
  @mutating _shown = true

  constructor () {
    window.addEventListener('scroll', this._onScroll.bind(this))
  }

  _onScroll () {
    if (this._shown && window.scrollY > LIMIT) {
      this._shown = false
    } else if (!this._shown && window.scrollY <= LIMIT) {
      this._shown = true
    }
  }

  render () {
    const className = this._shown
      ? style.hintShown
      : style.hintHidden

    return (
      <span className={className}>
        Scroll down for examples 👇
      </span>
    )
  }
}
