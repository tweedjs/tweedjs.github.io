export default class LocalStorageCacheDriver {
  has (key) {
    return this.get(key) != null
  }

  get (key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  set (key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}
