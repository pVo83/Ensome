<template>
  <svg class="spinner" :width="size" :height="size" viewBox="0 0 50 50" aria-hidden="true">
    <circle class="spinner__bg" cx="25" cy="25" r="20" stroke-width="5" fill="none" />
    <circle
      class="spinner__fg"
      cx="25"
      cy="25"
      r="20"
      stroke-width="5"
      fill="none"
      stroke-linecap="round"
      stroke-dasharray="30 110"
      stroke-dashoffset="0"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: {
    type: Number,
    default: 20,
  },
})
</script>

<style scoped lang="scss">
.spinner {
  display: inline-flex;
  transform-origin: center;
  animation: rotate 1s linear infinite;
  border-radius: 10rem;

  &__bg {
    filter: drop-shadow(0 0 4px color-mix(in srgb, var(--black) 100%, transparent));
    stroke: color-mix(in srgb, currentcolor 25%, transparent);
  }

  &__fg {
    stroke: currentcolor;
    transform-origin: center;
    transform-box: fill-box;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
