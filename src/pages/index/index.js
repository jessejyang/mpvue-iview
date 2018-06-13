import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Mpvue iView Weapp',
  'usingComponents': {
    'i-panel': '/iview/panel/index',
    'i-cell-group': '/iview/cell-group/index',
    'i-cell': '/iview/cell/index'
  }
}

}
