export const blogTagList = [
  { id: 1, label: "All topics", slug: "" },
  { id: 2, label: "App", slug: "app" },
  { id: 3, label: "Management", slug: "management" },
  { id: 4, label: "Cmr", slug: "cmr" },
  { id: 5, label: "Big data", slug: "big-data" },
  { id: 6, label: "Media", slug: "media" },
  { id: 7, label: "Future", slug: "future" },
  { id: 8, label: "Cio", slug: "cio" },
  { id: 9, label: "Startup", slug: "startup" },
  { id: 10, label: "Team", slug: "team" },
  { id: 11, label: "Data", slug: "data" },
  { id: 12, label: "Data analytics", slug: "data-analytics" },
  { id: 13, label: "Information security", slug: "information-security" },
  { id: 14, label: "Proxy", slug: "proxy" },
]

export function getBlogTagUrl(slug) {
  return slug ? `/blog?tag=${slug}` : "/blog"
}
