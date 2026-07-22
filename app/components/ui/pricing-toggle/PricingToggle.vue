<template>
  <div class="pricing-toggle" role="group" aria-label="Billing period">
    <button
      class="pricing-toggle__btn"
      :class="{ 'pricing-toggle__btn--active': modelValue === 'monthly' }"
      type="button"
      :aria-pressed="modelValue === 'monthly'"
      @click="selectPeriod('monthly')"
    >
      Mo
    </button>

    <button
      class="pricing-toggle__btn"
      :class="{ 'pricing-toggle__btn--active': modelValue === 'yearly' }"
      type="button"
      :aria-pressed="modelValue === 'yearly'"
      @click="selectPeriod('yearly')"
    >
      Yr
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: "monthly",
    validator: (value) => ["monthly", "yearly"].includes(value),
  },
})

const emit = defineEmits(["update:modelValue"])

const selectPeriod = (period) => {
  if (period !== props.modelValue) {
    emit("update:modelValue", period)
  }
}
</script>

<style lang="scss" scoped>
.pricing-toggle {
  display: inline-flex;
  padding: 4px;
  border: 1px solid color-mix(in srgb, var(--primary) 10%, transparent);
  border-radius: var(--radius-md);
  background-color: var(--white);
  gap: 4px;

  &__btn {
    min-width: 47px;
    padding: 6px;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background-color: transparent;
    color: var(--primary);
    font-family: var(--ff-secondary);
    font-size: var(--fs-14);
    font-weight: 500;
    line-height: 1.4;
    cursor: pointer;
    transition:
      background-color var(--trs35),
      color var(--trs35),
      border-color var(--trs35);

    &:hover {
      border-color: var(--primary);
    }

    &--active {
      background-color: var(--primary);
      color: var(--white);
      border-color: var(--primary);

      &:hover {
        color: var(--white);
      }
    }
  }
}
</style>
