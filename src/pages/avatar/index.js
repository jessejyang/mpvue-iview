import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Avatar 头像',
  'usingComponents': {
    'i-avatar': '/iview/avatar/index',
    'i-row': '/iview/row/index',
    'i-col': '/iview/col/index',
    'i-panel': '/iview/panel/index'
  }
}

}
