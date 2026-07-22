<template>
  <div
    class="field"
    :class="{
      'field--underline': variant === 'underline',
      'field--soft': variant === 'soft',
      'field--error': error,
      'field--success': success && !error,
      'field--disabled': disabled,
      'field--with-append': hasAppend,
    }"
  >
    <label v-if="label" class="field__label" :for="inputId">
      {{ label }}
    </label>

    <textarea
      v-if="type === 'textarea'"
      :id="inputId"
      class="field__input field__input--textarea"
      v-bind="$attrs"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :aria-invalid="Boolean(error) || undefined"
      :aria-describedby="error ? errorId : undefined"
      @input="handleInput"
    />

    <div v-else class="field__control">
      <input
        :id="inputId"
        class="field__input"
        v-bind="$attrs"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :aria-invalid="Boolean(error) || undefined"
        :aria-describedby="error ? errorId : undefined"
        @input="handleInput"
      />

      <div v-if="hasAppend" class="field__append">
        <slot name="append" />
      </div>
    </div>

    <div class="field__error-wrapper">
      <span v-if="error" :id="errorId" class="field__error-message" role="alert">
        {{ error }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  modelValue: { type: [String, Number], default: "" },
  label: { type: String, default: "" },
  type: { type: String, default: "text" },
  variant: {
    type: String,
    default: "outlined",
    validator: (value) => ["outlined", "underline", "soft"].includes(value),
  },
  placeholder: { type: String, default: "" },
  disabled: { type: Boolean, default: false },
  error: { type: String, default: "" },
  success: { type: Boolean, default: false },
  autocomplete: { type: String, default: "off" },
})

const emit = defineEmits(["update:modelValue"])

const slots = useSlots()

const hasAppend = computed(() => Boolean(slots.append) && props.type !== "textarea")

const handleInput = (event) => {
  let value = event.target.value

  if (props.type === "number" && value !== "") {
    value = Number(value)
  }

  emit("update:modelValue", value)
}

const inputId = useId()
const errorId = useId()
</script>

<style lang="scss" scoped>
.field {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  &__label {
    color: var(--gray);
    font-size: var(--fs-12);
    font-weight: 600;
  }

  &__control {
    width: 100%;
  }

  &__input {
    width: 100%;
    height: 54px;
    padding: 0 12px;
    border: 1px solid color-mix(in srgb, var(--black) 15%, transparent);
    border-radius: var(--radius-md);
    background-color: var(--white);
    color: var(--black);
    font-family: var(--ff-secondary);
    font-size: var(--fs-16);
    font-weight: 400;

    &::placeholder {
      color: color-mix(in srgb, var(--gray) 40%, var(--white));
      font-size: var(--fs-14);
    }

    &:focus-visible {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 10%, var(--white));
    }

    &:disabled {
      background-color: var(--background);
      color: var(--gray);
      cursor: not-allowed;
    }

    &--textarea {
      height: auto;
      min-height: 180px;
      padding: 16px 20px;
      resize: none;
    }
  }

  &__append {
    display: flex;
    align-items: stretch;
    flex-shrink: 0;
  }

  &__error-wrapper {
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100%;
  }

  &__error-message {
    display: block;
    color: var(--error);
    font-size: var(--fs-12);
    line-height: 1.4;
  }

  &--with-append {
    .field__control {
      position: relative;
      width: 100%;
      height: 54px;
    }

    .field__input {
      padding-right: 104px;
    }

    .field__append {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      height: 54px;
    }

    @include mobile {
      .field__control {
        height: auto;
      }

      .field__input {
        padding-right: 12px;
      }

      .field__append {
        position: static;
        width: 100%;
        height: auto;
        margin-top: 20px;

        :deep(.btn) {
          width: 100%;
        }
      }
    }
  }

  &--underline {
    .field__input {
      border: none;
      border-bottom: 1px solid color-mix(in srgb, var(--black) 15%, transparent);
      border-radius: 0;
      background-color: transparent;

      &:focus-visible {
        border-color: var(--primary);
        box-shadow: 0 3px 0 color-mix(in srgb, var(--primary) 10%, var(--white));
      }

      &--textarea {
        min-height: 100px;
        padding: 12px;
      }
    }

    &.field--error .field__input {
      border-color: var(--error);

      &:focus-visible {
        border-color: var(--error);
        box-shadow: 0 3px 0 color-mix(in srgb, var(--error) 10%, var(--white));
      }
    }

    &.field--success .field__input {
      border-color: var(--primary);

      &:focus-visible {
        border-color: var(--primary);
        box-shadow: 0 3px 0 color-mix(in srgb, var(--primary) 10%, var(--white));
      }
    }

    &.field--with-append .field__input {
      padding-right: 104px;

      @include mobile {
        padding-right: 0;
      }
    }
  }

  &--soft {
    .field__input {
      padding: 0 16px;
      border: 1px solid color-mix(in srgb, var(--background) 15%, transparent);
      background: transparent;
      color: var(--white);
      line-height: 1.6;

      &::placeholder {
        color: color-mix(in srgb, var(--white) 15%, transparent);
      }

      &:focus-visible {
        border-color: var(--white);
        box-shadow: 0 0 0 4px color-mix(in srgb, var(--white) 20%, transparent);
      }
    }

    &.field--with-append .field__input {
      padding-right: 104px;

      @include mobile {
        padding-right: 16px;
      }
    }
  }

  &--error {
    .field__input {
      border-color: var(--error);

      &:focus-visible {
        border-color: var(--error);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--error) 10%, var(--white));
      }
    }
  }

  &--success {
    .field__input {
      border-color: var(--primary);

      &:focus-visible {
        border-color: var(--primary);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary) 10%, var(--white));
      }
    }
  }

  &--disabled {
    .field__input {
      background-color: var(--background);
      color: var(--gray);
      cursor: not-allowed;
    }
  }
}
</style>
