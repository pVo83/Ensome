export function useNavActive() {
  const route = useRoute()

  const isNavActive = (to) => {
    if (to === "/") return route.path === "/"
    return route.path === to || route.path.startsWith(`${to}/`)
  }

  return { isNavActive }
}
