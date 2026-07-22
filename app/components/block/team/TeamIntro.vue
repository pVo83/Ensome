<template>
  <section class="team-intro">
    <div class="team-intro__content">
      <UiPicture
        class="team-intro__media"
        src="/img/team/team-intro.jpg"
        alt="Ensome team"
        :width="1110"
        :height="500"
        loading="lazy"
      />
      <div class="team-intro__item">
        <p v-for="(paragraph, index) in teamIntroList" :key="index" class="team-intro__text">
          {{ paragraph }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { teamIntroList } from "#shared/teamIntroList"
</script>

<style lang="scss" scoped>
.team-intro {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    transition: gap var(--trs35);

    @include small-tablet {
      gap: 30px;
    }
  }

  &__media {
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  &__item {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__text {
    color: var(--gray);
    font-size: var(--fs-20);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }
}
</style>
