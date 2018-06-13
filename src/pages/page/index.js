import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Page 分页',
  'usingComponents': {
    'i-page': '/iview/page/index',
    'i-icon': '/iview/icon/index',
    'i-panel': '/iview/panel/index'
  }
}

}
