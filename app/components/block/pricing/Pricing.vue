<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="pricing__content">
        <UiTitle v-if="showTitle" tag="h2" title="Our pricing" />
        <div class="pricing-card">
          <ul class="pricing-card__list">
            <li v-for="item in priceList" :key="item.id" class="pricing-card__item">
              <CardPricing
                :title="item.title"
                :price="item.price"
                :button-title="item.buttonTitle"
                :services="item.services"
                :custom="item.custom"
                :is-active="activeCardId === item.id"
                @select="activeCardId = item.id"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { priceList } from "#shared/priceList"

defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
})

const activeCardId = ref(priceList.find((item) => item.recommended)?.id ?? priceList[0].id)
</script>

<style lang="scss" scoped>
.pricing {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    transition: gap var(--trs35);

    @include small-tablet {
      gap: 30px;
    }
  }
}

.pricing-card {
  &__list {
    gap: 30px;
    display: grid;
    padding: 0 0 20px;
    grid-template-columns: repeat(4, minmax(255px, 1fr));
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    transition: gap var(--trs35);

    @include tablet {
      gap: 20px;
    }
  }

  &__item {
    scroll-snap-align: start;
  }
}
</style>
