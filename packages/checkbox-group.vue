<template>
  <div class="ez-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'EzCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    modelValue: {
      type: Array
    }
  }
}
</script>