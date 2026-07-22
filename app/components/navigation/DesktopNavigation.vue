<template>
  <nav class="nav" aria-label="desktop navigation">
    <ul class="nav__list">
      <li v-for="nav in navigation" :key="nav.to" class="nav__item">
        <NuxtLink
          :to="nav.to"
          class="nav__link"
          :class="{ 'nav__link--active': isNavActive(nav.to) }"
        >
          {{ nav.label }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { navigation } from "#shared/navigation"

const { isNavActive } = useNavActive()
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  &__link {
    color: var(--gray);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 500;
    transition: color var(--trs35);

    &:hover {
      color: var(--black);
    }

    &--active {
      color: var(--black);
    }
  }
}
</style>
