import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'ActionSheet 动作面板',
  'usingComponents': {
    'i-action-sheet': '/iview/action-sheet/index',
    'i-button': '/iview/button/index',
    'i-message': '/iview/message/index'
  }
}

}
