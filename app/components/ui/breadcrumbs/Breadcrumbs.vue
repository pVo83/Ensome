<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="breadcrumbs__list">
      <li v-for="item in items" :key="item.label" class="breadcrumbs__item">
        <NuxtLink
          v-if="item.to"
          class="breadcrumbs__link"
          active-class="breadcrumbs__link--active"
          exact-active-class="breadcrumbs__link--active"
          :to="item.to"
        >
          {{ item.label }}
        </NuxtLink>
        <span v-else class="breadcrumbs__current" aria-current="page">
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (item) =>
          typeof item.label === "string" && (item.to === undefined || typeof item.to === "string"),
      ),
  },
})
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin: 20px 0 50px;
  transition: margin var(--trs35);
  min-width: 0;
  max-width: 100%;

  @include small-tablet {
    margin: 30px 0 20px;
  }

  &__list {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    min-width: 0;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    &:last-child {
      flex: 1 1 auto;
      flex-shrink: 1;
      min-width: 0;
      overflow: hidden;

      .breadcrumbs__link,
      .breadcrumbs__current {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  &__item:not(:first-child)::before {
    display: block;
    flex-shrink: 0;
    width: 2px;
    height: 14px;
    margin: 0 8px;
    border-radius: var(--radius-md);
    background-color: var(--gray);
    content: "";
  }

  &__link {
    color: var(--gray);
    font-size: var(--fs-14);
    line-height: 1.6;
    letter-spacing: -0.01rem;
    transition: color var(--trs35);

    &:hover {
      color: var(--black);
    }

    &--active {
      color: var(--primary);
      pointer-events: none;
    }
  }

  &__current {
    color: var(--primary);
    font-size: var(--fs-14);
    line-height: 1.6;
    letter-spacing: -0.01rem;
  }
}
</style>
