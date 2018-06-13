<template>
<div>
  <i-panel title="mpvue component"></i-panel>
  <i-button @click="handleClick" type='primary'>component 按钮</i-button>
</div>
</template>

<script>
export default {

  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    },
    handleClick () {
      this.$emit('click', 'from mpvue component')
    }
  }

}
</script>


