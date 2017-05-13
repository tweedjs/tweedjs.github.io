/** @jsx VirtualNode */

import { VirtualNode } from 'tweed'
import Layout from './Layout'
import style from './Article.css'
import style2 from './DocsSectionPage.css'

export default class DocsSubsectionPage {
  static load (router, box, section, subsection, manifest) {
    return new DocsSubsectionPage(
      box,
      router,
      section,
      subsection,
      new Layout(router, manifest)
    )
  }

  constructor (box, router, section, subsection, layout) {
    this.title = `${subsection.headers.title} ‹ ${section.name} ‹ Docs ‹ Tweed`

    this._box = box
    this._router = router
    this._section = section
    this._subsection = subsection
    this._layout = layout
  }

  render () {
    const nextIndex = this._section.subsections
      .map((s) => s.slug)
      .indexOf(this._subsection.slug) + 1
    const nextSubsection = this._section.subsections[nextIndex]
    const isLast = nextSubsection == null

    return this._layout.render(this._subsection.headers.title,
      <article class={style.article}>
        {this._resolveContent()}
        <div class={style2.wrapper}>
          {isLast ? (
            this._router.link(
              '/docs',
              'Back to docs',
              { class: style2.link }
            )
          ) : (
            this._router.link(
              `/docs/${this._section.slug}/${nextSubsection.slug}`,
              'Next: ' + nextSubsection.headers.title,
              { class: style2.link }
            )
          )}
        </div>
      </article>
    )
  }

  _resolveContent () {
    const { examples, html } = this._subsection.content

    return html.split('<example-slot></example-slot>')
      .map((html) => <div innerHTML={html} />)
      .reduce((sections, preExample, index) => {
        if (examples.length <= index) {
          return sections.concat(preExample)
        }
        return sections.concat(preExample, this._example(examples[index]))
      }, [])
  }

  _example ({ javascript, typescript, fiddle }) {
    return this._box.render({
      'JavaScript': javascript,
      'TypeScript': typescript
    }, fiddle)
  }
}
