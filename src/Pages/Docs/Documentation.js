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
          is all that's needed output some markup.
        </p>

        {this._hello}

        <p>
          Tweed components can hold mutable state. As long as the properties that
          are mutable are annotated with <code>@mutating</code>, the component
          will automatically update when the property is updated.
        </p>

        {this._counter}
      </article>
    )
  }
}
