<template>
  <div class="service-page">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />

      <div class="service-page__layout">
        <div class="service-page__main">
          <section
            v-for="section in service.sections"
            :key="section.id"
            class="service-page__section"
          >
            <UiTitle tag="h3" :title="section.title" />

            <template v-for="(block, index) in section.blocks" :key="index">
              <p v-if="block.type === 'paragraph'" class="service-page__text">
                {{ block.text }}
              </p>

              <div v-else-if="block.type === 'image'" class="service-page__media">
                <UiPicture
                  :src="block.src"
                  :alt="block.alt"
                  loading="lazy"
                  :width="1110"
                  :height="500"
                />
              </div>

              <div v-else-if="block.type === 'split'" class="service-page__split">
                <div class="service-page__media">
                  <UiPicture
                    :src="block.src"
                    :alt="block.alt"
                    loading="lazy"
                    :width="540"
                    :height="160"
                    cover
                  />
                </div>
                <ul class="service-page__features">
                  <li
                    v-for="feature in block.features"
                    :key="feature"
                    class="service-page__features-item"
                  >
                    <UiAppIcon
                      class="service-page__features-icon"
                      name="checkmark"
                      width="20"
                      height="20"
                    />
                    <span class="service-page__features-text">{{ feature }}</span>
                  </li>
                </ul>
              </div>
            </template>
          </section>
        </div>

        <aside class="service-page__sidebar">
          <BlockBlogSearch />
          <UiAccordion title="Services" :items="servicesAccordionItems" />
        </aside>
      </div>
    </div>

    <BlockContactCta />
    <BlockSubscribe />
  </div>
</template>

<script setup>
import { servicesList, getServiceAccordionItems } from "#shared/servicesList"

const route = useRoute()

const service = computed(() => {
  const found = servicesList.find((item) => item.slug === route.params.slug)

  if (!found) {
    throw createError({ statusCode: 404, statusMessage: "Service not found" })
  }

  return found
})

const servicesAccordionItems = getServiceAccordionItems()

usePageSeo({
  title: computed(() => service.value.title),
  description: computed(() => service.value.descr),
})

const breadcrumbs = computed(() => [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: service.value.title },
])
</script>

<style lang="scss" scoped>
@use "@/assets/scss/mixins/index" as *;

.service-page {
  &__layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 445px;
    gap: 30px;
    align-items: start;
    padding: 0 0 120px;
    transition:
      grid-template-columns var(--trs35),
      gap var(--trs35),
      padding var(--trs35);

    @include tablet {
      grid-template-columns: 1fr;
      padding: 0 0 80px;
    }

    @include small-tablet {
      padding: 0 0 50px;
    }
  }

  &__sidebar {
    position: sticky;
    top: 30px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include tablet {
      position: static;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    gap: 40px;
    transition: gap var(--trs35);

    @include small-tablet {
      gap: 20px;
    }
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

  &__split {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    gap: 30px;
    align-items: center;

    @include tablet {
      grid-template-columns: 1fr;
    }
  }

  &__features {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__features-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__features-icon {
    flex-shrink: 0;
    padding: 2px 0 0;
    color: var(--primary);
  }

  &__features-text {
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
  }
}
</style>
