<template>
  <section class="categories">
    <UiTitle v-if="title" tag="h4" :title="title" />

    <ul class="categories__list">
      <li v-for="category in categories" :key="category.slug" class="categories__item">
        <NuxtLink class="categories__link" :to="getBlogCategoryUrl(category.slug)">
          <span class="categories__label">{{ category.label }}</span>
          <UiAppIcon class="categories__icon" name="chevron_right" width="20" height="20" />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { blogCategories, getBlogCategoryUrl } from "#shared/blogCategories"

defineProps({
  title: {
    type: String,
    default: "Categories",
  },
  categories: {
    type: Array,
    default: () => blogCategories,
  },
})
</script>

<style lang="scss" scoped>
.categories {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    border-bottom: 1px solid color-mix(in srgb, var(--gray) 10%, transparent);
  }

  &__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 0;
    color: var(--gray);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    text-decoration: none;
    transition: color var(--trs35);

    &:hover {
      color: var(--primary);

      .categories__icon {
        color: var(--primary);
        transform: translateX(4px);
      }
    }
  }

  &__label {
    flex: 1;
  }

  &__icon {
    flex-shrink: 0;
    color: var(--gray);
    transition:
      transform var(--trs35),
      color var(--trs35);
  }
}
</style>
