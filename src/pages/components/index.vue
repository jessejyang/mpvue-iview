<template>
  <div>
    <mi-button @click="handleClick"></mi-button>
    <i-button @click="handleClick('from page')">page 按钮</i-button>

    <i-message id="message" />
  </div>
</template>

<script>
import { $Message } from '@/utils/index'
import MiButton from '@/components/MiButton'

export default {
  components: { MiButton },
  data () {

  },
  methods: {
    handleClick (msg) {
      $Message({
        content: msg
      })
    }
  }
}
</script>

<style>
</style>
