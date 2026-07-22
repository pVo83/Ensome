<template>
  <div class="solution-page">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />

      <div class="solution-page__layout">
        <aside class="solution-page__sidebar">
          <nav class="solution-page__nav" aria-label="Solutions">
            <NuxtLink
              v-for="item in solutionsList"
              :key="item.id"
              :to="getSolutionUrl(item.slug)"
              class="solution-page__nav-link"
              :class="{ 'solution-page__nav-link--active': item.slug === solution.slug }"
            >
              <UiAppIcon :name="item.icon" width="24" height="24" />
              <span>{{ item.title }}</span>
            </NuxtLink>
          </nav>
        </aside>

        <div class="solution-page__main">
          <section
            v-for="section in solution.sections"
            :key="section.id"
            class="solution-page__section"
          >
            <UiTitle class="solution-page__section-title" tag="h2" :title="section.title" />

            <template v-for="(block, index) in section.blocks" :key="index">
              <p v-if="block.type === 'paragraph'" class="solution-page__text">
                {{ block.text }}
              </p>

              <div v-else-if="block.type === 'image'" class="solution-page__media">
                <UiPicture
                  :src="block.src"
                  :alt="block.alt"
                  loading="lazy"
                  :width="1110"
                  :height="500"
                />
              </div>

              <ul v-else-if="block.type === 'list'" class="solution-page__list">
                <li v-for="item in block.items" :key="item.label" class="solution-page__list-item">
                  <UiAppIcon name="circle" width="14" height="27" />
                  <p class="solution-page__list-text">
                    <strong class="solution-page__list-label">{{ item.label }}</strong>
                    — {{ item.text }}
                  </p>
                </li>
              </ul>
            </template>
          </section>
        </div>
      </div>
    </div>

    <BlockContactCta />
    <BlockSubscribe />
  </div>
</template>

<script setup>
import { solutionsList, getSolutionUrl } from "#shared/solutionsList"

const route = useRoute()

const solution = computed(() => {
  const found = solutionsList.find((item) => item.slug === route.params.slug)

  if (!found) {
    throw createError({ statusCode: 404, statusMessage: "Solution not found" })
  }

  return found
})

usePageSeo({
  title: computed(() => solution.value.title),
  description: computed(() => solution.value.descr),
})

const breadcrumbs = computed(() => [
  { label: "Home", to: "/" },
  { label: "Solutions", to: "/solutions" },
  { label: solution.value.title },
])
</script>

<style lang="scss" scoped>
.solution-page {
  &__layout {
    display: grid;
    grid-template-columns: 255px minmax(0, 1fr);
    gap: 30px;
    align-items: start;
    padding: 0 0 120px;
    transition:
      grid-template-columns var(--trs35),
      gap var(--trs35),
      padding var(--trs35);

    @include tablet {
      grid-template-columns: 200px minmax(0, 1fr);
      gap: 24px;
      padding: 0 0 80px;
    }

    @include small-tablet {
      grid-template-columns: 1fr;
      padding: 0 0 50px;
    }
  }

  &__sidebar {
    position: sticky;
    top: 30px;
    z-index: 2;
    background-color: var(--white);

    @include small-tablet {
      top: 0;
      animation: solution-page-sidebar-shadow linear both;
      animation-timeline: scroll(root);
      animation-range: 100px 150px;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @include small-tablet {
      flex-flow: row wrap;
      gap: 8px 16px;
      padding: 24px 0;
    }
  }

  &__nav-link {
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 14px 0;
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.2;
    text-decoration: none;
    transition: color var(--trs35);
    gap: 12px;

    @include small-tablet {
      padding: 8px 0;
    }

    &:hover {
      color: var(--primary);
    }

    &--active {
      color: var(--primary);
      pointer-events: none;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__text {
    margin: 0;
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }

  &__media {
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__list-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
  }

  &__list-text {
    margin: 0;
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }

  &__list-label {
    color: var(--black);
    font-weight: 600;
  }
}

@keyframes solution-page-sidebar-shadow {
  to {
    box-shadow: 0 50px 20px -50px rgb(41 45 51 / 12%);
  }
}
</style>
