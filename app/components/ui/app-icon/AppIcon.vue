<template>
  <svg :class="iconClass" :width.attr="width" :height.attr="height" aria-hidden="true">
    <use :href.attr="`#${name}`" />
  </svg>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
  iconClass: {
    type: String,
    default: "main-icon",
  },
})
</script>

<style lang="scss" scoped>
.main-icon {
  display: flex;
  flex-shrink: 0;
}
</style>
