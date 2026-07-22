<template>
  <div class="team">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />
      <UiHeading
        text="Our team"
        title="Get to know us closer"
        descr="Meet the people behind Ensome — analysts, engineers, and consultants who turn complex data into clear business outcomes."
      />
      <div class="team__content">
        <BlockTeamIntro />
        <BlockTeamList />
      </div>
    </div>
  </div>
</template>

<script setup>
usePageSeo({
  title: "Team",
  description:
    "Meet the Ensome team — experts in data analytics, engineering, and IT solutions with years of hands-on experience.",
})

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Our team" }]
</script>

<style lang="scss" scoped>
.team {
  &__content {
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
