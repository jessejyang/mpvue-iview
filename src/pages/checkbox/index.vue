<template>
<div>
<i-panel title="group-水果">
    <i-checkbox-group :current="current" @change="handleFruitChange">
        <i-checkbox v-for="item in fruit" :position="position" :key="item.id" :value="item.name">
        </i-checkbox>
    </i-checkbox-group>
</i-panel>

<i-button @click="handleClick" type="ghost">切换复选框位置</i-button>

<i-panel title="checkbox-动物">
    <i-checkbox :value="animal" :disabled="disabled" :checked="checked" @change="handleAnimalChange">
    </i-checkbox>
</i-panel>

<i-button @click="handleDisabled" type="ghost">切换disabled状态</i-button>

</div>
</template>

<script>
export default {

  data () {
    return {'fruit': [{'id': 1, 'name': '香蕉'}, {'id': 2, 'name': '苹果'}, {'id': 3, 'name': '西瓜'}, {'id': 4, 'name': '葡萄'}], 'current': ['苹果', '葡萄'], 'position': 'left', 'animal': '熊猫', 'checked': false, 'disabled': false}
  },

  methods: {
    setData (data) {
      Object.keys(data).forEach(key => {
        this[key] = data[key]
      })
    },
    handleFruitChange ({mp: { detail = {} }}) {
      const index = this.current.indexOf(detail.value)
      index === -1 ? this.current.push(detail.value) : this.current.splice(index, 1)
      this.setData({
        current: this.current
      })
    },
    handleClick () {
      this.setData({
        position: this.position.indexOf('left') !== -1 ? 'right' : 'left'
      })
    },
    handleDisabled () {
      this.setData({
        disabled: !this.disabled
      })
    },
    handleAnimalChange ({mp: { detail = {} }}) {
      this.setData({
        checked: detail.current
      })
    }
  }

}
</script>


