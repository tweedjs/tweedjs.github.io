import { mutating } from 'tweed'

const LIMIT = 100

export default class Scroll {
  @mutating position = 0
  @mutating isAtTop = true

  constructor () {
    window.addEventListener('scroll', this._onScroll.bind(this))
  }

  _onScroll () {
    this.position = window.scrollY
    this.isAtTop = window.scrollY <= LIMIT
  }
}
