<template>
<div>
<i-panel title="三种尺寸"></i-panel>

<i-grid>
    <i-grid-item i-class="item">
        <i-spin size="small"></i-spin>
    </i-grid-item>
    <i-grid-item i-class="item">
        <i-spin></i-spin>
    </i-grid-item>
    <i-grid-item i-class="item">
        <i-spin size="large"></i-spin>
    </i-grid-item>
</i-grid>

<i-panel title="居中固定"></i-panel>

<div class="container">
    <i-spin fix></i-spin>
</div>

<i-panel title="自定义内容"></i-panel>

<i-grid>
    <i-grid-item i-class="item">
        <i-spin custom>加载中...</i-spin>
    </i-grid-item>
    <i-grid-item i-class="item">
        <i-spin custom>
            <i-icon type="refresh" size="20" i-class="icon-load"></i-icon>
            <div>Loading</div>
        </i-spin>
    </i-grid-item>
    <i-grid-item i-class="item">
        <i-spin custom>
            <div class="loading"></div>
        </i-spin>
    </i-grid-item>
</i-grid>

<i-panel title="切换显示状态"></i-panel>

<div class="spin-article">
    <div class="title">登金陵凤凰台</div>
    <div class="name">李白</div>
    <div class="article">
        <div>凤凰台上凤凰游，凤去台空江自流。</div>
        <div>吴宫花草埋幽径，晋代衣冠成古丘。</div>
        <div>三山半落青天外，二水中分白鹭洲。</div>
        <div>总为浮云能蔽日，长安不见使人愁。</div>
    </div>

    <i-spin size="large" fix v-if="spinShow"></i-spin>
</div>

<div class="switch">
    <i-switch :value="switch1" @change="onSwitchChange"></i-switch>
</div>
</div>
</template>

<script>
export default {

  data () {
    return {'spinShow': true, 'switch1': false}
  },

  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    },
    onSwitchChange ({mp: { detail }}) {
      const value = detail.value
      this.setData({
        switch1: !!value,
        spinShow: !value
      })
    }

  }

}
</script>

<style>
.item{
    height: 100px;
    text-align: center;
}
.container{
    display: block;
    width: 200px;
    height: 100px;
    margin: 0 auto;
    position: relative;
    border: 1px solid #eee;
}

@keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
}
.icon-load{
    animation: ani-demo-spin 1s linear infinite;
}

.loading{
    display: inline-block;
    margin-right: 12px;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 50%;
    border: 2px solid #2d8cf0;
    border-color: #2d8cf0 #2d8cf0 #2d8cf0 transparent;
    animation: loading-spin 0.6s linear;
    animation-iteration-count: infinite;
}

@keyframes loading-spin {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}

.spin-article{
    width: 100%;
    height: 200px;
    padding: 10px;
    position: relative;
    border: 1px solid #eee;
    text-align: center;
    box-sizing: border-box;
}
.title{
    font-size: 22px;
}
.name{
    color: #999;
    font-style: normal;
    font-size: 14px;
}
.switch{
    margin: 10px;
}
</style>
