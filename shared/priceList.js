export const priceList = [
  {
    id: 1,
    title: "Free trial",
    price: {
      monthly: "$00",
      yearly: "$00",
    },
    buttonTitle: "Choose plan",
    services: [
      { id: 1, text: "For small teams – 5 users" },
      { id: 2, text: "Community support" },
    ],
  },
  {
    id: 2,
    title: "Lite",
    price: {
      monthly: "$99",
      yearly: "$89",
    },
    buttonTitle: "Choose plan",
    services: [
      { id: 1, text: "For small teams – 15 users" },
      { id: 2, text: "Individual support" },
      { id: 3, text: "Individual data – 60GB" },
    ],
  },
  {
    id: 3,
    title: "Basic",
    recommended: true,
    price: {
      monthly: "$199",
      yearly: "$169",
    },
    buttonTitle: "Choose plan",
    services: [
      { id: 1, text: "Individual support" },
      { id: 2, text: "Individual data – 120GB" },
      { id: 3, text: "Advanced permissions" },
    ],
  },
  {
    id: 4,
    title: "For enterprises",
    custom: "Custom",
    buttonTitle: "Choose plan",
    services: [
      { id: 1, text: "Unlimited team members" },
      { id: 2, text: "Individual support" },
      { id: 3, text: "Unlimited Individual data" },
      { id: 4, text: "Advanced permissions" },
      { id: 5, text: "Data history" },
      { id: 6, text: "Audit log" },
      { id: 7, text: "All functions included" },
    ],
  },
]
