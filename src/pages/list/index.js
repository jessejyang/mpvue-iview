import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'List 列表',
  'usingComponents': {
    'i-cell-group': '/iview/cell-group/index',
    'i-cell': '/iview/cell/index',
    'i-panel': '/iview/panel/index',
    'i-icon': '/iview/icon/index',
    'i-switch': '/iview/switch/index'
  }
}

}
