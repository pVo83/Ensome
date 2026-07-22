<template>
  <div class="team-member">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />

      <div class="team-member__content-wrap">
        <div class="team-member__content">
          <div class="team-member__media">
            <UiPicture
              class="team-member__foto"
              :src="member.foto"
              :alt="member.name"
              :width="540"
              :height="410"
              loading="lazy"
            />
          </div>
          <div class="team-member__info">
            <div class="team-member__item">
              <div class="team-member__label">Name</div>
              <div class="team-member__name">{{ member.name }}</div>
            </div>
            <div class="team-member__item">
              <div class="team-member__label">Position</div>
              <div class="team-member__position">{{ member.position }}</div>
            </div>
            <div class="team-member__item">
              <div class="team-member__label">Description</div>
              <div class="team-member__descr">{{ member.descr }}</div>
            </div>
            <div class="team-member__item socials">
              <div class="team-member__label">Social networks</div>
              <div class="team-member__social-list">
                <UiSocial
                  v-for="social in member.socials"
                  :key="social.id"
                  :icon-social="social.iconSocial"
                  :label="social.label"
                  :link="social.link"
                  :hover-color="social.hoverColor"
                />
              </div>
            </div>
          </div>
        </div>

        <BlockTeamContact :member="member" />
      </div>
    </div>
    <BlockSubscribe />
  </div>
</template>

<script setup>
import { teamList } from "#shared/teamList"

const route = useRoute()
const member = teamList.find((item) => item.slug === route.params.slug)

if (!member) {
  throw createError({ statusCode: 404, statusMessage: "Team member not found" })
}

usePageSeo({
  title: member.name,
  description: `${member.position}. ${member.descr}`,
})

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Team", to: "/team" },
  { label: member.name },
]
</script>

<style lang="scss" scoped>
.team-member {
  &__content-wrap {
    display: flex;
    flex-direction: column;
    gap: 90px;
    padding: 0 0 90px;
    transition: gap var(--trs35);

    @include small-tablet {
      gap: 40px;
    }
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__media {
    height: fit-content;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 18px 14px -14px rgb(0 0 0 / 30%);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 4px;

    &.socials {
      gap: 12px;
      margin: auto 0 0;
    }
  }

  &__label {
    color: var(--primary);
    font-family: var(--ff-secondary);
    font-size: var(--fs-14);
    font-weight: 600;
    line-height: 1.4;
  }

  &__name,
  &__position,
  &__descr {
    color: var(--black);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }

  &__social-list {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

@include mobile {
  :deep(.form-group .item) {
    flex-direction: column;
  }
}
</style>
