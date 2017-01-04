/** @jsx Node */

import { Node } from 'tweed'

export default class Root {
  static async make () {
    return new Root()
  }

  render () {
    return (
      <div>Working Example</div>
    )
  }
}
