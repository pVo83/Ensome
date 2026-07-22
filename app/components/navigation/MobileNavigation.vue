<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="mobile-nav__overlay" aria-hidden="true" @click="handleClose" />
    </Transition>

    <Transition name="slide">
      <nav v-if="isOpen" id="mobile-menu" class="mobile-nav" aria-label="Mobile navigation">
        <div class="mobile-nav__top">
          <Logo :width="128" :height="46" />

          <UiButton
            icon="close"
            variant="icon"
            size="medium"
            aria-label="Закрыть меню"
            :icon-size="20"
            @click="handleClose"
          />
        </div>

        <ul class="mobile-nav__list">
          <li v-for="item in navigation" :key="item.to" class="mobile-nav__item">
            <NuxtLink
              :to="item.to"
              class="mobile-nav__link"
              :class="{ 'mobile-nav__link--active': isNavActive(item.to) }"
              @click="handleClose"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="mobile-nav__bottom">
          <span class="mobile-nav__bottom-text">Follow us:</span>
          <ul class="mobile-nav__bottom-list">
            <li v-for="social in socialList" :key="social.id" class="mobile-nav__bottom-item">
              <UiSocial
                :icon-social="social.iconSocial"
                :label="social.label"
                :link="social.link"
                :hover-color="social.hoverColor"
                :color-icon="true"
                width="26"
                height="26"
              />
            </li>
          </ul>
        </div>
      </nav>
    </Transition>
  </Teleport>
</template>

<script setup>
import { navigation } from "#shared/navigation"
import { socialList } from "#shared/socialList"

const { isNavActive } = useNavActive()

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["close"])

function handleClose() {
  emit("close")
}

watch(
  () => props.isOpen,
  (open) => {
    if (!import.meta.client) return
    document.body.classList.toggle("no-scroll", open)
  },
)

function onKeydown(event) {
  if (event.key === "Escape" && props.isOpen) {
    emit("close")
  }
}

onMounted(() => {
  window.addEventListener("keydown", onKeydown)
})

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown)

  if (import.meta.client) {
    document.body.classList.remove("no-scroll")
  }
})
</script>

<style lang="scss" scoped>
.mobile-nav {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 21;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px 16px 24px;
  background-color: var(--white);
  box-shadow: 0 35px 24px -35px color-mix(in srgb, var(--black) 30%, transparent);
  transition: width var(--trs35);

  &__overlay {
    position: fixed;
    inset: 0;
    z-index: 3;
    background-color: color-mix(in srgb, var(--white) 10%, transparent);
    backdrop-filter: saturate(100%) blur(1px);
    cursor: pointer;
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  &__list {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 16px;
  }

  &__link {
    color: var(--gray);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 500;
    transition: color var(--trs35);

    &:hover {
      color: var(--black);
    }

    &--active {
      color: var(--black);
    }
  }

  &__bottom {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    gap: 20px;
    border-top: 1px solid color-mix(in srgb, var(--black) 10%, transparent);
    padding: 26px 0 0;

    &-list {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-left: auto;
    }

    &-text {
      color: var(--black);
      font-family: var(--ff-secondary);
      font-size: var(--fs-16);
      font-weight: 500;
      line-height: 1.4;
      white-space: nowrap;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--trs35);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform var(--trs35);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
</style>
