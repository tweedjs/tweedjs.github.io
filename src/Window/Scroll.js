import { mutating } from 'tweed'

const LIMIT = 100

export default class Scroll {
  @mutating isAtTop = true

  constructor () {
    window.addEventListener('scroll', this._onScroll.bind(this))
  }

  _onScroll () {
    if (this.isAtTop && window.scrollY > LIMIT) {
      this.isAtTop = false
    } else if (!this.isAtTop && window.scrollY <= LIMIT) {
      this.isAtTop = true
    }
  }
}
