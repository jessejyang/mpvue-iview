import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'InputNumber 数字输入框',
  'usingComponents': {
    'i-input-number': '/iview/input-number/index',
    'i-panel': '/iview/panel/index'
  }
}

}
