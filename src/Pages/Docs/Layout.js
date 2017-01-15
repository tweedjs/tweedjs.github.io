/** @jsx Node */

import { Node } from 'tweed'
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
      <section className={style.wrapper}>
        <header className={style.header}>
          <h2 className={style.title}>{title}</h2>
          {description ? (
            <p className={style.description}>{description}</p>
          ) : null}
        </header>
        <div className={style.columns}>
          <aside hook-update={this._setAside} className={style.aside}>{this._menu()}</aside>
          <main className={style.main}>{content}</main>
          <div className={style.filler} />
        </div>
      </section>
    )
  }

  _setAside (old, vnode) {
    this._aside = vnode.elm
  }

  _menu () {
    const menuClass = this._aside && this._aside.getBoundingClientRect().top < 50
      ? style.menuSticky
      : style.menu

    return (
      <ul className={menuClass}>
        {this._manifest.sections.map(this._sectionMenu)}
      </ul>
    )
  }

  _sectionMenu ({ slug, name, subsections }) {
    const url = `/docs/${slug}`
    const classes = this._router.currentPath.indexOf(url) === 0
      ? style.menuItemSectionActive
      : style.menuItemSection

    return (
      <li className={classes}>
        {this._router.link(url, name)}
        <ul className={style.subMenu}>
          {subsections.map(this._subsectionItem.bind(this, slug))}
        </ul>
      </li>
    )
  }

  _subsectionItem (slug, { slug: subSlug, headers: { title } }) {
    const url = `/docs/${slug}/${subSlug}`
    const classes = this._router.isActive(url)
      ? style.menuItemSubsectionActive
      : style.menuItemSubsection

    return (
      <li className={classes}>
        {this._router.link(url, title)}
      </li>
    )
  }
}
