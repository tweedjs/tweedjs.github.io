/** @jsx VirtualNode */

import { VirtualNode } from 'tweed'
import Layout from './Layout'
import style from './DocsPage.css'

export default class DocsPage {
  title = 'Docs ‹ Tweed'

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
            <h4 class={style.title}>{name}</h4>
            <p class={style.description}>{description}</p>
          </div>,
          { class: style.link }
        )
      ))
    )
  }
}
