<template>
  <section class="company" :class="{ 'company--colored': coloredBG }">
    <div class="container company__container">
      <UiTitle
        class="company__title"
        tag="h2"
        title="We provide services that guarantee your success"
      />
      <div class="company__content">
        <div class="company__top">
          <div class="stats">
            <ul class="stats__list" aria-label="company statistics">
              <li v-for="item in statsList" :key="item.id" class="stats__item">
                <div class="stats__value">{{ item.value }}</div>
                <div class="stats__label">{{ item.label }}</div>
              </li>
            </ul>
          </div>
          <p class="company__top-descr">
            Ensome helps companies unlock the value of their data — from analytics and forecasting to
            secure infrastructure and AI-driven solutions built for real business results.
          </p>
        </div>
        <div v-if="hiddenClientsLogos" class="company__bottom">
          <BlockCompanyClientsLogos :clients-list="clientsList" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { clientsList } from "#shared/clientsList"
import { statsList } from "#shared/statsList"

defineProps({
  hiddenClientsLogos: {
    type: Boolean,
    default: true,
  },
  coloredBG: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.company {
  padding: 120px 0;
  background-color: var(--white);
  transition: padding var(--trs35);

  @include tablet {
    padding: 80px 0;
  }

  @include small-tablet {
    padding: 50px 0;
  }

  &--colored {
    background-color: var(--background);
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: 50px;

    @include small-tablet {
      gap: 40px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 50px;

    @include small-tablet {
      gap: 10px;
    }
  }

  &__title {
    text-align: center;

    @include tablet {
      text-align: left;
    }
  }

  &__top {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;

    @include tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      text-align: left;
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
  }
}

.stats {
  &__list {
    display: flex;
    gap: 48px;
    transition: gap var(--trs35);

    @include tablet {
      text-align: center;
    }

    @include mobile {
      gap: 30px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__value {
    color: var(--primary);
    font-size: var(--fs-50);
    font-weight: 800;
    line-height: 1;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-30);
    }
  }

  &__label {
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }
}
</style>
