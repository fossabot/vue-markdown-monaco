import { configure } from '@storybook/vue'

import Vue from 'vue'

// Import your custom components.
import MarkdownEditor from '../src/Editor.vue'

// Register custom components.
Vue.component('my-button', MarkdownEditor)

function loadStories() {
  // You can require as many stories as you need.
  require('../src/stories')
}

configure(loadStories, module)