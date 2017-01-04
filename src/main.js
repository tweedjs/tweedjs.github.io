import 'babel-polyfill'

import { Engine } from 'tweed'
import DOMRenderer from 'tweed/render/dom'
import Root from './Root'

const engine = new Engine(
  new DOMRenderer(document.querySelector('#app'))
)

Root.make().then(engine.render.bind(engine))
