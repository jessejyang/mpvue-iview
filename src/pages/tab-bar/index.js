import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'TabBar 标签栏',
  'usingComponents': {
    'i-tab-bar': '/iview/tab-bar/index',
    'i-tab-bar-item': '/iview/tab-bar-item/index',
    'i-panel': '/iview/panel/index'
  }
}

}
