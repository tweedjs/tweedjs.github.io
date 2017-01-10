import { languages } from 'prismjs/components/prism-core'

languages.tweed = languages.extend('jsx')

languages.tweed.annotation = {
  pattern: /@\w+/
}
