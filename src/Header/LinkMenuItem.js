import style from './LinkMenuItem.css'

export default class LinkMenuItem {
  constructor (router, title, href, props = {}) {
    this._router = router

    this.title = title
    this.href = href
    this.props = props
  }

  render () {
    return this._router.link(
      this.href, this.title, Object.assign({},
        this.props,
        { className: style.menuItem }
      )
    )
  }
}
