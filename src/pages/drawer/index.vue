<template>
<div>
<div class="demo">
    <i-button @click="toggleLeft1" type="ghost">左边弹出1</i-button>
    <i-button @click="toggleLeft2" type="primary">左边弹出2</i-button>
    <i-button @click="toggleRight1" type="ghost">右边弹出1</i-button>
    <i-button @click="toggleRight2" type="primary">右边弹出2</i-button>
    <i-drawer mode="left" :visible="showLeft1" @close="toggleLeft1">
        <div class="demo-container">
            单击遮罩层关闭
        </div>
    </i-drawer>
    <i-drawer mode="left" :visible="showLeft2" :mask-closable="false">
        <div class="demo-container">
            禁止单击遮罩关闭
            <i-button @click="toggleLeft2" type="primary">关闭</i-button>
        </div>
    </i-drawer>
    <i-drawer mode="right" :visible="showRight1" @close="toggleRight1">
        <div class="demo-container">
            单击遮罩层关闭
        </div>
    </i-drawer>
    <i-drawer mode="right" :visible="showRight2" :mask-closable="false">
        <div class="demo-container">
            禁止单击遮罩关闭
            <i-button @click="toggleRight2" type="primary">关闭</i-button>
        </div>
    </i-drawer>
</div>

</div>
</template>

<script>
export default {

  data () {
    return {'showLeft1': false, 'showLeft2': false, 'showRight1': false, 'showRight2': false}
  },

  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    },
    toggleLeft1 () {
      this.setData({
        showLeft1: !this.showLeft1
      })
    },
    toggleLeft2 () {
      this.setData({
        showLeft2: !this.showLeft2
      })
    },
    toggleRight1 () {
      this.setData({
        showRight1: !this.showRight1
      })
    },
    toggleRight2 () {
      this.setData({
        showRight2: !this.showRight2
      })
    }
  }

}
</script>

<style>
.demo-container{
	width:50vw;
	height: 100vh;
	background:#fff;
}
</style>
