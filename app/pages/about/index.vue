<template>
  <div class="about">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />

      <UiHeading
        text="About Us"
        title="We work with 15 years of experience"
        descr="For over 15 years, Ensome has helped businesses worldwide turn raw data into actionable insights through analytics, engineering, and IT solutions."
        :max-width="750"
      />
    </div>

    <div class="about__content">
      <div class="about__media">
        <UiPicture
          src="/img/about/about-media.jpg"
          alt="About Ensome"
          :width="1920"
          :height="590"
          cover
          loading="eager"
        />
      </div>

      <Company :hidden-clients-logos="false" :colored-b-g="true" />

      <section class="about__benefits">
        <BlockBenefits
          layout="grid"
          title="Why people choose Ensome?"
          descr="Discover what sets Ensome apart — expert team, proven methodology, and technology built for real business outcomes."
          :heading-max-width="750"
          :background-color="false"
          :padding="false"
        />
      </section>

      <BlockTestimonials :show-descr="true" />

      <section>
        <div class="container">
          <BlockCompanyClientsLogos :clients-list="clientsList" />
        </div>
      </section>

      <BlockContactCta />
      <BlockSubscribe />
    </div>
  </div>
</template>

<script setup>
import { clientsList } from "#shared/clientsList"
import Company from "~/components/block/company/Company.vue"

usePageSeo({
  title: "About Us",
  description:
    "Learn about Ensome — 15 years of experience in data analytics, engineering, and IT solutions for businesses worldwide.",
})

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "About" }]
</script>

<style lang="scss" scoped>
.about {
  &__content {
    padding: 120px 0 0;
    transition: padding var(--trs35);

    @include tablet {
      padding: 80px 0 0;
    }

    @include small-tablet {
      padding: 50px 0 0;
    }
  }

  &__benefits {
    padding: 60px 0 0;
    transition: padding var(--trs35);

    @include tablet {
      padding: 50px 0 0;
    }
  }

  &__media {
    height: 590px;
    transition: height var(--trs35);

    @include tablet {
      height: 400px;
    }

    @include small-tablet {
      height: 300px;
    }

    @include mobile {
      height: 230px;
    }
  }
}
</style>
