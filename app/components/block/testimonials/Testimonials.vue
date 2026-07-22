<template>
  <section class="testimonials">
    <div class="container">
      <UiScrollCarousel header-align="end">
        <template #header>
          <div class="testimonials__left">
            <UiTitle tag="h2" title="Testimonials" />
            <p v-if="showDescr" class="testimonials__descr">
              See what our clients say about working with Ensome.
            </p>
          </div>
        </template>

        <li
          v-for="testimonial in testimonialList"
          :key="testimonial.id"
          class="testimonials__item"
        >
          <CardTestimonials
            :avatar="testimonial.avatar"
            :name="testimonial.name"
            :profession="testimonial.profession"
            :quote="testimonial.quote"
          />
        </li>
      </UiScrollCarousel>
    </div>
  </section>
</template>

<script setup>
import { testimonialList } from "#shared/testimonialList"

defineProps({
  showDescr: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 120px 0;
  transition: padding var(--trs35);

  @include tablet {
    padding: 80px 0;
  }

  @include small-tablet {
    padding: 50px 0;
  }

  &__left {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 540px;
    gap: 30px;
  }

  &__descr {
    color: var(--gray);
    font-size: var(--fs-20);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }

  &__item {
    display: flex;
    height: 100%;

    :deep(.testimonials-card) {
      width: 100%;
    }
  }
}
</style>
