<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <Logo :width="128" :height="46" />

        <div class="header__desktop">
          <DesktopNavigation />
          <MobileNavigation :is-open="mobileStore.isMenuOpen" @close="mobileStore.closeMenu" />
        </div>

        <div class="header__media">
          <UiButton
            title="Watch the demo"
            variant="primary"
            size="small"
            icon="play_circle"
            @click="modalStore.openModal"
          />
        </div>

        <div class="header__burger">
          <UiButton
            icon="burger"
            variant="icon"
            size="medium"
            :aria-label="mobileStore.isMenuOpen ? 'Закрыть меню' : 'Открыть меню'"
            :aria-expanded="mobileStore.isMenuOpen"
            aria-controls="mobile-menu"
            :icon-size="20"
            @click="mobileStore.openMenu"
          />
        </div>
      </div>
    </div>
  </header>

  <DemoVideoModal
    :is-open="modalStore.isShowModal"
    title="Ensome demo"
    :max-width-modal="920"
    padding-body="0 16px 16px"
    @close="modalStore.closeModal"
  >
    <video
      class="header__video-player"
      :src="videoSrc"
      controls
      playsinline
      aria-label="Ensome product demo"
    />
  </DemoVideoModal>
</template>

<script setup>
import DesktopNavigation from "../navigation/DesktopNavigation.vue"
import MobileNavigation from "../navigation/MobileNavigation.vue"
import DemoVideoModal from "@/components/ui/modal/Modal.vue"
import { publicUrl } from "@/utils/publicUrl"
import { useModalStore } from "@/components/ui/modal/const/useModalStore.js"
import { useMobileStore } from "@/components/navigation/store/useMobileStore.js"

const modalStore = useModalStore()
const mobileStore = useMobileStore()
const videoSrc = publicUrl("/video/demo.mp4")

useCloseMenuOnDesktop()
</script>

<style lang="scss" scoped>
.header {
  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 126px;
    gap: 20px;
    transition: height var(--trs35);

    @include small-tablet {
      height: 70px;
    }
  }

  &__media {
    @include tablet {
      margin-left: auto;
    }

    @include small-tablet {
      display: none;
    }
  }

  &__desktop {
    @include tablet {
      display: none;
    }
  }

  &__burger {
    display: none;

    @include tablet {
      display: block;
    }
  }

  &__video-player {
    display: block;
    width: 100%;
    border-radius: var(--radius-md);
    background-color: var(--black);
    aspect-ratio: 16 / 9;
  }
}
</style>
