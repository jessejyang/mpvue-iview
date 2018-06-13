import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Message 全局提醒',
  'usingComponents': {
    'i-message': '/iview/message/index',
    'i-button': '/iview/button/index'
  }
}

}
