/** @jsx Node */

import { Node } from 'tweed'
import style from './Root.css'
import Header from './Header/Header'
import LinkMenuItem from './Header/LinkMenuItem'
import Scroll from './Window/Scroll'
import BrowserRouter, { HashHistory } from 'tweed-router/browser'
import routes from './routes'

export default class Root {
  static async make () {
    const scroll = new Scroll()

    const router = await BrowserRouter.make(routes, new HashHistory())

    return new Root(
      new Header(
        scroll,
        router,
        new LinkMenuItem('Home', '/'),
        new LinkMenuItem('Docs', '/docs'),
        new LinkMenuItem('GitHub', 'https://github.com/tweedjs/tweed', { target: '_blank' })
      ),
      router
    )
  }

  constructor (header, router) {
    this._header = header
    this._router = router
  }

  render () {
    const className = this._router.isLoading
      ? style.mainLoading
      : style.main
    return (
      <div className={className}>
        {this._header}
        {this._router}
      </div>
    )
  }
}
