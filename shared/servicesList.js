export const servicesList = [
  {
    id: 1,
    icon: "brain-isometric",
    title: "Machine learning",
    descr:
      "Apply ML models to your data for forecasting, classification, and anomaly detection — without building infrastructure from scratch.",
    link: "Read more",
    slug: "machine-learning",
    sections: [
      {
        id: "customer",
        title: "Customer",
        blocks: [
          {
            type: "paragraph",
            text: "A mid-size logistics company needed to predict delivery delays across 12 regions. Their analysts relied on spreadsheets updated weekly, so route planners always reacted after problems appeared.",
          },
          {
            type: "image",
            src: "/img/service-page/service-mediaLarge1.jpg",
            alt: "Customer team reviewing analytics",
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "Historical shipment data lived in three systems with inconsistent formats. There was no feature store, model versioning, or monitoring — every experiment started from zero and results were hard to reproduce. The team wanted forecasts refreshed daily, explainable outputs for operations managers, and a path to retrain models without vendor lock-in.",
          },
        ],
      },
      {
        id: "solution",
        title: "Solution",
        blocks: [
          {
            type: "paragraph",
            text: "Ensome built an ML pipeline that ingests TMS and GPS feeds, engineers time-window features, and serves predictions to an internal dashboard used by dispatchers every morning.",
          },
          {
            type: "split",
            src: "/img/service-page/service-media1.jpg",
            alt: "Machine learning workflow",
            features: [
              "Hybrid mobile access",
              "Location services",
              "Visitor management",
              "Cybersecurity coordination",
            ],
          },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          {
            type: "paragraph",
            text: "Delay prediction accuracy improved within the first quarter. Planners shifted from reactive firefighting to proactive rerouting, and the data science team cut experiment setup time from days to hours.",
          },
        ],
      },
      {
        id: "technologies",
        title: "Technologies",
        blocks: [
          {
            type: "paragraph",
            text: "Python, scikit-learn, MLflow, Apache Airflow, PostgreSQL, and a cloud warehouse for feature storage. Models are exported to a REST endpoint consumed by the operations portal.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: "trending-lines-isometric",
    title: "Embed analytics",
    descr:
      "Bring charts, KPIs, and reports into your existing tools so teams can act on insights without switching context.",
    link: "Read more",
    slug: "embed-analytics",
    sections: [
      {
        id: "customer",
        title: "Customer",
        blocks: [
          {
            type: "paragraph",
            text: "A SaaS product team wanted revenue and usage metrics visible inside their admin panel — not in a separate BI tab that only finance opened once a month.",
          },
          {
            type: "image",
            src: "/img/service-page/service-mediaLarge2.jpg",
            alt: "SaaS product team reviewing analytics",
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "Permissions had to mirror the parent application: a regional manager must never see another region's numbers. Latency above two seconds was unacceptable on the home screen.",
          },
        ],
      },
      {
        id: "solution",
        title: "Solution",
        blocks: [
          {
            type: "paragraph",
            text: "Ensome embedded governed dashboards directly into the product shell with SSO, row-level security, and cached KPI tiles tuned for the home screen.",
          },
          {
            type: "split",
            src: "/img/service-page/service-media2.jpg",
            alt: "Embedded analytics dashboard",
            features: [
              "Dashboard embedding",
              "Row-level security",
              "Cached KPI tiles",
              "White-label theming",
            ],
          },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          {
            type: "paragraph",
            text: "Weekly active viewers of embedded reports grew 4× because metrics appeared where users already worked. Ad-hoc export requests to the analytics team dropped after self-serve filters shipped.",
          },
        ],
      },
      {
        id: "technologies",
        title: "Technologies",
        blocks: [
          {
            type: "paragraph",
            text: "Looker embed SDK, dbt semantic layer, Redis cache, and OAuth SSO tied to the product's identity provider.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: "key-isometric",
    title: "Access control",
    descr:
      "Fine-grained permissions ensure the right people see the right data — with full audit logs for compliance.",
    link: "Read more",
    slug: "access-control",
    sections: [
      {
        id: "customer",
        title: "Customer",
        blocks: [
          {
            type: "paragraph",
            text: "A healthcare analytics vendor had to prove who accessed patient-level datasets during SOC 2 audits. Shared service accounts and coarse database roles were no longer acceptable.",
          },
          {
            type: "image",
             src: "/img/service-page/service-mediaLarge3.jpg",
            alt: "Healthcare analytics team",
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "Policies differed by client contract: some datasets required MFA, others needed IP allowlists. Changes had to propagate to the warehouse, BI layer, and API exports within minutes.",
          },
        ],
      },
      {
        id: "solution",
        title: "Solution",
        blocks: [
          {
            type: "paragraph",
            text: "Ensome implemented a central policy engine that syncs grants downstream and blocks queries before they reach restricted tables.",
          },
          {
            type: "split",
             src: "/img/service-page/service-media3.jpg",
            alt: "Access control dashboard",
            features: ["Role-based access", "Audit logs", "Policy templates", "Access reviews"],
          },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          {
            type: "paragraph",
            text: "The last audit completed with zero critical findings on access management. Mean time to revoke access dropped from 48 hours to under 15 minutes.",
          },
        ],
      },
      {
        id: "technologies",
        title: "Technologies",
        blocks: [
          {
            type: "paragraph",
            text: "Open Policy Agent, cloud IAM integrations, warehouse-native row filters, and immutable log storage for compliance exports.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: "data-area-isometric",
    title: "Data analytics",
    descr:
      "Turn raw numbers into dashboards, reports, and decisions your whole organization can trust.",
    link: "Read more",
    slug: "data-analytics",
    sections: [
      {
        id: "customer",
        title: "Customer",
        blocks: [
          {
            type: "paragraph",
            text: "A retail chain with 200+ stores needed a single source of truth for sales, inventory, and promo performance — replacing a patchwork of store-level Excel files.",
          },
          {
            type: "image",
             src: "/img/service-page/service-mediaLarge2.jpg",
            alt: "Data analytics team",
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "Duplicate SKUs and timezone mismatches skewed daily totals. Month-end close reports took five business days to compile, and merchandising wanted self-serve filters without filing tickets to IT.",
          },
        ],
      },
      {
        id: "solution",
        title: "Solution",
        blocks: [
          {
            type: "paragraph",
            text: "We consolidated POS and ERP feeds into a governed warehouse, published certified datasets, and rolled out department dashboards with drill-down to store level.",
          },
          {
            type: "split",
            src: "/img/service-page/service-media5.jpg",
            alt: "Retail analytics dashboard",
            features: ["Daily sales mart", "Inventory KPIs", "Promo analysis", "Executive summary"],
          },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          {
            type: "paragraph",
            text: "Month-end reporting dropped from five days to one. Merchandising teams now self-serve filters without opening tickets to IT.",
          },
        ],
      },
      {
        id: "technologies",
        title: "Technologies",
        blocks: [
          {
            type: "paragraph",
            text: "Snowflake, Fivetran, dbt, Metabase, and scheduled email digests for store managers.",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    icon: "data-pie-isometric",
    title: "Big data consulting",
    descr:
      "Design and operate platforms that handle high-volume, high-velocity data without sacrificing reliability.",
    link: "Read more",
    slug: "big-data-consulting",
    sections: [
      {
        id: "customer",
        title: "Customer",
        blocks: [
          {
            type: "paragraph",
            text: "An IoT manufacturer generates billions of sensor readings per month. Their on-prem cluster could not keep up with ingest spikes during firmware rollouts. They needed a reference architecture, cost controls, and a team playbook to operate the platform after go-live.",
          },
          {
            type: "image",
           src: "/img/service-page/service-mediaLarge1.jpg",
            alt: "IoT data engineering team",
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "Batch jobs overlapped with streaming pipelines, causing cluster contention. Cold storage costs were rising because nobody defined retention tiers. Peak events exceeded 500k messages per second during device updates.",
          },
        ],
      },
      {
        id: "solution",
        title: "Solution",
        blocks: [
          {
            type: "paragraph",
            text: "Ensome redesigned the platform around streaming ingest, lakehouse storage, and automated tiering with runbooks for on-call engineers.",
          },
          {
            type: "split",
            src: "/img/service-page/service-media6.jpg",
            alt: "Big data platform diagram",
            features: ["Kafka ingest", "Stream processing", "Lakehouse SQL", "Tiered storage"],
          },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          {
            type: "paragraph",
            text: "Ingest lag during peak events fell below 30 seconds. Storage spend dropped after hot/warm/cold tiers were enforced automatically.",
          },
        ],
      },
      {
        id: "technologies",
        title: "Technologies",
        blocks: [
          {
            type: "paragraph",
            text: "Apache Kafka, Apache Spark, Delta Lake, Kubernetes, Grafana, and PagerDuty for pipeline monitoring.",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    icon: "bot-isometric",
    title: "Artificial intelligence",
    descr:
      "From proof-of-concept to production AI — NLP, computer vision, and generative workflows with governance built in.",
    link: "Read more",
    slug: "artificial-intelligence",
    sections: [
      {
        id: "customer",
        title: "Customer",
        blocks: [
          {
            type: "paragraph",
            text: "A legal tech startup wanted to summarize contract clauses and flag non-standard terms. Lawyers would not trust a black-box model without citations back to source paragraphs.",
          },
          {
            type: "image",
           src: "/img/service-page/service-mediaLarge3.jpg",
            alt: "Legal tech team working with AI tools",
          },
        ],
      },
      {
        id: "challenge",
        title: "Challenge",
        blocks: [
          {
            type: "paragraph",
            text: "Pilot accuracy looked promising, but there was no review workflow, no model registry, and no plan for PII handling before production rollout.",
          },
        ],
      },
      {
        id: "solution",
        title: "Solution",
        blocks: [
          {
            type: "paragraph",
            text: "We shipped a retrieval-augmented pipeline with human review for low-confidence items, then hardened it for SOC 2 and EU data residency.",
          },
          {
            type: "split",
           src: "/img/service-page/service-media3.jpg",
            alt: "AI document processing",
            features: [
              "RAG with citations",
              "Human review queue",
              "Model registry",
              "PII redaction",
            ],
          },
        ],
      },
      {
        id: "results",
        title: "Results",
        blocks: [
          {
            type: "paragraph",
            text: "First-pass review time decreased by 35%. Attorneys accepted outputs when every summary linked to the exact clause in the PDF viewer.",
          },
        ],
      },
      {
        id: "technologies",
        title: "Technologies",
        blocks: [
          {
            type: "paragraph",
            text: "Hosted LLM with fine-tuned classification, vector store for document retrieval, and audit trail of prompts, outputs, and reviewer overrides.",
          },
        ],
      },
    ],
  },
]

export function getServiceUrl(slug) {
  return `/services/${slug}`
}

export const getServiceAccordionItems = () =>
  servicesList.map((service) => ({
    id: service.slug,
    label: service.title,
    content: service.descr,
    to: getServiceUrl(service.slug),
  }))
