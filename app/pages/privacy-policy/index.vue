<template>
  <div class="privacy-policy">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />
      <BlockLegalDocument :sections="privacyPolicySections" :updated-at="privacyPolicyUpdatedAt">
        <template #title>Privacy <span class="accent">policy</span></template>
      </BlockLegalDocument>
    </div>
  </div>
</template>

<script setup>
import { privacyPolicySections, privacyPolicyUpdatedAt } from "#shared/privacyPolicy"

usePageSeo({
  title: "Privacy Policy",
  description: "Read how Ensome collects, uses, and protects your personal information.",
})

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Privacy policy" }]
</script>
