const SCROLL_EDGE = 2

export function useScrollCarousel(trackRef = ref(null)) {
  const isBeginning = ref(true)
  const isEnd = ref(false)

  function getScrollStep() {
    const track = trackRef.value
    const first = track?.children[0]
    if (!track || !first) return 0

    const styles = getComputedStyle(track)
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0

    return first.getBoundingClientRect().width + gap
  }

  function updateNavigation() {
    const track = trackRef.value
    if (!track) return

    const maxScroll = track.scrollWidth - track.clientWidth

    isBeginning.value = track.scrollLeft <= SCROLL_EDGE
    isEnd.value = maxScroll <= SCROLL_EDGE || track.scrollLeft >= maxScroll - SCROLL_EDGE
  }

  function scrollBySlide(direction) {
    trackRef.value?.scrollBy({
      left: direction * getScrollStep(),
      behavior: "smooth",
    })
  }

  let resizeObserver = null

  onMounted(() => {
    updateNavigation()

    const track = trackRef.value
    if (!track || typeof ResizeObserver === "undefined") return

    resizeObserver = new ResizeObserver(updateNavigation)
    resizeObserver.observe(track)
  })

  onBeforeUnmount(() => {
    resizeObserver?.disconnect()
  })

  return {
    trackRef,
    isBeginning,
    isEnd,
    updateNavigation,
    scrollPrev: () => scrollBySlide(-1),
    scrollNext: () => scrollBySlide(1),
  }
}
