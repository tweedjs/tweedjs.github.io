import DocsRepository from './Data/DocsRepository'
import CodeBox from './Window/CodeBox'

const box = new CodeBox()

export default {
  async '/' (router) {
    const { default: StartPage } =
      await import('./Pages/Start/StartPage')

    const repo = await DocsRepository.load()

    return StartPage.load(router)
  },

  async '/docs' (router) {
    const { default: DocsPage } =
      await import('./Pages/Docs/DocsPage')

    const repo = await DocsRepository.load()

    return DocsPage.load(
      router,
      repo.manifest
    )
  },

  async '/docs/:section' (router, { section }) {
    const { default: DocsSectionPage } =
      await import('./Pages/Docs/DocsSectionPage')

    const repo = await DocsRepository.load()

    return DocsSectionPage.load(
      router,
      repo.section(section),
      repo.manifest
    )
  },

  async '/docs/:section/:subsection' (router, { section, subsection }) {
    const { default: DocsSubsectionPage } =
      await import('./Pages/Docs/DocsSubsectionPage')

    const repo = await DocsRepository.load()

    return DocsSubsectionPage.load(
      router,
      box,
      repo.section(section),
      await repo.subsection(section, subsection),
      repo.manifest
    )
  }
}
