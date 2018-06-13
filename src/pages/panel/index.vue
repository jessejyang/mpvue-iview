<template>
<div>
<i-panel title="标题" hide-top>
    <div style="padding: 15px;">头部距离为 0 的 Panel</div>
</i-panel>

<i-panel title="标题">
    <div style="padding: 15px;">带有标题的 Panel</div>
</i-panel>

<i-panel title="标题" :hide-border="true">
    <div style="padding: 15px;">无边框的 Panel</div>
</i-panel>
</div>
</template>

<script>
export default {

  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    }

  }

}
</script>


