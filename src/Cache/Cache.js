export default class Cache {
  constructor (driver) {
    this._driver = driver
  }

  has (key) {
    return this._driver.has(key)
  }

  get (key) {
    return this._driver.get(key)
  }

  set (key, value) {
    this._driver.set(key, value)
  }

  async remember (key, milliseconds, fetch) {
    if (this.has(key)) {
      const { value, timestamp } = this.get(key)

      if (Date.now() - timestamp < milliseconds) {
        return value
      }
    }

    const value = await fetch()

    this.set(key, { value, timestamp: Date.now() })

    return value
  }
}
