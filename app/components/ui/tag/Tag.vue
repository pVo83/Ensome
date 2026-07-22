<template>
  <span class="tag" :class="{ 'tag--active': active }">
    {{ tag }}
  </span>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.tag {
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 3px 11px;
  border: 1px solid var(--background);
  border-radius: var(--radius-sm);
  background-color: var(--white);
  color: var(--primary);
  font-family: var(--ff-secondary);
  font-size: var(--fs-12);
  font-weight: 600;
  line-height: 1.4;
  cursor: pointer;
  transition:
    background-color var(--trs35),
    color var(--trs35),
    border-color var(--trs35);

  &:hover {
    border-color: var(--primary);
    background-color: var(--primary);
    color: var(--white);
  }

  &--active {
    border-color: var(--primary);
    background-color: var(--primary);
    color: var(--white);
  }
}
</style>
