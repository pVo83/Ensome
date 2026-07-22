export function publicUrl(path) {
  const config = useRuntimeConfig()
  const base = config.app.baseURL || "/"
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path

  return `${base}${normalizedPath}`
}
