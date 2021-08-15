<template>
  <div
    class="ez-switch"
    :class="{ 'is-checked': modelValue }"
    @click="handleClick"
  >
    <span class="ez-switch_core" ref="core">
      <span class="ez-switch_button"></span>
    </span>
    <input type="checkbox" class="ez-switch_input" :name="name" ref="input">
  </div>
</template>

<script>
export default {
  name: 'EzSwitch',
  data() {
    return {}
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      defualt: ''
    }
  },
  methods: {
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        let color = this.modelValue ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    },
    async handleClick() {
      this.$emit('update:modelValue', !this.modelValue)
      await this.$nextTick()
      this.setColor()
      // 控制checkbox的值,input值同步value值
      this.$refs.input.checked = this.modelValue
    },
  },
  
  mounted() {
    // 修改开关颜色
    this.setColor()
    // 控制checkbox的值,input值同步value值
    this.$refs.input.checked = this.modelValue
  },
}
</script>

<style lang="scss" scoped>
.ez-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .ez-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .ez-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

// 选中样式
.is-checked {
  .ez-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .ez-switch_button {
      transform: translateX(20px);
    }
  }
}

// 隐藏input标签
.ez-switch_input{
  position:absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
