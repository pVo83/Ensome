<template>
  <div class="card-pricing" :class="{ 'card-pricing--active': isActive }">
    <div class="card-pricing__heading">
      <UiTitle tag="h6" :title="title" class="card-pricing__title" />
      <div class="card-pricing__taps">
        <span v-if="custom" class="card-pricing__custom">{{ custom }}</span>
        <template v-else>
          <div class="card-pricing__price">{{ currentPrice }}</div>
          <UiPricingToggle v-model="billingPeriod" />
        </template>
      </div>
    </div>

    <div class="card-pricing__body">
      <UiButton
        :title="buttonTitle"
        size="small"
        full
        :variant="isActive ? 'white' : 'primary'"
        @click="emit('select')"
      />
    </div>

    <div class="card-pricing__bottom">
      <ul class="card-pricing__services">
        <li v-for="service in services" :key="service.id" class="card-pricing__services-item">
          <UiAppIcon class="card-pricing__icon" name="checkmark" width="24" height="24" />
          <span class="card-pricing__text">{{ service.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Object,
    default: null,
  },
  buttonTitle: {
    type: String,
    required: true,
  },
  services: {
    type: Array,
    required: true,
  },
  custom: {
    type: String,
    default: "",
  },
  isActive: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(["select"])

const billingPeriod = ref("monthly")

const currentPrice = computed(() => {
  if (!props.price) return ""
  return billingPeriod.value === "monthly" ? props.price.monthly : props.price.yearly
})
</script>

<style lang="scss" scoped>
.card-pricing {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
  padding: 35px 20px;
  border: 1px solid color-mix(in srgb, var(--gray) 10%, transparent);
  border-radius: var(--radius-md);
  background: var(--white);
  box-shadow: 0 10px 20px -10px rgb(41 45 51 / 12%);
  transition:
    background-color var(--trs35),
    color var(--trs35),
    border-color var(--trs35);

  &:hover {
    border-color: var(--primary);
  }

  &--active {
    background: var(--primary);
    box-shadow: 0 10px 20px -10px var(--primary);

    .card-pricing__icon,
    .card-pricing__title,
    .card-pricing__price,
    .card-pricing__custom,
    .card-pricing__text {
      color: var(--white);
      transition: color var(--trs35);
    }
  }

  &__heading {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__title {
    color: var(--black);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 700;
    line-height: 1.4;
  }

  &__taps {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    height: 43px;
  }

  &__custom {
    color: var(--black);
    font-family: var(--ff-secondary);
    font-size: var(--fs-26);
    font-weight: 700;
    line-height: 1.6;
  }

  &__price {
    color: var(--black);
    font-family: var(--ff-secondary);
    font-size: var(--fs-26);
    font-weight: 700;
    line-height: 1.4;
  }

  &__services {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__services-item {
    display: flex;
    align-items: center;
    gap: 10px;
    height: 25px;
  }

  &__icon {
    color: var(--primary);
  }

  &__text {
    color: var(--black);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.6;
  }
}
</style>
