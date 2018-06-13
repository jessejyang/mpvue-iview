<template>
<div>
<i-panel title="基础用法">
    <div style="padding: 16px">
        <i-input-number :value="value1" min="0" max="100" @change="handleChange1" />
    </div>
</i-panel>

<i-panel title="小数">
    <div style="padding: 16px">
        <i-input-number :value="value2" min="0" max="100" step="0.2" @change="handleChange2" />
    </div>
</i-panel>
</div>
</template>

<script>
export default {

  data () {
    return {'value1': 1, 'value2': 0.1}
  },

  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    },
    handleChange1 ({mp: { detail }}) {
      this.setData({
        value1: detail.value
      })
    },
    handleChange2 ({mp: { detail }}) {
      this.setData({
        value2: detail.value
      })
    }
  }

}
</script>


