import 'whatwg-fetch'

import render from 'tweed/render/dom'

import Root from './Root'

Root.make().then((root) =>
  render(root, document.querySelector('#app'))
)
