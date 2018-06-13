import Vue from 'vue'
import App from './index.vue'

const app = new Vue(App)
app.$mount()

export default {
  config:
{
  'navigationBarTitleText': 'Checkbox 复选',
  'usingComponents':
    {
      'i-panel': '/iview/panel/index',
      'i-button': '/iview/button/index',
      'i-checkbox-group': '/iview/checkbox-group/index',
      'i-checkbox': '/iview/checkbox/index'
    }
}

}
