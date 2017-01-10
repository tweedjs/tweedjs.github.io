import Example from 'babel!./Example.babel'
import babelSource from 'raw!./Example.babel'
import typescriptSource from 'raw!./Example.tsx'
import javascriptSource from 'raw!./Example.es5'

Example.source = {
  'JS (Babel)': babelSource,
  'Type​Script': typescriptSource,
  'JS (ES5)': javascriptSource
}

export default Example
