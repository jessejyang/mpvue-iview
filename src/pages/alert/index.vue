<template>
<div>
<i-alert>
    An info prompt
</i-alert>
<i-alert type="success">
    An success prompt
</i-alert>
<i-alert type="warning">
    An warning prompt
</i-alert>
<i-alert type="error">
    An error prompt
</i-alert>
<i-alert type="info">
    An info prompt
    <div slot="desc">Content of prompt. Content of prompt.</div>
</i-alert>
<i-alert type="success">
    An success prompt
    <div slot="desc">Content of prompt. Content of prompt.</div>
</i-alert>
<i-alert type="warning">
    An warning prompt
    <div slot="desc">Content of prompt. Content of prompt.</div>
</i-alert>
<i-alert type="error">
    An error prompt
    <div slot="desc">Content of prompt. Content of prompt.</div>
</i-alert>
<i-alert type="info" show-icon>
    An info prompt
</i-alert>
<i-alert type="success" show-icon>
    An success prompt
</i-alert>
<i-alert type="warning" show-icon>
    An warning prompt
</i-alert>
<i-alert type="error" show-icon>
    An error prompt
</i-alert>
<i-alert show-icon desc>
    An info prompt
    <div slot="desc">Content of prompt. Content of prompt.</div>
</i-alert>
<i-alert type="success" show-icon desc>
    An success prompt
    <div slot="desc">Content of prompt. Content of prompt.</div>
</i-alert>
<i-alert type="warning" show-icon desc>
    An warning prompt
    <div slot="desc">Content of prompt. Content of prompt.</div>
</i-alert>
<i-alert type="error" show-icon desc>
    An error prompt
    <div slot="desc">Content of prompt. Content of prompt.</div>
</i-alert>
<i-alert closable @close="handleClick">
    An info prompt
</i-alert>
<i-alert type="success" show-icon desc closable @close="handleClick">
    An success prompt
    <div slot="desc">Content of prompt. Content of prompt.</div>
</i-alert>

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
      console.log('alert-close')
    }
  }

}
</script>


