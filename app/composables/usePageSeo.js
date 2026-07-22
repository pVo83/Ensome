const SITE_NAME = "Ensome"

export function usePageSeo({ title, description }) {
  useSeoMeta({
    title,
    description,
    ogTitle: `${title} | ${SITE_NAME}`,
    ogDescription: description,
  })
}
