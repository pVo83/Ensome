<template>
  <div class="team-card">
    <div class="team-card__media">
      <UiPicture :src="foto" :alt="name" :width="540" :height="410" loading="lazy" />
    </div>

    <div class="team-card__content">
      <div class="team-card__info">
        <div class="team-card__name">{{ name }}</div>
        <div class="team-card__position">{{ position }}</div>
      </div>

      <div v-if="socials.length" class="team-card__social">
        <UiSocial
          v-for="social in socials"
          :key="social.id"
          :icon-social="social.iconSocial"
          :label="social.label"
          :link="social.link"
          :hover-color="social.hoverColor"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  foto: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  socials: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss" scoped>
.team-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius-md);
  background-color: var(--white);
  gap: 16px;
  box-shadow: 0 16px 14px -14px rgb(0 0 0 / 13%);

  &__media {
    border-radius: var(--radius-md);
    overflow: hidden;
    aspect-ratio: 540 / 410;
  }

  &__content {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 20px 16px;
    gap: 12px;
  }

  &__social {
    z-index: 1;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__name {
    color: var(--black);
    font-family: var(--ff-secondary);
    font-size: var(--fs-20);
    font-weight: 700;
    line-height: 1.4;
  }

  &__position {
    color: var(--gray);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;
  }
}
</style>
