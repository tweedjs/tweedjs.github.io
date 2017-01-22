/** @jsx Node */

import { Node } from 'tweed'
import style from './Root.css'
import Header from './Header/Header'
import LinkMenuItem from './Header/LinkMenuItem'
import Scroll from './Window/Scroll'
import BrowserRouter, { HashHistory } from 'tweed-router/browser'
import routes from './routes'
import GoogleAnalytics from './Analytics/GoogleAnalytics'

export default class Root {
  static async make () {
    const scroll = new Scroll()

    const router = await BrowserRouter.make(
      GoogleAnalytics.wrapRoutes(routes),
      new HashHistory()
    )

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
    const areaClass = this._router.isLoading
      ? style.areaLoading
      : style.area

    return (
      <div className={style.main}>
        {this._header}
        <div className={areaClass}>
          {this._router}
        </div>
      </div>
    )
  }
}
