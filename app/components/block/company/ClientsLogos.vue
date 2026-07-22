<template>
  <div class="clients-logos">
    <ul class="clients-logos__list">
      <li v-for="logo in clientsList" :key="logo.id" class="clients-logos__item">
        <UiPicture :src="logo.img" :alt="logo.name" :width="185" :height="132" loading="lazy" />
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  clientsList: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.clients-logos {
  &__list {
    display: grid;
    grid-template-columns: repeat(6, minmax(185px, 1fr));
    overflow-x: auto;
    overscroll-behavior-x: contain;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    transition: grid-template-columns var(--trs35);

    &::-webkit-scrollbar {
      display: none;
    }

    @include small-tablet {
      grid-template-columns: repeat(6, minmax(110px, 1fr));
    }
  }

  &__item {
    aspect-ratio: 370 / 264;
    scroll-snap-align: start;
  }
}
</style>
