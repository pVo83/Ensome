export const solutionsList = [
  {
    id: 1,
    icon: "book_database",
    title: "Data integration",
    descr:
      "Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.",
    link: "Read more",
    slug: "data-integration",
    sections: [
      {
        id: "overview",
        title: "What is data integration?",
        blocks: [
          {
            type: "paragraph",
            text: "Data integration connects disparate systems — CRM, ERP, marketing platforms, and databases — into a single coherent view. Without it, teams work from conflicting numbers and spend more time reconciling spreadsheets than making decisions.",
          },
          {
            type: "paragraph",
            text: "Modern integration goes beyond one-off imports: it covers continuous sync, data quality checks, lineage tracking, and governance policies that keep information secure and trustworthy across the organization.",
          },
        ],
      },
      {
        id: "approaches",
        title: "ETL vs ELT",
        blocks: [
          {
            type: "paragraph",
            text: "Choosing between ETL and ELT depends on where you transform data and how much compute your warehouse can handle:",
          },
          {
            type: "list",
            items: [
              {
                label: "ETL",
                text: "transforms data before loading into the target system — ideal when source data must be cleaned or anonymized upstream.",
              },
              {
                label: "ELT",
                text: "loads raw data first, then transforms inside the warehouse — faster to set up and scales well with cloud platforms.",
              },
              {
                label: "Hybrid pipelines",
                text: "combine both patterns when different sources require different handling within the same architecture.",
              },
            ],
          },
        ],
      },
      {
        id: "ensome",
        title: "Data integration in Ensome",
        blocks: [
          {
            type: "image",
            src: "/img/solutions/solutions1.jpg",
            alt: "Data integration workflow",
          },
          {
            type: "paragraph",
            text: "Ensome designs integration layers that fit your existing stack — from batch ETL jobs to near-real-time streaming. We map source schemas, define transformation rules, and set up monitoring so broken pipelines are caught before they reach dashboards.",
          },
          {
            type: "list",
            items: [
              {
                label: "Source audit",
                text: "inventory of systems, formats, and refresh frequencies before any connector is built.",
              },
              {
                label: "Governance",
                text: "role-based access, encryption in transit, and audit logs for every data movement.",
              },
              {
                label: "Documentation",
                text: "lineage diagrams and runbooks so your team can maintain pipelines independently.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: "calendar_data",
    title: "Data preparation",
    descr:
      "Data preparation and management; machine learning (ML); designing and implanting artificial intelligence (AI) solutions.",
    link: "Read more",
    slug: "data-preparation",
    sections: [
      {
        id: "overview",
        title: "What is data preparation?",
        blocks: [
          {
            type: "paragraph",
            text: "Data preparation is the work of turning raw, messy inputs into analysis-ready datasets. Analysts and data scientists typically spend the majority of their time here — joining tables, handling missing values, encoding categories, and validating outliers.",
          },
        ],
      },
      {
        id: "steps",
        title: "Preparation workflow",
        blocks: [
          {
            type: "image",
            src: "/img/solutions/solutions2.jpg",
            alt: "Data preparation workflow",
          },
          {
            type: "list",
            items: [
              {
                label: "Ingestion",
                text: "collect data from APIs, files, databases, and third-party services into a staging area.",
              },
              {
                label: "Profiling",
                text: "scan columns for null rates, duplicates, type mismatches, and unexpected distributions.",
              },
              {
                label: "Cleaning",
                text: "standardize formats, deduplicate records, and impute or flag incomplete values.",
              },
              {
                label: "Feature engineering",
                text: "create derived columns, aggregations, and time windows tailored to the use case.",
              },
            ],
          },
        ],
      },
      {
        id: "ensome",
        title: "Data preparation in Ensome",
        blocks: [
          {
            type: "paragraph",
            text: "We automate repeatable preparation steps and leave manual review only where human judgment matters — classification edge cases, business rule exceptions, and model validation.",
          },
          {
            type: "paragraph",
            text: "Prepared datasets are versioned and tagged with metadata so ML experiments and reports always reference the exact snapshot they were built on.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: "clipboard_data",
    title: "Big data",
    descr:
      "Big data infrastructure setup and support; big data quality and security management; big data capture, analysis and reporting.",
    link: "Read more",
    slug: "big-data",
    sections: [
      {
        id: "overview",
        title: "What is big data?",
        blocks: [
          {
            type: "paragraph",
            text: "Big data refers to datasets whose volume, velocity, or variety exceed what traditional databases handle comfortably. Think clickstreams, IoT sensor feeds, log files, and social signals — terabytes arriving daily from dozens of sources.",
          },
          {
            type: "paragraph",
            text: "The challenge is not storage alone: you need distributed processing, fault-tolerant pipelines, and tooling that lets analysts query petabyte-scale data without waiting hours for results.",
          },
        ],
      },
      {
        id: "benefits",
        title: "Key benefits",
        blocks: [
          {
            type: "list",
            items: [
              {
                label: "Scalability",
                text: "horizontal clusters grow with data volume instead of hitting single-server limits.",
              },
              {
                label: "Real-time analytics",
                text: "stream processing surfaces events within seconds, not after nightly batch runs.",
              },
              {
                label: "Cost efficiency",
                text: "separating hot and cold storage tiers keeps long-term retention affordable.",
              },
              {
                label: "Deeper insights",
                text: "combining structured and unstructured sources reveals patterns invisible in siloed reports.",
              },
            ],
          },
        ],
      },
      {
        id: "architecture",
        title: "Reference architecture",
        blocks: [
          {
            type: "image",
            src: "/img/solutions/solutions1.jpg",
            alt: "Big data architecture",
          },
          {
            type: "paragraph",
            text: "A typical Ensome big-data stack includes ingestion buses (Kafka or cloud equivalents), a processing layer (Spark or managed services), a lakehouse for structured queries, and BI tools on top for business users.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: "database",
    title: "Data warehousing",
    descr:
      "The process of constructing and using a data warehouse. Data warehouse and data marts design and implementation.",
    link: "Read more",
    slug: "data-warehousing",
    sections: [
      {
        id: "overview",
        title: "What is data warehousing?",
        blocks: [
          {
            type: "paragraph",
            text: "A data warehouse is a central repository optimized for analytical queries — star schemas, columnar storage, and pre-aggregated summaries that make reporting fast and consistent across departments.",
          },
          {
            type: "image",
            src: "/img/solutions/solutions2.jpg",
            alt: "Data warehousing",
          },
        ],
      },
      {
        id: "components",
        title: "Warehouse components",
        blocks: [
          {
            type: "paragraph",
            text: "Every warehouse Ensome builds includes these foundational layers:",
          },
          {
            type: "list",
            items: [
              {
                label: "Staging",
                text: "raw landing zone where source data arrives unchanged for audit and replay.",
              },
              {
                label: "Core model",
                text: "conformed dimensions and fact tables shared across the organization.",
              },
              {
                label: "Data marts",
                text: "subject-area slices — finance, sales, operations — tuned for specific teams.",
              },
              {
                label: "Semantic layer",
                text: "business-friendly definitions that shield report builders from SQL complexity.",
              },
            ],
          },
        ],
      },
      {
        id: "ensome",
        title: "Data warehousing in Ensome",
        blocks: [
          {
            type: "paragraph",
            text: "We choose cloud-native or on-prem platforms based on your compliance requirements and existing investments, then deliver a documented model your analysts can extend without breaking downstream reports.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: "data_whisker",
    title: "Self-service BI",
    descr:
      "Business intelligence; data analytics infrastructure design and implementation; scheduled analytics querying and reporting.",
    link: "Read more",
    slug: "self-service",
    sections: [
      {
        id: "overview",
        title: "What is self-service BI?",
        blocks: [
          {
            type: "paragraph",
            text: "Self-service BI empowers business users to explore data and build reports without filing a ticket to IT for every chart. Governed datasets, drag-and-drop tools, and shared templates keep agility high and chaos low.",
          },
        ],
      },
      {
        id: "practices",
        title: "BI practices",
        blocks: [
          {
            type: "paragraph",
            text: "Successful self-service programs balance freedom with guardrails. Ensome implements both:",
          },
          {
            type: "list",
            items: [
              {
                label: "Certified datasets",
                text: "IT-approved sources marked as trusted; ad-hoc uploads stay separate.",
              },
              {
                label: "Naming conventions",
                text: "consistent metric definitions so 'revenue' means the same thing in every dashboard.",
              },
              {
                label: "Training",
                text: "short workshops that teach filtering, drill-down, and sharing without SQL.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "Scheduled reports and alert thresholds ensure stakeholders receive updates automatically — daily sales summaries, inventory warnings, or campaign performance digests.",
          },
        ],
      },
      {
        id: "ensome",
        title: "Self-service BI in Ensome",
        blocks: [
          {
            type: "image",
            src: "/img/solutions/solutions1.jpg",
            alt: "Self-service BI dashboard",
          },
          {
            type: "paragraph",
            text: "We connect your warehouse to leading BI platforms, pre-build starter dashboards for each department, and document the data dictionary so new hires become productive within their first week.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    icon: "data_pie",
    title: "Data visualization",
    descr:
      "Interactive dashboarding; custom and pre-built visuals; multiple visualization techniques (symbol maps, line charts, pie charts...)",
    link: "Read more",
    slug: "data-visualization",
    sections: [
      {
        id: "what-is",
        title: "What is data visualization?",
        blocks: [
          {
            type: "paragraph",
            text: "Data visualization turns numbers into shapes humans parse instantly — trends as lines, comparisons as bars, geographies as maps. A well-chosen chart communicates in seconds what a table of figures hides in minutes.",
          },
          {
            type: "paragraph",
            text: "Effective visuals respect the audience: executives need KPI snapshots, analysts need drill-down detail, and operations teams need real-time status boards updated every few minutes.",
          },
        ],
      },
      {
        id: "types",
        title: "Types of data visualizations",
        blocks: [
          {
            type: "image",
            src: "/img/solutions/solutions2.jpg",
            alt: "Types of data visualizations",
          },
          {
            type: "paragraph",
            text: "Ensome selects chart types based on the question being asked, not on what looks most impressive:",
          },
          {
            type: "list",
            items: [
              {
                label: "Symbol maps",
                text: "plot events or metrics on geographic regions — ideal for regional sales or facility performance.",
              },
              {
                label: "Line charts",
                text: "show change over time; best for trends, seasonality, and before/after comparisons.",
              },
              {
                label: "Pie charts",
                text: "display part-to-whole relationships when there are few categories and proportions matter.",
              },
              {
                label: "Tables",
                text: "remain the right choice when exact values must be readable and sortable.",
              },
              {
                label: "Histograms",
                text: "reveal distribution shape — useful for quality control and customer spend bands.",
              },
              {
                label: "Scatter plots",
                text: "expose correlations between two numeric variables, including outliers that averages hide.",
              },
            ],
          },
        ],
      },
      {
        id: "practices",
        title: "Data visualization practices",
        blocks: [
          {
            type: "image",
            src: "/img/solutions/solutions1.jpg",
            alt: "Data visualization practices",
          },
          {
            type: "paragraph",
            text: "Clarity beats decoration. We limit color palettes, label axes explicitly, and avoid dual scales that mislead. Every dashboard gets a one-sentence headline stating the insight it is meant to convey.",
          },
          {
            type: "list",
            items: [
              {
                label: "Accessibility",
                text: "color-blind-safe palettes and sufficient contrast for screen readers.",
              },
              {
                label: "Responsiveness",
                text: "layouts that reflow on tablets and large monitors without hiding critical metrics.",
              },
              {
                label: "Performance",
                text: "aggregations pushed to the database so filters respond in under two seconds.",
              },
            ],
          },
        ],
      },
      {
        id: "ensome",
        title: "Data visualization in Ensome",
        blocks: [
          {
            type: "paragraph",
            text: "From executive scorecards to operational wallboards, Ensome delivers interactive dashboards your team can filter, export, and embed in internal portals.",
          },
          {
            type: "paragraph",
            text: "We prototype with real data in the first sprint, iterate on feedback, and hand over fully documented workbooks — not static screenshots that go stale the moment numbers change.",
          },
        ],
      },
    ],
  },
]

export function getSolutionUrl(slug) {
  return `/solutions/${slug}`
}
