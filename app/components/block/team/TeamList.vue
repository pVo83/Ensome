<template>
  <section class="team-cards">
    <div class="team-cards__content">
      <ul class="team-cards__list">
        <li v-for="member in teamList" :key="member.id" class="team-cards__item">
          <NuxtLink :to="`/team/${member.slug}`" class="team-cards__link" />
          <CardTeam
            :foto="member.foto"
            :name="member.name"
            :position="member.position"
            :socials="member.socials"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { teamList } from "#shared/teamList"
</script>

<style lang="scss" scoped>
.team-cards {
  padding: 120px 0;
  transition: padding var(--trs35);

  @include tablet {
    padding: 80px 0;
  }

  @include small-tablet {
    padding: 50px 0;
  }

  &__item {
    position: relative;
    transition:
      transform var(--trs35),
      scale var(--trs35);
    transform: translateY(0);
    scale: 1;

    &:hover {
      transform: translateY(-3px) scale(1.02);
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
  }
}
</style>
