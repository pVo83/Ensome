<template>
  <form class="contact-form" :class="`contact-form--${variant}`" @submit.prevent="handleSubmit">
    <template v-if="variant === 'underline'">
      <div class="form-group">
        <div class="item">
          <UiInput v-model="form.name" variant="underline" label="Name" placeholder="Your name" />
          <UiInput
            v-model="form.email"
            variant="underline"
            type="email"
            label="Email"
            placeholder="Your mail"
            autocomplete="email"
          />
        </div>
      </div>

      <UiInput v-model="form.theme" variant="underline" label="Theme" placeholder="Your Theme" />

      <UiInput
        v-model="form.message"
        variant="underline"
        label="Message"
        placeholder="Your message"
      />
    </template>

    <template v-else>
      <div class="form-group">
        <div class="item">
          <UiInput
            v-model="form.email"
            type="text"
            name="email"
            placeholder="Your email"
            autocomplete="email"
            aria-label="Email"
          />
          <UiInput
            v-model="form.name"
            type="text"
            name="name"
            placeholder="Your name"
            autocomplete="off"
            aria-label="Name"
          />
        </div>
      </div>

      <UiInput
        v-model="form.theme"
        type="text"
        name="theme"
        placeholder="Theme"
        aria-label="Theme"
      />

      <UiInput
        v-model="form.message"
        type="textarea"
        name="message"
        placeholder="Your message"
        aria-label="Message"
      />
    </template>

    <UiButton
      class="contact-form__submit"
      title="Send"
      variant="primary"
      :size="buttonSize"
      :is-loading="isLoading"
      type="submit"
    />

    <span
      v-if="error || success"
      class="contact-form__message"
      role="status"
      aria-live="polite"
      :class="[
        `contact-form__message--${variant}`,
        {
          'contact-form__message--error': error,
          'contact-form__message--success': success,
        },
      ]"
      >{{ error || success }}</span
    >
  </form>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "outlined",
    validator: (value) => ["outlined", "underline"].includes(value),
  },
  buttonSize: {
    type: String,
    default: "small",
    validator: (value) => ["small", "medium"].includes(value),
  },
})

const form = reactive({
  email: "",
  name: "",
  theme: "",
  message: "",
})

const VALID_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const error = ref("")
const success = ref("")
const isLoading = ref(false)

watch(
  () => [form.name, form.email, form.theme, form.message],
  () => {
    if (error.value) error.value = ""
  },
)

async function handleSubmit() {
  error.value = ""
  success.value = ""

  if (!form.name.trim() || !form.email.trim() || !form.theme.trim() || !form.message.trim()) {
    error.value = "Please fill in all fields"
    return
  }

  if (!VALID_EMAIL_REGEX.test(form.email.trim())) {
    error.value = "Please enter a valid email"
    return
  }

  isLoading.value = true

  await new Promise((resolve) => setTimeout(resolve, 1000))

  isLoading.value = false

  success.value = "Form submitted successfully"

  form.email = ""
  form.name = ""
  form.theme = ""
  form.message = ""

  setTimeout(() => {
    success.value = ""
  }, 3000)
}
</script>

<style lang="scss" scoped>
.contact-form {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__submit {
    align-self: flex-end;
    width: 100%;
    max-width: 136px;
    transition:
      max-width var(--trs35),
      background-color var(--trs35),
      border-color var(--trs35);

    &:hover {
      background-color: color-mix(in srgb, var(--primary) 85%, var(--white));
      border-color: color-mix(in srgb, var(--primary) 85%, var(--white));
    }

    @include mobile {
      max-width: 100%;
    }
  }

  &__message {
    position: absolute;
    left: 0;
    width: 100%;
    font-family: var(--ff-secondary);
    font-size: var(--fs-12);
    font-weight: 600;

    &--outlined {
      bottom: 50px;
    }

    &--underline {
      bottom: 50px;
    }

    &--error {
      color: var(--error);
    }

    &--success {
      color: var(--success);
    }
  }
}
</style>
