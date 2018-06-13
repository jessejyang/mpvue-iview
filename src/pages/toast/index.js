import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Toast 轻提示',
  'usingComponents': {
    'i-toast': '/iview/toast/index',
    'i-button': '/iview/button/index'
  }
}

}
