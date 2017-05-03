let cache = {}

async function get (url) {
  if (cache[url] == null) {
    cache[url] = await window
      .fetch(url)
      .then((r) => r.json())
  }
  return cache[url]
}

export default class DocsRepository {
  constructor (manifest) {
    this.manifest = manifest
  }

  static async load () {
    return new DocsRepository(
      await get('/docs/manifest.json')
    )
  }

  section (slug) {
    const matching = this.manifest.sections
      .filter((s) => s.slug === slug)[0]

    if (matching == null) {
      throw new Error(`Section ${slug} was not found`)
    }

    return matching
  }

  async subsection (sectionSlug, subsectionSlug) {
    const section = this.section(sectionSlug)

    const matching = section.subsections
      .filter((s) => s.slug === subsectionSlug)[0]

    if (matching == null) {
      throw new Error(`Subsection ${sectionSlug}/${subsectionSlug} was not found`)
    }

    return Object.assign({}, matching, {
      content: await get(matching.url)
    })
  }
}
