<template>
<div>
<i-panel title="主色"></i-panel>
<i-row>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item primary">
                <div class="color-item-title">Primary</div>
                <div class="color-item-content">#2d8cf0</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item light-primary">
                <div class="color-item-title">Light Primary</div>
                <div class="color-item-content">#5cadff</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item dark-primary">
                <div class="color-item-title">Dark Primary</div>
                <div class="color-item-content">#2b85e4</div>
            </div>
        </i-card>
    </i-col>
</i-row>
<i-panel title="辅助色"></i-panel>
<i-row>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item success">
                <div class="color-item-title">Success</div>
                <div class="color-item-content">#19be6b</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item warning">
                <div class="color-item-title">Warning</div>
                <div class="color-item-content">#ff9900</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item error">
                <div class="color-item-title">Error</div>
                <div class="color-item-content">#ed3f14</div>
            </div>
        </i-card>
    </i-col>
</i-row>
<i-panel title="中性色"></i-panel>
<i-row>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item title">
                <div class="color-item-title">标题 Title</div>
                <div class="color-item-content">#1c2438</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item content">
                <div class="color-item-title">正文 Content</div>
                <div class="color-item-content">#495060</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item sub-color">
                <div class="color-item-title">辅助 Sub Color</div>
                <div class="color-item-content">#ed3f14</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item disabled">
                <div class="color-item-title">失效 Disabled</div>
                <div class="color-item-content">#bbbec4</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item border dark">
                <div class="color-item-title">边框 Border</div>
                <div class="color-item-content">#dddee1</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item divider dark">
                <div class="color-item-title">分割线 Divider</div>
                <div class="color-item-content">#e9eaec</div>
            </div>
        </i-card>
    </i-col>
    <i-col i-class="color-col" span="12">
        <i-card i-class="color">
            <div slot="content" class="color-item background dark">
                <div class="color-item-title">背景 Background</div>
                <div class="color-item-content">#f8f8f9</div>
            </div>
        </i-card>
    </i-col>
</i-row>
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
.color{
    padding: 0 !important;
    border: none !important;
}
.color-col{
    margin-bottom: 16px;
}
.color-item{
    width: 100%;
    color: #fff;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
}
.color-item.dark{
    color: #657180;
}
.color-item-title{
    padding: 6px 6px 0;
    font-size: 14px;
}
.color-item-content{
    padding: 6px;
    font-size: 12px;
    opacity: 0.7;
}

.color-item.primary{
    background: #2d8cf0;
}
.color-item.light-primary{
    background: #5cadff;
}
.color-item.dark-primary{
    background: #2b85e4;
}
.color-item.success{
    background: #19be6b;
}
.color-item.warning{
    background: #ff9900;
}
.color-item.error{
    background: #ed3f14;
}
.color-item.title{
    background: #1c2438;
}
.color-item.content{
    background: #495060;
}
.color-item.sub-color{
    background: #80848f;
}
.color-item.disabled{
    background: #bbbec4;
}
.color-item.border{
    background: #dddee1;
}
.color-item.divider{
    background: #e9eaec;
}
.color-item.background{
    background: #f8f8f9;
}
</style>
