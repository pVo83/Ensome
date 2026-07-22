<template>
  <blockquote class="blockquote">
    <p class="blockquote__text">“{{ text }}”</p>
  </blockquote>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
})
</script>

<style lang="scss" scoped>
.blockquote {
  display: flex;
  align-items: stretch;
  gap: 20px;
  margin: 0 0 0 15%;

  &::before {
    flex-shrink: 0;
    width: 2px;
    border-radius: var(--radius-md);
    background-color: var(--primary);
    content: "";
  }

  &__text {
    color: var(--black);
    font-family: var(--ff-secondary);
    font-size: var(--fs-20);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-16);
    }
  }
}
</style>
