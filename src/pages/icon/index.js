import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Icon 图标',
  'usingComponents': {
    'i-icon': '/iview/icon/index',
    'i-grid': '/iview/grid/index',
    'i-grid-item': '/iview/grid-item/index'
  }
}

}
