/** @jsx Node */

import { Node } from 'tweed'
import Layout from './Layout'
import style from './DocsPage.css'

export default class DocsPage {
  static load (router, manifest) {
    return new DocsPage(router, manifest, new Layout(router, manifest))
  }

  constructor (router, manifest, layout) {
    this._router = router
    this._manifest = manifest
    this._layout = layout
  }

  render () {
    return this._layout.render(
      'Documentation',
      "To make learning about Tweed easy and fun, we've made a few different series. " +
      'Pick the one that suits your experience!',
      this._manifest.sections.map(({ name, slug, description, subsections }) => (
        this._router.link(
          `/docs/${slug}/${subsections[0].slug}`,
          <div>
            <h4 className={style.title}>{name}</h4>
            <p className={style.description}>{description}</p>
          </div>,
          { className: style.link }
        )
      ))
    )
  }
}
