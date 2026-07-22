import { useMobileStore } from "@/components/navigation/store/useMobileStore.js"

const DESKTOP_MEDIA = "(min-width: 1024px)"

export function useCloseMenuOnDesktop() {
  const mobileStore = useMobileStore()

  onMounted(() => {
    const media = window.matchMedia(DESKTOP_MEDIA)

    const closeIfDesktop = () => {
      if (media.matches) mobileStore.closeMenu()
    }

    closeIfDesktop()
    media.addEventListener("change", closeIfDesktop)
    onUnmounted(() => media.removeEventListener("change", closeIfDesktop))
  })
}
