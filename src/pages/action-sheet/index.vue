<template>
<div>
<div style='margin-top: 100px'>
    <i-button type='ghost' @click='handleOpen1'>一般用法</i-button>
    <i-button type='ghost' @click='handleOpen2'>带有提示、异步</i-button>
</div>
<i-action-sheet :visible='visible1' :actions='actions1' show-cancel @cancel='handleCancel1' @click='handleClickItem1' />
<i-action-sheet :visible='visible2' :actions='actions2' show-cancel @cancel='handleCancel2' @click='handleClickItem2' :mask-closable='false'>
    <div slot='header' style='padding: 16px;'>
        <div style='color: #444;font-size: 16px;'>确定吗？</div>
        <span>删除后无法恢复哦</span>
    </div>
</i-action-sheet>

<i-message id='message' />

</div>
</template>

<script>
const { $Message } = require('@/utils/index')

export default {
  data () {
    return {
      visible1: false,
      visible2: false,
      actions1: [
        { name: '选项1' },
        { name: '选项2' },
        { name: '去分享', icon: 'share', openType: 'share' }
      ],
      actions2: [{ name: '删除', color: '#ed3f14' }]
    }
  },
  onShareAppMessage () {
    return {
      title: 'iView Weapp',
      imageUrl: 'https://file.iviewui.com/iview-weapp-logo.png'
    }
  },

  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    },
    handleOpen1 () {
      this.setData({
        visible1: true
      })
    },
    handleCancel1 () {
      this.setData({
        visible1: false
      })
    },
    handleOpen2 () {
      this.setData({
        visible2: true
      })
    },
    handleCancel2 () {
      this.setData({
        visible2: false
      })
    },
    handleClickItem1 ({ mp: { detail } }) {
      const index = detail.index + 1

      $Message({
        content: '点击了选项' + index
      })
    },
    handleClickItem2 () {
      const action = [...this.actions2]
      action[0].loading = true

      this.setData({
        actions2: action
      })

      setTimeout(() => {
        action[0].loading = false
        this.setData({
          visible2: false,
          actions2: action
        })
        $Message({
          content: '删除成功！',
          type: 'success'
        })
      }, 2000)
    }
  }
}
</script>


