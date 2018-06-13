import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Alert 警告提示',
  'usingComponents': {
    'i-alert': '/iview/alert/index'
  }
}

}
