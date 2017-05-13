/** @jsx VirtualNode */

import { VirtualNode } from 'tweed'
import style from './Layout.css'

export default class Layout {
  constructor (router, manifest) {
    this._router = router
    this._manifest = manifest

    this._sectionMenu = this._sectionMenu.bind(this)
    this._setAside = this._setAside.bind(this)
  }

  render (title, description, content) {
    if (content == null) {
      content = description
      description = null
    }

    return (
      <section class={style.wrapper}>
        <header class={style.header}>
          <h2 class={style.title}>{title}</h2>
          {description ? (
            <p class={style.description}>{description}</p>
          ) : null}
        </header>
        <div class={style.columns}>
          <aside hook-update={this._setAside} class={style.aside}>{this._menu()}</aside>
          <main class={style.main}>{content}</main>
          <div class={style.filler} />
        </div>
      </section>
    )
  }

  _setAside ({ element }) {
    this._aside = element
  }

  _menu () {
    const menuClass = this._aside && this._aside.getBoundingClientRect().top < 50
      ? style.menuSticky
      : style.menu

    return (
      <ul class={menuClass}>
        {this._manifest.sections.map(this._sectionMenu)}
      </ul>
    )
  }

  _sectionMenu ({ slug, name, subsections }) {
    const url = `/docs/${slug}`
    const isActive = this._router.currentPath.indexOf(url) === 0
    const classes = isActive
      ? style.menuItemSectionActive
      : style.menuItemSection

    return (
      <li class={classes}>
        {this._router.link(url, name)}
        {isActive ? (
          <ul class={style.subMenu}>
            {subsections.map(this._subsectionItem.bind(this, slug))}
          </ul>
        ) : null}
      </li>
    )
  }

  _subsectionItem (slug, { slug: subSlug, headers: { title } }) {
    const url = `/docs/${slug}/${subSlug}`
    const classes = this._router.isActive(url)
      ? style.menuItemSubsectionActive
      : style.menuItemSubsection

    return (
      <li class={classes}>
        {this._router.link(url, title)}
      </li>
    )
  }
}
