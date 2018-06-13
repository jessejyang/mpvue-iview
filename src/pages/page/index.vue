<template>
<div>
<i-panel title="带有文字的按钮"></i-panel>

<i-page :current="current" total="5" @change="handleChange">
    <div slot="prev">Prev</div>
    <div slot="next">Next</div>
</i-page>

<i-panel title="带有文字和图标的按钮"></i-panel>

<i-page :current="current" total="5" @change="handleChange">
    <div slot="prev">
        <i-icon type="return"></i-icon>
        上一步
    </div>
    <div slot="next">
        下一步
        <i-icon type="enter"></i-icon>
    </div>
</i-page>

<i-panel title="隐藏数字"></i-panel>

<i-page :current="current" total="5" simple @change="handleChange">
    <div slot="prev">Prev</div>
    <div slot="next">Next</div>
</i-page>

<i-panel title="只显示数字"></i-panel>

<i-page :current="current" total="5" mode="number" @change="handleChange"></i-page>

<i-panel title="显示点"></i-panel>

<i-page :current="current" total="5" mode="pointer" @change="handleChange"></i-page>
</div>
</template>

<script>
export default {

  data () {
    return {'current': 1}
  },

  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    },
    handleChange ({mp: { detail }}) {
      const type = detail.type
      if (type === 'next') {
        this.setData({
          current: this.current + 1
        })
      } else if (type === 'prev') {
        this.setData({
          current: this.current - 1
        })
      }
    }
  }

}
</script>


