<template>
  <section class="features">
    <div class="container">
      <div class="features__top">
        <UiTitle tag="h2" large>
          The <span class="accent">newest</span> business analytics platform
        </UiTitle>
        <div class="features__top-info">
          <p class="features__top-descr">
            Ensome brings together data engineering, analytics, and visualization in one platform —
            so your team can move from raw numbers to confident decisions faster.
          </p>

          <NuxtLink class="nuxt-link features__top-link" to="/services">Discover more</NuxtLink>
        </div>
      </div>
    </div>
    <div class="features__bottom">
      <div class="features__bottom-media">
        <UiPicture
          src="/img/features/features-media.jpg"
          alt="Interactive business analytics dashboard by Ensome"
          :width="929"
          :height="740"
          loading="eager"
        />
      </div>
      <div class="features__bottom-info">
        <UiTitle tag="h2" title="Radically new solutions for data" />
        <p class="features__bottom-descr">
          From automated pipelines to interactive dashboards — we design data solutions that scale
          with your business and keep every stakeholder on the same page.
        </p>

        <NuxtLink class="nuxt-link features__bottom-link" to="/solutions">Learn more</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.features {
  &__top {
    display: grid;
    padding: 120px 0;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
    transition:
      padding var(--trs35),
      gap var(--trs35);

    @include tablet {
      padding: 80px 0;
      gap: 20px;
    }

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding: 50px 0;
    }

    &-info {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &-descr {
      color: var(--gray);
      font-size: var(--fs-20);
      font-weight: 400;
      line-height: 1.6;
      transition: font-size var(--trs35);

      @include small-tablet {
        font-size: var(--fs-14);
      }
    }

    &-link {
      width: 100%;
      max-width: 136px;
      height: 44px;
      transition:
        max-width var(--trs35),
        background-color var(--trs35);

      @include mobile {
        max-width: 100%;
      }
    }
  }

  &__bottom {
    display: grid;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    background-color: var(--background);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 1920px;

    @include tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }

    &-media {
      width: 100%;
      aspect-ratio: 929 / 740;
      max-height: 740px;

      :deep(.picture),
      :deep(.picture__img) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-info {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 40px;
      max-width: 540px;
      gap: 30px;
      transition:
        padding var(--trs35),
        max-width var(--trs35);

      @include tablet {
        max-width: initial;
        padding: 50px 20px;
      }

      @include small-tablet {
        max-width: initial;
        padding: 20px 20px 50px;
      }
    }

    &-descr {
      color: var(--gray);
      font-size: var(--fs-20);
      font-weight: 400;
      line-height: 1.6;
      transition: font-size var(--trs35);

      @include small-tablet {
        font-size: var(--fs-14);
      }
    }

    &-link {
      width: 100%;
      max-width: 136px;
      height: 44px;
      transition:
        max-width var(--trs35),
        background-color var(--trs35);

      @include mobile {
        max-width: 100%;
      }
    }
  }
}
</style>
