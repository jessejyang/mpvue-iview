<template>
  <div>
    <mi-slot @click="handleClick">
      <div slot="content">
        <!-- 感觉有必要注释，父div的slot对应的是mpvue，子div的slot对应的是MiSlot中的ICard原生组件的slot -->
        <div slot="content">我来自slot</div>
        <!-- <div slot="footer">我也是</div> -->
      </div>
    </mi-slot>
  </div>
</template>

<script>
import MiSlot from '@/components/MiSlot'
// import IButton from '../../../iview/button'

export default {
  components: { MiSlot },
  data () {

  },
  methods: {
    handleClick (msg) {
      console.log(msg)
    }
  }
}
</script>

<style>
</style>
