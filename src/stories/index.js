import { storiesOf } from '@storybook/vue'

import MarkdownEditor from './../Editor.vue'

storiesOf('markdown-editor', module)
  .add('Default Configuration', () => ({
    components: { MarkdownEditor },
    template: '<markdown-editor/>'
  }))
