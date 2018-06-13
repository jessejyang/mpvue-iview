import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Grid 宫格',
  'usingComponents': {
    'i-grid': '/iview/grid/index',
    'i-grid-item': '/iview/grid-item/index',
    'i-grid-icon': '/iview/grid-icon/index',
    'i-grid-label': '/iview/grid-label/index',
    'i-icon': '/iview/icon/index',
    'i-row': '/iview/row/index'
  }
}

}
