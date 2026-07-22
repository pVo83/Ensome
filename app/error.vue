<template>
  <NuxtLayout name="empty">
    <div class="error-page">
      <div class="container error-page__container">
        <div class="error-page__card">
          <div class="error-page__content">
            <div class="error-page__header">
              <div class="error-page__badge">{{ statusCode }}</div>
              <UiTitle tag="h1" class="error-page__title">
                {{ title }}
              </UiTitle>
            </div>

            <p v-if="message" class="error-page__text">
              {{ message }}
            </p>
          </div>
          <div class="error-page__actions">
            <UiButton variant="primary" size="small" @click="goHome">Go to home</UiButton>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
})

const statusCode = computed(() => Number(props.error?.statusCode ?? 500))
const isNotFound = computed(() => statusCode.value === 404)

const title = computed(() => (isNotFound.value ? "Page not found" : "Something went wrong"))
const message = computed(() =>
  isNotFound.value ? "The page you are looking for doesn’t exist or has been moved." : "",
)

function goHome() {
  clearError({ redirect: "/" })
}
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  align-items: center;
  min-height: 100dvh;
  padding: 60px 0;
  background: var(--white);

  &__container {
    display: inline-flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;
    padding: 36px 30px;
  }

  &__header {
    display: flex;
    align-items: end;

    @include mobile {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__card {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 0 auto;
    padding: 36px 30px;
    border-radius: var(--radius-lg);
    background: var(--white);
    box-shadow: 0 20px 30px -20px color-mix(in srgb, var(--gray) 20%, var(--white));

    @include mobile {
      text-align: center;
    }
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    padding: 0 10px;
    border-radius: 999px;
    background: var(--tertiary);
    color: var(--primary);
    font-family: var(--ff-secondary);
    font-size: var(--fs-14);
    font-weight: 800;
    line-height: 1;
    letter-spacing: 0.02em;
  }

  &__text {
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
  }
}
</style>
