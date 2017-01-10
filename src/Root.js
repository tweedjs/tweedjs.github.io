/** @jsx Node */

import { Node } from 'tweed'
import style from './Root.css'
import Header from './Header/Header'
import LinkMenuItem from './Header/LinkMenuItem'
import StartPage from './Pages/Start/StartPage'
import DocsPage from './Pages/Docs/DocsPage'
import Scroll from './Window/Scroll'

import BrowserRouter from 'tweed-router/browser'

export default class Root {
  static async make () {
    const scroll = new Scroll()

    const router = await BrowserRouter.make({
      '/': () => StartPage.make(scroll),
      '/docs/': DocsPage.make
    })

    return new Root(
      new Header(
        scroll,
        router,
        new LinkMenuItem('Home', '/'),
        new LinkMenuItem('Docs', '/docs/'),
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
    return (
      <div className={style.main}>
        {this._header}
        {this._router}
      </div>
    )
  }
}
