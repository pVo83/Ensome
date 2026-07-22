<template>
  <component
    :is="tag"
    class="title"
    :class="[`title--${tag}`, `title--tone-${tone}`, { 'title--large': large }]"
  >
    <slot>{{ title }}</slot>
  </component>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "h2",
    validator: (value) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
  },
  tone: {
    type: String,
    default: "dark",
    validator: (value) => ["dark", "light"].includes(value),
  },
  large: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.title {
  width: fit-content;
  font-family: var(--ff-secondary);
  line-height: 1.4;

  &--tone-dark {
    color: var(--black);
  }

  &--tone-light {
    color: var(--white);
  }

  &--h1 {
    font-size: var(--fs-46);
    font-weight: 800;
    line-height: 1.2;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-30);
    }
  }

  &--h2 {
    font-size: var(--fs-38);
    font-weight: 800;
    line-height: 1.2;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-30);
    }
  }

  &--h3 {
    font-size: var(--fs-30);
    font-weight: 800;
    line-height: 1.2;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-22);
    }
  }

  &--h4 {
    font-size: var(--fs-22);
    font-weight: 700;
    line-height: 1.2;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-16);
    }
  }

  &--h5 {
    font-size: var(--fs-20);
    font-weight: 700;
  }

  &--h6 {
    font-size: var(--fs-16);
    font-weight: 700;
  }

  &--large {
    font-size: var(--fs-56);

    @include small-tablet {
      font-size: var(--fs-30);
    }
  }
}
</style>
