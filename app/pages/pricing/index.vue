<template>
  <section class="pricing-page">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />

      <UiHeading
        text="Pricing"
        title="Choose the plan that fits your team"
        descr="Flexible plans for teams of any size — from a free trial to enterprise-grade analytics and support."
        :max-width="750"
      />
    </div>

    <BlockPricing :show-title="false" />

    <section class="pricing-page__notes">
      <div class="container">
        <UiTitle class="pricing-page__notes-title" tag="h3" title="What's included in every plan" />
        <ul class="pricing-page__notes-list">
          <li v-for="item in pricingNotesList" :key="item.id" class="pricing-page__notes-item">
            <CardInfo :icon="item.icon" :title="item.title" :descr="item.descr" />
          </li>
        </ul>
      </div>
    </section>

    <section class="pricing-page__faq">
      <div class="container">
        <UiAccordion
          class="pricing-page__accordion"
          title="Pricing questions"
          :items="pricingFaqItems"
          icon="plus"
          :width-icon="16"
          :height-icon="16"
          variant="underline"
        />
      </div>
    </section>

    <BlockContactCta />
    <BlockSubscribe />
  </section>
</template>

<script setup>
import { getPricingFaqAccordionItems, pricingNotesList } from "#shared/pricingPage"
import CardInfo from "~/components/card/card-info.vue"

const breadcrumbs = [{ to: "/", label: "Home" }, { label: "Pricing" }]
const pricingFaqItems = getPricingFaqAccordionItems()

usePageSeo({
  title: "Pricing",
  description:
    "Compare Ensome pricing plans — free trial, Lite, Basic, and custom enterprise options for data analytics and IT solutions.",
})
</script>

<style lang="scss" scoped>
.pricing-page {
  :deep(.pricing) {
    padding: 80px 0 60px;
  }

  &__notes {
    padding-bottom: 80px;
  }

  &__notes-title {
    margin-bottom: 40px;
    text-align: center;
  }

  &__notes-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 32px;
    margin: 0;
    padding: 0;

    @include tablet {
      grid-template-columns: 1fr;
    }
  }

  &__notes-item {
    display: flex;
  }

  &__faq {
    padding: 0 0 120px;
    transition: padding var(--trs35);

    @include tablet {
      padding: 0 0 80px;
    }

    @include small-tablet {
      padding: 0 0 50px;
    }
  }
}
</style>
