<template>
  <section class="subscribe">
    <div class="container">
      <div class="subscribe__content">
        <div class="subscribe__info">
          <UiTitle
            class="subscribe__title"
            tone="light"
            tag="h2"
            title="Subscribe to our newsletter"
          />
          <p class="subscribe__descr">
            Get the latest insights on data analytics, engineering best practices, and industry
            trends — delivered straight to your inbox.
          </p>
        </div>

        <form class="subscribe__form" @submit.prevent="handleSubmit">
          <UiInput
            v-model="email"
            variant="soft"
            type="text"
            placeholder="Your email"
            autocomplete="off"
            aria-label="Your email"
          >
            <template #append>
              <UiButton
                title="Send"
                variant="white"
                size="medium"
                type="submit"
                :is-loading="isLoading"
              />
            </template>
          </UiInput>

          <span
            v-if="error || success"
            class="subscribe__message"
            role="status"
            aria-live="polite"
            :class="{
              'subscribe__message--error': error,
              'subscribe__message--success': success,
            }"
            >{{ error || success }}</span
          >
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const VALID_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const email = ref("")
const error = ref("")
const success = ref("")
const isLoading = ref(false)

watch(email, () => {
  if (error.value) error.value = ""
})

async function handleSubmit() {
  error.value = ""
  success.value = ""

  if (!email.value.trim()) {
    error.value = "Please enter your email"
    return
  }

  if (!VALID_EMAIL_REGEX.test(email.value.trim())) {
    error.value = "Please enter a valid email"
    return
  }

  isLoading.value = true

  await new Promise((resolve) => setTimeout(resolve, 1000))

  isLoading.value = false

  success.value = "Subscribed successfully"
  email.value = ""

  setTimeout(() => {
    success.value = ""
  }, 3000)
}
</script>

<style lang="scss" scoped>
.subscribe {
  padding: 80px 0;
  background: var(--secondary);
  transition: padding var(--trs35);

  @include small-tablet {
    padding: 50px 0;
  }

  &__content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
    align-items: center;

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__title {
    @include mobile {
      text-align: center;
    }
  }

  &__descr {
    color: var(--white);
    font-size: var(--fs-20);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }

    @include mobile {
      display: none;
    }
  }

  &__form {
    position: relative;
    width: 100%;
    max-width: 445px;
    margin-left: auto;

    @include small-tablet {
      max-width: initial;
    }
  }

  &__message {
    position: absolute;
    bottom: -24px;
    left: 0;
    width: 100%;
    font-family: var(--ff-secondary);
    font-size: var(--fs-12);
    font-weight: 600;

    &--error {
      color: var(--error);
    }

    &--success {
      color: var(--success);
    }
  }
}
</style>
