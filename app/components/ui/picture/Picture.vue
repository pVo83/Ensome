<template>
  <picture
    :class="['picture', { 'picture--cover': cover }]"
    :style="fillHeight && { height: `${fillHeight}px` }"
  >
    <source :srcset="webpSrc" type="image/webp">
    <img
      :src="imageSrc"
      :alt="alt"
      :loading="loading"
      :width="width"
      :height="height"
      class="picture__img"
    >
  </picture>
</template>

<script setup>
import { computed } from "vue"
import { publicUrl } from "@/utils/publicUrl"

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  loading: {
    type: String,
    default: "lazy",
  },
  width: {
    type: [Number, String],
    default: undefined,
  },
  height: {
    type: [Number, String],
    default: undefined,
  },
  cover: {
    type: Boolean,
    default: false,
  },
  fillHeight: {
    type: Number,
    default: 0,
  },
})

const imageSrc = computed(() => publicUrl(props.src))
const webpSrc = computed(() => publicUrl(props.src.replace(/\.(png|jpe?g)$/i, ".webp")))
</script>

<style lang="scss" scoped>
.picture {
  display: block;
  width: 100%;

  &__img {
    display: block;
    width: 100%;
    height: auto;
  }

  &--cover {
    height: 100%;

    .picture__img {
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
