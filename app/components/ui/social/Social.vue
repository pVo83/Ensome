<template>
  <div class="social">
    <a
      class="social__link"
      :class="{ 'social__link--color': colorIcon }"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="label"
      :style="{ '--social-hover-color': hoverColor }"
    >
      <UiAppIcon :name="iconSocial" :width="width" :height="height" />
    </a>
  </div>
</template>

<script setup>
defineProps({
  iconSocial: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  hoverColor: {
    type: String,
    required: true,
  },
  colorIcon: {
    type: Boolean,
    default: false,
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
})
</script>

<style lang="scss" scoped>
.social {
  &__link {
    display: flex;
    align-items: center;
    color: var(--gray);
    transition: color var(--trs35);

    &:hover {
      color: var(--social-hover-color);
    }

    &:focus-visible {
      border-radius: 10rem;
      outline: 0 solid currentcolor;
      outline-offset: 0;
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary) 100%, transparent);
    }

    &--color {
      color: var(--primary);
    }
  }
}
</style>
