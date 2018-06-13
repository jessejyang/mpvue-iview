import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Layout 栅格布局',
  'usingComponents': {
    'i-panel': '/iview/panel/index',
    'i-row': '/iview/row/index',
    'i-col': '/iview/col/index'
  }
}

}
