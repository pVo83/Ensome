<template>
  <div class="contacts-map">
    <iframe
      class="contacts-map__iframe"
      :src="src"
      width="100%"
      height="100%"
      style="border: 0"
      :title="address"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    />

    <div class="contacts-map__address">
      <UiAppIcon class="contacts-map__pin" name="location" :width="24" :height="24" />
      <span class="contacts-map__text">{{ address }}</span>
    </div>
  </div>
</template>

<script setup>
import { CONTACT_ADDRESS, getGoogleMapsEmbedUrl } from "#shared/contacts"

defineProps({
  src: {
    type: String,
    default: () => getGoogleMapsEmbedUrl(),
  },
  address: {
    type: String,
    default: CONTACT_ADDRESS,
  },
})
</script>

<style lang="scss" scoped>
.contacts-map {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;

  &::after {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: rgb(241 246 250 / 45%);
    pointer-events: none;
    content: "";
  }

  &__iframe {
    display: block;
    width: 100%;
    height: 100%;
    filter: saturate(0.35) brightness(1.08) contrast(0.92);
  }

  &__address {
    position: absolute;
    bottom: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    align-items: center;
    padding: 12px 20px;
    border-radius: var(--radius-md);
    background: rgb(255 255 255 / 80%);
    max-width: calc(100% - 40px);
    gap: 12px;
    backdrop-filter: blur(8px);
  }

  &__pin {
    flex-shrink: 0;
    color: var(--primary);
  }

  &__text {
    color: var(--primary);
    font-family: var(--ff-secondary);
    font-size: var(--fs-12);
    font-weight: 600;
    line-height: 1.4;
  }
}
</style>
