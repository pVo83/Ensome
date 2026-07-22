<template>
  <div class="heading">
    <span v-if="text" class="heading__text">{{ text }}</span>
    <UiTitle v-if="title" class="heading__title" :tag="titleTag" :title="title" />
    <p v-if="descr" class="heading__descr" :style="{ maxWidth: maxWidth + 'px' }">
      {{ descr }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  descr: {
    type: String,
    default: "",
  },
  maxWidth: {
    type: Number,
    default: 540,
  },
  titleTag: {
    type: String,
    default: "h1",
    validator: (value) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  &__text {
    color: var(--primary);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 600;
    line-height: 1.4;
  }

  &__descr {
    width: 100%;
    color: var(--gray);
    font-size: var(--fs-20);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-16);
    }
  }
}
</style>
