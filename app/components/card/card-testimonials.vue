<template>
  <div class="testimonials-card">
    <div class="testimonials-card__heading">
      <UiPicture
        class="testimonials-card__avatar"
        :src="avatar"
        :alt="`Photo of ${name}`"
        :width="80"
        :height="80"
        cover
        loading="lazy"
      />

      <div class="testimonials-card__info">
        <div class="testimonials-card__name">{{ name }}</div>
        <div class="testimonials-card__profession">{{ profession }}</div>
      </div>
    </div>

    <p class="testimonials-card__quote">
      {{ quote }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  avatar: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  quote: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.testimonials-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 35px;
  border: 1px solid color-mix(in srgb, var(--gray) 10%, transparent);
  border-radius: var(--radius-md);
  background-color: var(--white);
  gap: 25px;
  box-shadow: 0 10px 10px -8px rgb(41 45 51 / 18%);

  @include mobile {
    padding: 20px;
  }

  &__heading {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  &__avatar {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__name {
    color: var(--black);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 700;
    line-height: 1.4;
  }

  &__profession {
    color: var(--gray);
    font-family: var(--ff-secondary);
    font-size: var(--fs-14);
    font-weight: 500;
    line-height: 1.4;
  }

  &__quote {
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
