<template>
  <section class="faqs">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />

      <UiHeading
        text="FAQs"
        title="Frequently asked questions"
        descr="Answers to common questions about data analytics, business intelligence, and how Ensome helps teams turn data into actionable insights."
      />

      <div class="faqs__accordion-wrapper">
        <UiAccordion
          class="faqs__accordion"
          :items="faqAccordionItems"
          icon="plus"
          :width-icon="16"
          :height-icon="16"
          variant="outlined"
        />
      </div>
    </div>

    <BlockContactCta />
    <BlockSubscribe />
  </section>
</template>

<script setup>
import { getFaqAccordionItems } from "#shared/faqList"

const faqAccordionItems = getFaqAccordionItems()
const breadcrumbs = [{ to: "/", label: "Home" }, { label: "FAQs" }]

usePageSeo({
  title: "FAQs",
  description: "Frequently asked questions about our services and products.",
})
</script>

<style lang="scss" scoped>
.faqs {
  &__accordion-wrapper {
    padding: 120px 0;
    transition: padding var(--trs35);

    @include tablet {
      padding: 80px 0;
    }

    @include small-tablet {
      padding: 50px 0;
    }
  }
}
</style>
