<template>
  <section class="contact-cta">
    <div class="contact-cta__content">
      <UiTitle tag="h2" title="Do you need help?" />
      <p class="contact-cta__descr">
        Our team is ready to help with data strategy, analytics setup, or custom IT solutions. Reach
        out and we will get back to you shortly.
      </p>

      <NuxtLink class="nuxt-link contact-cta__link" to="/contacts">Contact Us</NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-cta {
  padding: 100px 0;
  background-color: var(--background);
  transition: padding var(--trs35);

  @include tablet {
    padding: 80px 0;
  }

  @include small-tablet {
    padding: 50px 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
    padding: 0 20px;
    gap: 30px;
    text-align: center;
  }

  &__descr {
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }

  &__link {
    width: 100%;
    max-width: 136px;
    transition:
      max-width var(--trs35),
      background-color var(--trs35);

    @include mobile {
      max-width: 100%;
    }
  }
}
</style>
