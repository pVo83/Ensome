<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="overlay" @click.self="handleClose" />
    </Transition>

    <Transition name="slide">
      <div
        v-if="isOpen"
        class="modal"
        :style="{ maxWidth: maxWidthModal + 'px' }"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
      >
        <div class="modal__top">
          <span :id="titleId">{{ title }}</span>
          <UiButton
            variant="icon"
            icon="close"
            :icon-size="22"
            aria-label="Close"
            @click="handleClose"
          />
        </div>
        <div class="modal__body" :style="{ padding: paddingBody }">
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  maxWidthModal: {
    type: Number,
    default: 450,
  },
  paddingBody: {
    type: String,
    default: "16px",
  },
})

const emit = defineEmits(["close"])

const titleId = useId()

function handleClose() {
  emit("close")
}

watch(
  () => props.isOpen,
  (stopScroll) => {
    if (!import.meta.client) return
    document.body.classList.toggle("no-scroll", stopScroll)
  },
)

function closeEscape(event) {
  if (event.key === "Escape" && props.isOpen) handleClose()
}

onMounted(() => {
  window.addEventListener("keydown", closeEscape)
})

onUnmounted(() => {
  window.removeEventListener("keydown", closeEscape)

  if (import.meta.client) {
    document.body.classList.remove("no-scroll")
  }
})
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: color-mix(in srgb, var(--white) 25%, transparent);
  backdrop-filter: saturate(100%) blur(5px);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: calc(100% - 20px);
  border-radius: var(--radius-md);
  background-color: var(--white);
  transform: translate(-50%, -50%);
  box-shadow:
    0 20px 20px -17px rgb(41 45 51 / 12%),
    30px -30px 10px -35px rgb(41 45 51 / 19%);

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
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
  transition:
    opacity var(--trs35),
    transform var(--trs35);
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate(-50%, -40%);
}
</style>
