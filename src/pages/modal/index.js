import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Modal 对话框',
  'usingComponents': {
    'i-modal': '/iview/modal/index',
    'i-button': '/iview/button/index',
    'i-message': '/iview/message/index'
  }
}

}
