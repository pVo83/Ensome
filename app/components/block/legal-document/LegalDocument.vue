<template>
  <section class="legal-document">
    <UiTitle tag="h1" class="legal-document__title">
      <slot name="title" />
    </UiTitle>

    <p v-if="updatedAt" class="legal-document__updated">Last updated: {{ updatedAt }}</p>

    <div class="legal-document__content">
      <section v-for="section in sections" :key="section.id" class="legal-document__section">
        <UiTitle
          v-if="section.title"
          class="legal-document__section-title"
          tag="h4"
          :title="section.title"
        />

        <p
          v-for="(paragraph, index) in section.paragraphs"
          :key="index"
          class="legal-document__text"
        >
          {{ paragraph }}
        </p>

        <ul v-if="section.list?.length" class="legal-document__list">
          <li v-for="(item, index) in section.list" :key="index" class="legal-document__list-item">
            {{ item }}
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    required: true,
  },
  updatedAt: {
    type: String,
    default: "",
  },
})
</script>

<style lang="scss" scoped>
.legal-document {
  padding: 0 0 120px;
  transition: padding var(--trs35);

  @include tablet {
    padding: 0 0 80px;
  }

  @include small-tablet {
    padding: 0 0 50px;
  }

  &__title {
    margin: 0 0 16px;
  }

  &__updated {
    margin: 0 0 40px;
    color: var(--gray);
    font-family: var(--ff-secondary);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.4;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 820px;
  }

  &__section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__section-title {
    color: var(--black);
  }

  &__text {
    margin: 0;
    color: var(--gray);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin: 0;
    padding: 0 0 0 20px;

    &-item {
      position: relative;
      display: flex;
      align-items: flex-start;
      color: var(--gray);
      font-family: var(--ff-secondary);
      font-size: var(--fs-16);
      font-weight: 400;
      line-height: 1.6;
      transition: font-size var(--trs35);
      gap: 10px;

      &::before {
        display: inline-flex;
        flex-shrink: 0;
        width: 6px;
        height: 6px;
        margin: 10px 0 0;
        border-radius: 2rem;
        background-color: var(--gray);
        content: "";
      }

      @include small-tablet {
        font-size: var(--fs-14);
      }
    }
  }

  @include tablet {
    padding: 0 0 80px;
  }
}
</style>
