import { mutating, Node } from 'tweed'
import style from './GitHubStarsMenuItem.css'

export default class GitHubStarsMenuItem {
  @mutating loading = true
  @mutating stars = 0

  constructor (cache, repository, menuItem) {
    this._cache = cache
    this._repository = repository
    this._menuItem = menuItem

    this._load()
  }

  get _key () {
    return `GitHubRepo(${this._repository})`
  }

  async _load () {
    const FIVE_HOURS = 1000 * 60 * 60 * 5

    const payload = await this._cache.remember(
      this._key,
      FIVE_HOURS,
      async () => {
        const response = await window.fetch(
          `https://api.github.com/repos/${this._repository}`,
          {
            headers: {
              'Accept': 'application/vnd.github.v3+json'
            }
          }
        )

        if (response.status !== 200) {
          return
        }

        return response.json()
      }
    )

    this.stars = payload.stargazers_count
    this.loading = false
  }

  render () {
    const className = this.loading
      ? style.bubbleHidden
      : style.bubble

    return [
      this._menuItem.render(),
      <a
        class={className}
        href={`https://github.com/${this._repository}`}
        target='_blank'
      >
        {this.stars} ★
      </a>
    ]
  }
}
