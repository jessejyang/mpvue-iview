import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': '组件中引用 Button',
  'usingComponents': {
    'i-button': '/iview/button/index',
    'i-panel': '/iview/panel/index',
    'i-message': '/iview/message/index'
  }
}

}
