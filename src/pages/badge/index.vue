<template>
<div>
<div class="container">
    <div class="demo">
        <i-badge dot>
            <div class="demo-badge"></div>
        </i-badge>
    </div>
    <div class="demo">
        <i-badge count="3">
            <div class="demo-badge"></div>
        </i-badge>
    </div>
    <div class="demo">
        <i-badge count="123" overflow-count="100">
            <div class="demo-badge"></div>
        </i-badge>
    </div>
    <div class="demo">
        <i-badge count="66">
        </i-badge>
    </div>
    <div class="demo">
        <i-badge count="66" i-class-alone="demo-badge-alone">
        </i-badge>
    </div>
</div>

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

<style>
.container {
    margin: 10px;
}

.demo {
    margin: 20px;
}

.demo-badge {
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
}

.demo-badge-alone {
    background: #5cb85c!important;
}

</style>
