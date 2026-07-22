<template>
  <section
    class="accordion"
    :class="[`accordion--${variant}`, { 'accordion--plus-icon': icon === 'plus' }]"
  >
    <UiTitle v-if="title" tag="h4" :title="title" />

    <ul class="accordion__list">
      <li
        v-for="item in items"
        :key="item.id"
        class="accordion__item"
        :class="{
          'accordion__item--underline': variant === 'underline',
          'accordion__item--outlined': variant === 'outlined',
        }"
      >
        <button
          type="button"
          class="accordion__trigger"
          :class="{ 'accordion__trigger--open': openId === item.id }"
          :aria-expanded="openId === item.id"
          :aria-controls="`accordion-panel-${item.id}`"
          @click="toggleItem(item.id)"
        >
          <span class="accordion__label">{{ item.label }}</span>
          <UiAppIcon class="accordion__icon" :name="icon" :width="widthIcon" :height="heightIcon" />
        </button>

        <div
          :id="`accordion-panel-${item.id}`"
          class="accordion__panel-wrap"
          :class="{ 'accordion__panel-wrap--open': openId === item.id }"
          :inert="openId !== item.id"
          :aria-hidden="openId !== item.id"
        >
          <div class="accordion__panel">
            <p class="accordion__text">{{ item.content }}</p>
            <NuxtLink v-if="item.to" class="accordion__link" :to="item.to">
              Read more
              <UiAppIcon name="arrow-right" :width="widthIcon" :height="heightIcon" />
            </NuxtLink>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    required: true,
  },
  defaultOpenId: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "chevron_right",
  },
  widthIcon: {
    type: [String, Number],
    default: 18,
  },
  heightIcon: {
    type: [String, Number],
    default: 18,
  },
  variant: {
    type: String,
    default: "underline",
    validator: (value) => ["underline", "outlined"].includes(value),
  },
})

const openId = ref(props.defaultOpenId || "")

const toggleItem = (id) => {
  openId.value = openId.value === id ? "" : id
}
</script>

<style lang="scss" scoped>
.accordion {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__list {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &--outlined &__list {
    gap: 16px;
  }

  &__item {
    &--underline {
      border-bottom: 1px solid rgb(41 45 51 / 10%);
    }

    &--outlined {
      padding: 0 16px;
      border: 1px solid rgb(41 45 51 / 10%);
      border-radius: var(--radius-md);
    }
  }

  &__trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 0;
    border: none;
    background: transparent;
    color: var(--gray);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    cursor: pointer;
    transition: color var(--trs35);
    gap: 16px;
    text-align: left;

    &:hover {
      color: var(--primary);
    }

    &--open {
      color: var(--primary);

      .accordion__icon {
        color: var(--primary);
        transform: rotate(90deg);
      }
    }
  }

  &--plus-icon &__trigger--open .accordion__icon {
    transform: rotate(45deg);
  }

  &__label {
    flex: 1;
  }

  &__icon {
    flex-shrink: 0;
    color: var(--gray);
    transition:
      transform var(--trs35),
      color var(--trs35);
  }

  &__panel-wrap {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows var(--trs35);

    &--open {
      grid-template-rows: 1fr;
      padding: 0 0 8px;
    }
  }

  &__panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 0;
    overflow: hidden;
  }

  &__text {
    margin: 0;
    color: var(--gray);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--primary);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;
    text-decoration: none;
  }
}
</style>
