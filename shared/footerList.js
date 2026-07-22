import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
} from "./contacts.js"

export const footerList = [
  {
    id: 1,
    title: "Quick link",
    span: 2,
    links: [
      { to: "/", label: "Home" },
      { to: "/solutions", label: "Solutions" },
      { to: "/about", label: "About Us" },
      { to: "/team", label: "Our team" },
      { to: "/blog", label: "Blog" },
      { to: "/contacts", label: "Contacts" },
    ],
  },
  {
    id: 2,
    title: "More",
    span: 2,
    links: [
      { to: "/services", label: "Services" },
      { to: "/faqs", label: "FAQ" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    id: 3,
    title: "Contact info",
    span: 3,
    contact: {
      email: CONTACT_EMAIL,
      phone: CONTACT_PHONE,
      phoneHref: CONTACT_PHONE_HREF,
      address: CONTACT_ADDRESS,
    },
  },
]