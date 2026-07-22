<template>
  <section class="contacts">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />

      <div class="contacts__layout">
        <div class="contacts__info">
          <UiTitle tag="h1" class="contacts__title">
            How can we <span class="accent">help you?</span>
          </UiTitle>

          <ul class="contacts__list">
            <li v-for="item in contactList" :key="item.id" class="contacts__item">
              <UiAppIcon class="contacts__icon" :name="item.icon" :width="20" :height="20" />
              <div class="contacts__item-content">
                <span class="contacts__label">{{ item.label }}</span>
                <component :is="item.href ? 'a' : 'span'" class="contacts__value" :href="item.href">
                  {{ item.value }}
                </component>
              </div>
            </li>
          </ul>
        </div>

        <BlockContactForm />

      </div>
    </div>

    <BlockContactMap />
  </section>
</template>

<script setup>
import { contactList } from "#shared/contacts"

usePageSeo({
  title: "Contacts",
  description:
    "Get in touch with Ensome. Email, phone, or send a message — we are ready to help with your data and IT challenges.",
})

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Contacts" }]
</script>

<style lang="scss" scoped>
.contacts {
  &__layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 30px;
    align-items: start;
    margin: 0 0 60px;

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 40px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 40px;
  }

  &__title {
    margin: auto 0 0;
    font-size: var(--fs-80);

    @include small-tablet {
      font-size: var(--fs-30);
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    margin: auto 0 0;
    padding: 0;
    gap: 20px;

    @include mobile {
      flex-direction: column;
      gap: 30px;
    }
  }

  &__item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    max-width: 200px;
    transition: max-width var(--trs35);

    @include small-tablet {
      max-width: 100%;
    }
  }

  &__icon {
    flex-shrink: 0;
    color: var(--primary);
  }

  &__item-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__label {
    color: var(--black);
    font-family: var(--ff-secondary);
    font-size: var(--fs-14);
    font-weight: 600;
    line-height: 1.4;
  }

  &__value {
    color: var(--gray);
    font-family: var(--ff-secondary);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.4;
    text-decoration: none;
  }
}

@include mobile {
  :deep(.form-group .item) {
    flex-direction: column;
  }
}
</style>
