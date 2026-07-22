export const faqList = [
  {
    title: "What are data analytics?",
    content:
      "Data analytics is the process of examining datasets to draw conclusions and support decisions. It includes collecting, cleaning, analyzing, and presenting data through reports, dashboards, and metrics that help teams understand performance and trends.",
  },
  {
    title: "What is data mining?",
    content:
      "Data mining is the process of discovering patterns, correlations, and anomalies in large datasets. It helps organizations predict trends, improve decision-making, and uncover hidden insights from structured and unstructured data.",
  },
  {
    title: "What is business intelligence?",
    content:
      "Business intelligence combines data analysis, reporting, and visualization tools to help teams monitor performance, track KPIs, and make informed strategic decisions based on reliable business metrics.",
  },
  {
    title: "What is exploratory data analysis (EDA)?",
    content:
      "Exploratory data analysis is an approach to analyzing datasets to summarize their main characteristics, often using visual methods. EDA helps identify patterns, spot anomalies, and test assumptions before formal modeling.",
  },
  {
    title: "What is confirmatory data analysis (CDA)?",
    content:
      "Confirmatory data analysis tests specific hypotheses using statistical methods. Unlike EDA, CDA focuses on validating predefined assumptions and measuring the significance of observed relationships in the data.",
  },
  {
    title: "What are predictive analytics?",
    content:
      "Predictive analytics uses historical data, statistical algorithms, and machine learning techniques to forecast future outcomes. It is widely applied in demand planning, risk assessment, and customer behavior prediction.",
  },
  {
    title: "What is data visualisation?",
    content:
      "Data visualisation transforms complex datasets into charts, graphs, and dashboards that make information easier to understand. Effective visualisation helps stakeholders quickly identify trends and communicate insights clearly.",
  },
]

export const getFaqAccordionItems = () =>
  faqList.map((item, index) => ({
    id: `faq-${index + 1}`,
    label: item.title,
    content: item.content,
  }))