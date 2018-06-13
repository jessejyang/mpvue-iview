import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Progress 进度条',
  'usingComponents': {
    'i-progress': '/iview/progress/index',
    'i-button': '/iview/button/index'
  }
}

}
