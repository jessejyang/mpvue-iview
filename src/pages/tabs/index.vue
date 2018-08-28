<template>
<div>
<i-panel title="基本用法"></i-panel>

<i-tabs :current="current" @change="handleChange">
    <i-tab key="tab1" title="选项1"></i-tab>
    <i-tab key="tab2" title="选项2"></i-tab>
    <i-tab key="tab3" title="选项3"></i-tab>
</i-tabs>

<i-panel title="自定义主题色"></i-panel>

<i-tabs :current="current" color="#f759ab" @change="handleChange">
    <i-tab key="tab1" title="选项1"></i-tab>
    <i-tab key="tab2" title="选项2"></i-tab>
    <i-tab key="tab3" title="选项3"></i-tab>
</i-tabs>

<i-panel title="徽标"></i-panel>

<i-tabs :current="current" @change="handleChange">
    <i-tab key="tab1" title="选项1" count="3"></i-tab>
    <i-tab key="tab2" title="选项2"></i-tab>
    <i-tab key="tab3" title="选项3" dot></i-tab>
</i-tabs>

<i-panel title="滚动"></i-panel>

<i-tabs :current="current_scroll" scroll @change="handleChangeScroll">
    <i-tab key="tab1" i-class='class-test' title="选项1"></i-tab>
    <i-tab key="tab2" title="选项2"></i-tab>
    <i-tab key="tab3" title="选项3"></i-tab>
    <i-tab key="tab4" title="选项4"></i-tab>
    <i-tab key="tab5" title="选项5"></i-tab>
    <i-tab key="tab6" title="选项6"></i-tab>
    <i-tab key="tab7" title="选项7"></i-tab>
    <i-tab key="tab8" title="选项8"></i-tab>
    <i-tab key="tab9" title="选项9"></i-tab>
</i-tabs>
</div>
</template>

<script>
export default {

  data () {
    return {'current': 'tab1', 'current_scroll': 'tab1'}
  },

  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    },
    handleChange ({mp: { detail }}) {
      this.setData({
        current: detail.key
      })
    },
    handleChangeScroll ({mp: { detail }}) {
      this.setData({
        current_scroll: detail.key
      })
    }
  }

}
</script>

<style>
.class-test {
  width: 300px!important;
}
.class-test .i-badge {
  color: red!important;
}
</style>

