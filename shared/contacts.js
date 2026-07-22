export const CONTACT_EMAIL = "ensome@info.co.us"
export const CONTACT_PHONE = "+1 601-201-5580"
export const CONTACT_PHONE_HREF = "tel:+16012015580"
export const CONTACT_ADDRESS = "1642 Washington Ave, Jackson, MS"

export const getGoogleMapsEmbedUrl = (address = CONTACT_ADDRESS) =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&hl=en&z=14&output=embed`

export const getGoogleMapsLink = (address = CONTACT_ADDRESS) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

export const contactList = [
  {
    id: 1,
    icon: "mail",
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    id: 2,
    icon: "call",
    label: "Phone",
    value: CONTACT_PHONE,
    href: CONTACT_PHONE_HREF,
  },
  {
    id: 3,
    icon: "location",
    label: "Address",
    value: CONTACT_ADDRESS,
    href: getGoogleMapsLink(),
  },
]
