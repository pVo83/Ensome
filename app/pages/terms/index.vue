<template>
  <div class="terms">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />
      <BlockLegalDocument :sections="termsOfUseSections" :updated-at="termsOfUseUpdatedAt">
        <template #title>Terms of <span class="accent">use</span></template>
      </BlockLegalDocument>
    </div>
  </div>
</template>

<script setup>
import { termsOfUseSections, termsOfUseUpdatedAt } from "#shared/termsOfUse"

usePageSeo({
  title: "Terms of Use",
  description: "Terms and conditions for using the Ensome website and services.",
})

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Terms of use" }]
</script>
