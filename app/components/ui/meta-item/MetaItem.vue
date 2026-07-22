<template>
  <span class="meta-item">
    <UiAppIcon class="meta-item__icon" :name="icon" :width="16" :height="16" />
    <span class="meta-item__text">{{ text }}</span>
  </span>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--gray);

  &__text {
    font-family: var(--ff-secondary);
    font-size: var(--fs-12);
    font-weight: 400;
    line-height: 1.4;
  }
}
</style>
