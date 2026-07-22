<template>
  <div class="search">
    <UiInput
      id="search"
      v-model="query"
      class="search__field"
      name="search"
      placeholder="Search"
      aria-label="Search"
    />
    <UiButton class="search__btn" title="Search" size="medium" variant="primary" />
  </div>
</template>

<script setup>
const query = ref("")
</script>

<style lang="scss" scoped>
.search {
  position: relative;

  &__field {
    :deep(.field__input) {
      padding-right: 125px;
    }
  }

  &__btn {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
