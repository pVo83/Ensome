<template>
  <section class="advantages">
    <div class="advantages__content">
      <div class="advantages__media">
        <UiPicture
          src="/img/advantages/advantages-media.jpg"
          alt="Business team reviewing data insights with Ensome"
          :width="929"
          :height="690"
          loading="lazy"
          cover
        />
      </div>
      <div class="advantages__info">
        <UiTitle tag="h2" title="Why choose us?" />
        <ul class="advantages__list">
          <li v-for="item in advantageList" :key="item.text" class="advantages__item">
            <div class="advantages__top">
              <UiAppIcon class="advantages__icon" name="checkmark" width="25" height="25" />
              <div class="advantages__text">{{ item.text }}</div>
            </div>
            <div class="advantages__bottom">
              <p class="advantages__descr">
                {{ item.descr }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { advantageList } from "#shared/advantageList"
</script>

<style lang="scss" scoped>
.advantages {
  &__content {
    display: grid;
    align-items: center;
    width: 100%;
    margin: 0 auto;
    background-color: var(--background);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 1920px;
    transition: background-color var(--trs35);

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      background-color: var(--white);
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 24px 50px;
    gap: 50px;
    max-width: 540px;
    transition: padding var(--trs35);

    @include small-tablet {
      padding: 50px 20px;
      max-width: initial;
    }

    @include mobile {
      padding: 30px 20px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  &__top {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__icon {
    color: var(--primary);
  }

  &__media {
    :deep(.picture),
    :deep(.picture__img) {
      width: 100%;
      height: 712px;
      object-fit: cover;
      object-position: right center;

      @include small-tablet {
        height: inherit;
      }
    }
  }

  &__text {
    color: var(--black);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 700;
    line-height: 1.4;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-20);
    }
  }

  &__descr {
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
  }
}
</style>
