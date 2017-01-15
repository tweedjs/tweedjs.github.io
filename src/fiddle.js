import * as Tweed from 'tweed'
import * as DOMRender from 'tweed/render/dom'

window.require = (module) => {
  switch (module) {
    case 'tweed':
      return Tweed
    case 'tweed/render/dom':
      return DOMRender
    default:
      throw new Error(`The module ${module} is not included in the JSFiddle bundle.`)
  }
}
