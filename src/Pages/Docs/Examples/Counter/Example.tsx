import { mutating, Node } from 'tweed'

export default class Counter {
  @mutating private _count = 0

  public render (): Node {
    return (
      <button on-click={() => this._count++}>
        Clicked {this._count} times
      </button>
    )
  }
}
