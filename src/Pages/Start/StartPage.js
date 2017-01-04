import { Node } from 'tweed'

export default class StartPage {
  constructor (hero) {
    this._hero = hero
  }

  render () {
    return (
      <div>{this._hero}</div>
    )
  }
}
