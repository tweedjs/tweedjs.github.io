import { mutating, Node } from 'tweed'

export default class Counter {
  @mutating _count = 0

  render () {
    return (
      <button on-click={() => this._count++}>
        Clicked {this._count} times
      </button>
    )
  }
}
