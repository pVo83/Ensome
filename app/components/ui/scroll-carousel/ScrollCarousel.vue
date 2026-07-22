<template>
  <div class="scroll-carousel">
    <div
      v-if="$slots.header"
      class="scroll-carousel__header"
      :class="`scroll-carousel__header--align-${headerAlign}`"
    >
      <div class="scroll-carousel__header-content">
        <slot name="header" />
      </div>

      <div class="scroll-carousel__nav">
        <button
          class="scroll-carousel__nav-btn"
          type="button"
          aria-label="Previous"
          :disabled="isBeginning"
          @click="scrollPrev"
        >
          <UiAppIcon name="chevron_left" width="20" height="20" />
        </button>

        <button
          class="scroll-carousel__nav-btn"
          type="button"
          aria-label="Next"
          :disabled="isEnd"
          @click="scrollNext"
        >
          <UiAppIcon name="chevron_right" width="20" height="20" />
        </button>
      </div>
    </div>

    <div class="scroll-carousel__wrap">
      <ul ref="trackRef" class="scroll-carousel__list" @scroll.passive="updateNavigation">
        <slot />
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  headerAlign: {
    type: String,
    default: "center",
    validator: (value) => ["center", "end"].includes(value),
  },
})

const trackRef = ref(null)
const { isBeginning, isEnd, updateNavigation, scrollPrev, scrollNext } = useScrollCarousel(trackRef)
</script>

<style lang="scss" scoped>
.scroll-carousel {
  display: flex;
  flex-direction: column;
  padding: 12px 0;
  transition: gap var(--trs35);
  gap: 50px;

  @include small-tablet {
    gap: 30px;
  }

  &__header {
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    &--align-end {
      align-items: flex-end;
    }
  }

  &__header-content {
    min-width: 0;
  }

  &__nav {
    display: flex;
    flex-shrink: 0;
    gap: 12px;
  }

  &__nav-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    background-color: var(--tertiary);
    color: var(--primary);
    cursor: pointer;
    transition:
      opacity var(--trs35),
      background-color var(--trs35),
      border-color var(--trs35);

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: transparent;
      border-color: var(--primary);
    }
  }

  &__wrap {
    width: 100%;
    overflow: hidden;
  }

  &__list {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: calc((100% - 60px) / 3.25);
    margin: 0;
    padding: 0 0 20px;
    list-style: none;
    gap: 30px;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    transition: gap var(--trs35);

    &::-webkit-scrollbar {
      display: none;
    }

    @include tablet {
      grid-auto-columns: calc((100% - 20px) / 2.15);
      gap: 20px;
    }

    @include small-tablet {
      grid-auto-columns: calc(100% / 1.15);
    }

    > :deep(*) {
      scroll-snap-align: start;
      min-width: 0;
    }
  }
}
</style>
