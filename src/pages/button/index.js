import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Button 按钮',
  'usingComponents': {
    'i-button': '/iview/button/index',
    'i-panel': '/iview/panel/index'
  }
}

}
