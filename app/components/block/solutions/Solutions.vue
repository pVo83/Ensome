<template>
  <section class="solutions">
    <div class="container">
      <div class="solutions__content">
        <ul class="solutions__list">
          <li v-for="solutions in solutionsList" :key="solutions.id" class="solutions__item">
            <CardInfo
              :icon="solutions.icon"
              :title="solutions.title"
              :descr="solutions.descr"
              :text="solutions.link"
              :link="getSolutionUrl(solutions.slug)"
              hidden-link
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { solutionsList, getSolutionUrl } from "#shared/solutionsList"
</script>

<style lang="scss" scoped>
.solutions {
  padding: 120px 0;
  transition: padding var(--trs35);

  @include tablet {
    padding: 80px 0;
  }

  @include small-tablet {
    padding: 50px 0;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__item {
    display: flex;
    height: 100%;
  }
}
</style>
