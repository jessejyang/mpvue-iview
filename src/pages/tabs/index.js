import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Tabs 标签页',
  'usingComponents': {
    'i-tabs': '/iview/tabs/index',
    'i-tab': '/iview/tab/index',
    'i-panel': '/iview/panel/index'
  }
}

}
