import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Input 输入框',
  'usingComponents': {
    'i-input': '/iview/input/index',
    'i-button': '/iview/button/index',
    'i-panel': '/iview/panel/index'
  }
}

}
