/** @jsx VirtualNode */

import { VirtualNode } from 'tweed'
import Layout from './Layout'
import style from './DocsSectionPage.css'

export default class DocsSectionPage {
  static load (router, section, manifest) {
    return new DocsSectionPage(
      router,
      section,
      new Layout(router, manifest)
    )
  }

  constructor (router, section, layout) {
    this.title = `${section.name} ‹ Docs ‹ Tweed`

    this._router = router
    this._section = section
    this._layout = layout
  }

  render () {
    const { name, description, subsections, slug } = this._section

    return this._layout.render(name, description,
      <div class={style.wrapper}>
        {this._router.link(`/docs/${slug}/${subsections[0].slug}`, 'Start Series', { class: style.link })}
      </div>
    )
  }
}
