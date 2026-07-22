<template>
  <section class="team-contact">
    <div class="team-contact__content">
      <UiTitle tag="h2">
        Want <span class="accent">{{ member.name }}</span> to share his expertise with you?
      </UiTitle>
      <BlockContactForm variant="underline" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  member: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.team-contact {
  &__content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
}
</style>
