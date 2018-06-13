import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Spin 加载中',
  'usingComponents': {
    'i-spin': '/iview/spin/index',
    'i-panel': '/iview/panel/index',
    'i-row': '/iview/row/index',
    'i-col': '/iview/col/index',
    'i-grid': '/iview/grid/index',
    'i-grid-item': '/iview/grid-item/index',
    'i-icon': '/iview/icon/index',
    'i-switch': '/iview/switch/index'
  }
}

}
