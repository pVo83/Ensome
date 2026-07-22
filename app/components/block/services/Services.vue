<template>
  <section class="services">
    <div class="container">
      <ul class="services__list">
        <li v-for="item in servicesList" :key="item.id" class="services__item">
          <CardInfo
            :icon="item.icon"
            :title="item.title"
            :descr="item.descr"
            :text="item.link"
            :link="getServiceUrl(item.slug)"
            hidden-link
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { servicesList, getServiceUrl } from "#shared/servicesList"
</script>

<style lang="scss" scoped>
.services {
  padding: 120px 0 0;
  transition: padding var(--trs35);

  @include tablet {
    padding: 80px 0 0;
  }

  @include small-tablet {
    padding: 50px 0 0;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 32px;

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
}
</style>
