import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Rate 评分',
  'usingComponents': {
    'i-rate': '/iview/rate/index',
    'i-cell-group': '/iview/cell-group/index',
    'i-cell': '/iview/cell/index'
  }
}

}
