const GA_OBJECT = 'ga'

export default class GoogleAnalytics {
  constructor () {
    this._setUpGlobalObject()
  }

  static wrapRoutes (routes) {
    const analytics = new GoogleAnalytics()
    const wrapped = {}

    for (const route in routes) {
      wrapped[route] = async function (...args) {
        const response = await routes[route](...args)

        setTimeout(() =>
          analytics.pageView(window.location.hash.slice(1)),
          300
        )

        return response
      }
    }

    return wrapped
  }

  _setUpGlobalObject () {
    function GA (...args) {
      GA.q.push(args)
    }

    GA.l = 1 * new Date()
    GA.q = [
      ['create', 'UA-90744704-1', 'auto']
    ]

    window['GoogleAnalyticsObject'] = GA_OBJECT
    window[GA_OBJECT] = GA
  }

  get _globalObject () {
    return window[GA_OBJECT]
  }

  _send (...args) {
    this._globalObject('send', ...args)
  }

  pageView (path) {
    this._send('pageview', path)
  }
}
