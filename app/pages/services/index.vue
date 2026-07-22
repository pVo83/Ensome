<template>
  <div class="services">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />

      <UiHeading
        text="Services"
        title="Data Analytics Services"
        descr="From data integration and warehousing to analytics and machine learning — Ensome delivers end-to-end services that help you build reliable data foundations and make smarter decisions."
        :max-width="750"
      />
    </div>

    <BlockServices />
    <BlockCompany />
    <BlockContactCta />
    <BlockSubscribe />
  </div>
</template>

<script setup>
usePageSeo({
  title: "Services",
  description:
    "Explore Ensome data analytics services: machine learning, embedded analytics, access control, data analytics, big data consulting, and AI solutions for your business.",
})

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Services" }]
</script>
