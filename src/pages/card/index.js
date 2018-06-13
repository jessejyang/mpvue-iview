import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Card 卡片',
  'usingComponents': {
    'i-card': '/iview/card/index'
  }
}

}
