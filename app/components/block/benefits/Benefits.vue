<template>
  <section
    class="benefits"
    :class="[
      `benefits--${layout}`,
      { 'benefits--colored': backgroundColor },
      { 'benefits--padding': padding },
    ]"
  >
    <div class="container">
      <div v-if="layout === 'split'" class="benefits__split">
        <div class="benefits__info">
          <UiTitle tag="h2" :title="title" />
          <p class="benefits__descr">{{ descr }}</p>
        </div>

        <ul class="benefits__cards">
          <li v-for="item in cardInfoList" :key="item.id" class="benefits__card">
            <CardInfo :icon="item.icon" :title="item.title" :descr="item.descr" />
          </li>
        </ul>
      </div>

      <div v-else class="benefits__grid">
        <UiHeading title-tag="h2" :title="title" :descr="descr" :max-width="headingMaxWidth" />

        <ul class="benefits__grid-list">
          <li v-for="item in gridItems" :key="item.id" class="benefits__grid-item">
            <CardInfo :icon="item.icon" :title="item.title" :descr="item.descr" center />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import CardInfo from "~/components/card/card-info.vue"
import { cardInfoList } from "#shared/cardInfoList"

defineProps({
  layout: {
    type: String,
    default: "split",
    validator: (value) => ["split", "grid"].includes(value),
  },
  title: {
    type: String,
    default: "The benefits of Ensome",
  },
  descr: {
    type: String,
    default:
      "Ensome combines powerful analytics tools with enterprise-grade security — giving your team everything needed to work with data confidently and efficiently.",
  },
  headingMaxWidth: {
    type: Number,
    default: 750,
  },
  backgroundColor: {
    type: Boolean,
    default: true,
  },
  padding: {
    type: Boolean,
    default: true,
  },
})

const gridItems = computed(() => cardInfoList.slice(0, 3))
</script>

<style lang="scss" scoped>
.benefits {
  &--colored {
    background-color: var(--background);
  }

  &--padding {
    padding: 120px 0;
    transition: padding var(--trs35);

    @include tablet {
      padding: 80px 0;
    }

    @include small-tablet {
      padding: 50px 0;
    }
  }

  &__split {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
    align-items: center;

    @include tablet {
      grid-template-columns: minmax(0, 1fr);
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
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

  &__cards {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0;
    padding: 0 0 50px;
    list-style: none;
    gap: 30px;
    transition: gap var(--trs35);

    @include tablet {
      grid-template-columns: repeat(4, minmax(255px, 1fr));
      padding-bottom: 0;
      overflow-x: auto;
      overscroll-behavior-x: contain;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      gap: 20px;
    }
  }

  &__card {
    @include tablet {
      width: 255px;
      scroll-snap-align: start;
    }
  }

  &__card:nth-child(even) {
    transform: translateY(50px);

    @include tablet {
      transform: translateY(0);
    }
  }

  &__card:hover :deep(.card-info) {
    transform: translateY(-5px);

    @include tablet {
      transform: translateY(0);
    }
  }

  &__grid {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  &__grid-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 30px;
    transition: gap var(--trs35);

    @include tablet {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include small-tablet {
      grid-template-columns: minmax(0, 1fr);
    }

    @include mobile {
      grid-template-columns: repeat(3, minmax(272px, 1fr));
      overflow-x: auto;
      overscroll-behavior-x: contain;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      gap: 20px;
    }
  }

  &__grid-item {
    @include tablet {
      &:last-child {
        grid-column: 1 / -1;
      }
    }

    @include mobile {
      width: 272px;
      scroll-snap-align: start;

      &:last-child {
        grid-column: auto;
      }
    }
  }
}
</style>
