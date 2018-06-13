import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Drawer 抽屉',
  'usingComponents': {
    'i-drawer': '/iview/drawer/index',
    'i-button': '/iview/button/index'
  }
}

}
