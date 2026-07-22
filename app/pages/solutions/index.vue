<template>
  <div class="solutions">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />
      <UiHeading
        text="solutions"
        title="Data analytics solutions"
        descr="Getting ready for your success, we provide truly outstanding IT solutions."
        :max-width="730"
      />
    </div>

    <BlockSolutions />
    <BlockAdvantages />
    <BlockTestimonials />
    <BlockContactCta />
    <BlockSubscribe />
  </div>
</template>

<script setup>
usePageSeo({
  title: "Solutions",
  description:
    "Explore Ensome data analytics solutions: dashboards, pipelines, forecasting, and custom IT services tailored to your business.",
})

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Solutions" }]
</script>
