<template>
  <NuxtLink to="/" aria-label="go to home">
    <UiAppIcon
      class="logo"
      name="logo"
      :width="width"
      :height="height"
      :class="{ 'logo--white': colorLogo }"
    />
  </NuxtLink>
</template>

<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: "",
  },
  height: {
    type: [String, Number],
    default: "",
  },
  colorLogo: {
    type: String,
    default: "",
  },
})
</script>

<style lang="scss" scoped>
.logo {
  color: var(--primary);

  &--white {
    color: var(--white);
  }
}
</style>
