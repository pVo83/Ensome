<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <ul class="footer__top-list">
          <li class="footer__top-item" :style="{ gridColumn: 'span 5' }">
            <Logo class="footer__logo" name="logo" color-logo="white" width="141" height="46" />

            <p class="footer__descr">
              Ensome helps businesses unlock the power of data analytics, engineering, and IT
              solutions to drive growth and smarter decisions.
            </p>

            <ul class="footer__socials-list">
              <li v-for="social in socialList" :key="social.id" class="footer__socials-item">
                <UiSocial
                  :icon-social="social.iconSocial"
                  :label="social.label"
                  :link="social.link"
                  :hover-color="social.hoverColor"
                />
              </li>
            </ul>
          </li>

          <li
            v-for="column in footerList"
            :key="column.id"
            class="footer__top-item footer__col"
            :class="{ 'footer__col--open': openColumnId === column.id }"
            :style="{ gridColumn: `span ${column.span}` }"
          >
            <UiTitle tag="h6" tone="light" class="footer__title">
              <button
                type="button"
                class="footer__col-trigger"
                :aria-expanded="openColumnId === column.id"
                :aria-controls="`footer-panel-${column.id}`"
                @click="toggleColumn(column.id)"
              >
                {{ column.title }}
                <UiAppIcon
                  class="footer__col-chevron"
                  name="chevron_right_down"
                  width="20"
                  height="20"
                />
              </button>
            </UiTitle>

            <div :id="`footer-panel-${column.id}`" class="footer__col-panel">
              <div class="footer__col-panel-inner">
                <ul v-if="column.links" class="footer__links">
                  <li v-for="link in column.links" :key="link.label" class="footer__links-item">
                    <NuxtLink
                      class="footer__link"
                      :class="{ 'footer__link--active': isNavActive(link.to) }"
                      :to="link.to"
                    >
                      {{ link.label }}
                    </NuxtLink>
                  </li>
                </ul>

                <address v-if="column.contact" class="footer__contact">
                  <a class="footer__contact-link" :href="`mailto:${column.contact.email}`">
                    {{ column.contact.email }}
                  </a>
                  <a class="footer__contact-link" :href="column.contact.phoneHref">
                    {{ column.contact.phone }}
                  </a>
                  {{ column.contact.address }}
                </address>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer__bottom">
        <small class="footer__copyright">
          Ensome&copy; {{ currentYear }} All Rights Reserved
        </small>
        <div class="footer__legal">
          <NuxtLink class="footer__legal-link" to="/privacy-policy"> Privacy policy </NuxtLink>
          <NuxtLink class="footer__legal-link" to="/terms"> Terms of use </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footerList } from "#shared/footerList"
import { socialList } from "#shared/socialList"

const currentYear = new Date().getFullYear()
const openColumnId = ref(footerList[0].id)

const toggleColumn = (id) => {
  openColumnId.value = openColumnId.value === id ? "" : id
}

const { isNavActive } = useNavActive()
</script>

<style lang="scss" scoped>
.footer {
  background: var(--secondary);
  border-top: 1px solid var(--helper-blue2);

  &__logo {
    width: fit-content;
  }

  &__top {
    padding: 60px 0 50px;
    transition: padding var(--trs35);

    @include mobile {
      padding: 40px 0 10px;
    }
  }

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 34px 0;
    border-top: 1px solid var(--helper-blue2);

    @include small-tablet {
      border-top: none;
    }

    @include mobile {
      display: flex;
      flex-direction: column-reverse;
      gap: 20px;
      align-items: flex-start;
    }
  }

  &__copyright {
    color: var(--helper-blue2);
    font-size: var(--fs-14);
    font-weight: 400;
  }

  &__legal {
    display: flex;
    align-items: center;
    gap: 24px;

    @include mobile {
      width: 100%;
      border-bottom: 1px solid var(--helper-blue2);
      padding: 0 0 20px;
    }
  }

  &__legal-link {
    color: var(--helper-blue2);
    font-size: var(--fs-14);
    font-weight: 400;
    transition: color var(--trs35);

    &:hover {
      color: var(--white);
    }
  }

  &__descr {
    width: 100%;
    max-width: 285px;
    color: var(--gray);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;

    @include small-tablet {
      max-width: 100%;
    }
  }

  &__top-list {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 40px;
  }

  &__top-item {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: fit-content;
  }

  &__col-trigger {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    padding: 0;
    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    pointer-events: none;

    @include for-desktop {
      &:focus-visible {
        outline: none;
        box-shadow: none;
      }
    }
  }

  &__col-trigger &__col-chevron {
    display: none;
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;

    @include small-tablet {
      gap: 20px;
    }
  }

  &__link {
    color: var(--gray);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;
    transition: color var(--trs35);

    &:hover {
      color: var(--helper-blue2);
    }

    &--active {
      color: var(--helper-blue2);
    }
  }

  &__contact {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-style: normal;
    color: var(--gray);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;
    transition: color var(--trs35);
  }

  &__contact-link {
    width: fit-content;
    color: var(--gray);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;
    transition: color var(--trs35);

    &:hover {
      color: var(--helper-blue2);
    }
  }

  &__socials-list {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @include small-tablet {
    &__top {
      padding: 40px 0 32px;
    }

    &__top-list {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    &__top-item {
      width: 100%;
    }

    &__top-item:first-child {
      margin-bottom: 40px;
    }

    &__col {
      gap: 0;
      border-top: 1px solid var(--helper-blue2);
    }

    &__col:last-child {
      border-bottom: 1px solid var(--helper-blue2);
    }

    &__col &__title {
      width: 100%;
    }

    &__col-trigger {
      justify-content: space-between;
      padding: 20px 0;
      cursor: pointer;
      pointer-events: auto;
    }

    &__col-trigger &__col-chevron {
      display: flex;
      flex-shrink: 0;
      transition: transform var(--trs35);
    }

    &__col--open &__col-chevron {
      transform: rotate(180deg);
    }

    &__col-panel {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows var(--trs35);
    }

    &__col--open &__col-panel {
      grid-template-rows: 1fr;
    }

    &__col-panel-inner {
      min-height: 0;
      overflow: hidden;
    }

    &__links,
    &__contact {
      padding-bottom: 18px;
    }
  }
}
</style>
