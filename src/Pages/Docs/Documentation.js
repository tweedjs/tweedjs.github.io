/** @jsx Node */

import { Node } from 'tweed'
import Example from './Example'

import Hello from './Examples/Hello'
import Counter from './Examples/Counter'

export default class Documentation {
  _hello = new Example(Hello)
  _counter = new Example(Counter)

  render () {
    return (
      <article>
        <p>
          Tweed is a library for creating user interfaces on the web. It is designed
          to encourage careful management of dependencies, letting you organize your
          code the way you like it.
        </p>
        <p>
          At its core, it's all about classes. A simple <code>render</code> method
          is all that's needed to output some markup.
        </p>

        {this._hello}

        <p>
          Tweed components can hold mutable state. As long as the properties that
          are mutable are annotated with <code>@mutating</code>, the component
          will automatically rerender when the property is updated.
        </p>

        {this._counter}

        <h2>Getting Started</h2>

        <p>
          Trying something new should not be a hassle. Your time is precious!
          That's why there's a project
          called <a href='https://github.com/tweedjs/tweed-peek'>Tweed Peek</a> which
          makes it easy to try out Tweed with nothing more than a text editor.
        </p>

        {Example.html(`
<!DOCTYPE html>
<html>
  <head>
    <script src='https://tweedjs.github.io/peek.js'></script>
  </head>
  <body>
    <div id='app'></div>

    <script type='application/javascript+tweed'>
      import { Node } from 'tweed'
      import render from 'tweed/render/dom'

      class Hello {
        render () {
          return <h1>Hello World</h1>
        }
      }

      render(new Hello(), app)
    </script>
  </body>
</html>
        `.trim())}
      </article>
    )
  }
}
