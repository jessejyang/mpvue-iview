import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Radio 单选',
  'usingComponents':
    {
      'i-panel': '/iview/panel/index',
      'i-button': '/iview/button/index',
      'i-radio-group': '/iview/radio-group/index',
      'i-radio': '/iview/radio/index'
    }
}

}
