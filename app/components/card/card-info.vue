<template>
  <div class="card-info" :class="{ 'card-info--center': center }">
    <div class="card-info__top">
      <UiAppIcon :name="icon" width="45" height="45" />
    </div>
    <div class="card-info__body">
      <UiTitle tag="h4" :title="title" />
      <p class="card-info__descr">{{ descr }}</p>
    </div>
    <div v-if="hiddenLink" class="card-info__bottom">
      <NuxtLink class="card-info__link" :to="link">
        {{ text }}
        <UiAppIcon name="arrow_right" width="18" height="18" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: "",
  },
  descr: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  hiddenLink: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.card-info {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 25px;
  border: 1px solid color-mix(in srgb, var(--gray) 10%, transparent);
  border-radius: var(--radius-md);
  background: var(--white);
  cursor: default;
  transition: transform var(--trs35);
  box-shadow: 0 20px 20px -20px rgb(41 45 51 / 12%);
  gap: 15px;

  &__body {
    display: flex;
    flex-direction: column;
    width: fit-content;
    gap: 10px;
  }

  &__descr {
    display: -webkit-box;
    color: var(--gray);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;
    overflow: hidden;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &__link {
    display: flex;
    align-items: center;
    width: fit-content;
    color: var(--primary);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;
    transition: color var(--trs35);
    gap: 10px;

    &:hover {
      color: color-mix(in srgb, var(--primary) 80%, var(--black));

      svg {
        transform: translateX(4px);
      }
    }

    svg {
      padding: 1px 0 0;
      transition: transform var(--trs35);
    }
  }

  &--center {
    align-items: center;
    text-align: center;
  }

  &--center &__top {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border: 1px solid var(--background);
    border-radius: var(--radius-md);
    color: var(--primary);
  }

  &--center &__body {
    align-items: center;
    width: auto;
    gap: 16px;
  }
}
</style>
