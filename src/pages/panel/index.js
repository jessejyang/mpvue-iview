import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Panel 面板',
  'usingComponents': {
    'i-panel': '/iview/panel/index'
  }
}

}
