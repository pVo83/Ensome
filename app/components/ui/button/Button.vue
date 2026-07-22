<template>
  <button
    :class="buttonClasses"
    :disabled="disabled || isLoading"
    :type="type"
    @click="$emit('click', $event)"
  >
    <span class="btn__content">
      <UiAppIcon v-if="icon" :name="icon" :width="iconSize" :height="iconSize" />
      <slot>{{ title }}</slot>
    </span>

    <span v-if="isLoading" class="btn__loading">
      <UiLoading :size="20" />
    </span>
  </button>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) => ["primary", "white", "icon"].includes(value),
  },
  size: {
    type: String,
    default: "medium",
    validator: (value) => ["small", "medium"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "button",
    validator: (value) => ["button", "submit", "reset"].includes(value),
  },
  icon: {
    type: String,
    default: null,
  },
  iconSize: {
    type: Number,
    default: 24,
  },
  full: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
})

defineEmits(["click"])

const buttonClasses = computed(() => {
  return ["btn", `btn--${props.variant}`, `btn--${props.size}`, { "btn--full": props.full }]
})
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  font-family: var(--ff-secondary);
  white-space: nowrap;
  font-weight: 400;
  cursor: pointer;
  transition:
    background-color var(--trs35),
    border-color var(--trs35),
    color var(--trs35);
  gap: 10px;

  &:disabled {
    cursor: not-allowed;
  }

  &__content {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }

  &__loading {
    position: absolute;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    inset: 0;
  }

  // Размеры
  &--small {
    height: 44px;
    padding: 0 12px;
    font-size: var(--fs-14);
  }

  &--medium {
    height: 54px;
    padding: 0 24px;
    font-size: var(--fs-16);
  }

  // Ширина
  &--full {
    width: 100%;
  }

  // Варианты
  &--primary {
    background-color: var(--primary);
    color: var(--white);

    @include hover {
      &:not(:disabled) {
        background-color: color-mix(in srgb, var(--primary) 80%, var(--white));
      }
    }

    &:active:not(:disabled) {
      background-color: var(--primary);
      box-shadow: none;
    }

    &:disabled {
      background-color: color-mix(in srgb, var(--primary) 80%, var(--black));
      box-shadow: none;
    }

    &:focus-visible {
      outline: 2px solid currentcolor;
      outline-offset: 0;
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary) 100%, transparent);
    }
  }

  &--white {
    border: 1px solid var(--white);
    background-color: var(--white);
    color: var(--black);

    @include hover {
      &:not(:disabled) {
        background-color: transparent;
        color: var(--white);
        border-color: var(--white);
      }
    }

    &:disabled {
      background-color: color-mix(in srgb, var(--white) 100%, var(--white));
      border-color: color-mix(in srgb, var(--white) 100%, var(--white));
      box-shadow: none;
    }

    &:focus-visible {
      outline: 2px solid var(--secondary);
      outline-offset: 0;
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--white) 100%, transparent);
    }
  }

  &--icon {
    width: fit-content;
    height: fit-content;
    padding: 4px;
    border: 1px solid color-mix(in srgb, var(--gray) 20%, transparent);
    background-color: transparent;
    color: var(--black);

    @include hover {
      &:not(:disabled) {
        color: color-mix(in srgb, var(--primary) 100%, var(--white));
      }
    }

    &:disabled {
      opacity: 0.6;
    }

    &:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 0;
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary) 50%, transparent);
    }
  }
}
</style>
