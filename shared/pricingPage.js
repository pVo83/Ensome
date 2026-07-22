export const pricingNotesList = [
  {
    id: 1,
    icon: "key-isometric",
    title: "Secure by default",
    descr:
      "Every plan includes role-based access, encrypted storage, and audit-ready activity logs so your data stays protected.",
  },
  {
    id: 2,
    icon: "trending-lines-isometric",
    title: "Flexible billing",
    descr:
      "Switch between monthly and yearly billing on paid plans. Upgrade or downgrade as your team grows — no long-term lock-in.",
  },
  {
    id: 3,
    icon: "bot-isometric",
    title: "Enterprise on your terms",
    descr:
      "Custom deployments, dedicated support, and SLAs tailored to compliance, infrastructure, and scale requirements.",
  },
]

export const pricingFaqList = [
  {
    title: "Can I change my plan later?",
    content:
      "Yes. You can upgrade or downgrade at any time from your account dashboard. When you switch plans, billing is adjusted automatically for the remainder of the cycle.",
  },
  {
    title: "What does the free trial include?",
    content:
      "The free trial gives small teams full access to core analytics features for up to 5 users. No credit card is required to start, and you can move to a paid plan when you are ready.",
  },
  {
    title: "How does yearly billing work?",
    content:
      "Yearly billing is charged once per year and typically saves compared to monthly rates. You can toggle monthly or yearly pricing on each plan card before choosing a plan.",
  },
  {
    title: "Do you offer custom enterprise pricing?",
    content:
      "Yes. Enterprise plans are built around your team size, data volume, and compliance needs. Contact us to discuss a tailored package and dedicated support options.",
  },
]

export const getPricingFaqAccordionItems = () =>
  pricingFaqList.map((item, index) => ({
    id: `pricing-faq-${index + 1}`,
    label: item.title,
    content: item.content,
  }))
