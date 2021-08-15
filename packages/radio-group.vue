<template>
  <div class="ez-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'EzRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    // 组件接收到了modelValue值，我们需要触发这个组件的update:modelValue事件
    // provide 与 inject  用来做祖孙之间得组件通讯
    modelValue: null
  }
}
</script>