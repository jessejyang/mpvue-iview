import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Steps 步骤条',
  'usingComponents': {
    'i-steps': '/iview/steps/index',
    'i-step': '/iview/step/index',
    'i-button': '/iview/button/index'
  }
}

}
