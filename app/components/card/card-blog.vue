<template>
  <component
    :is="rootTag"
    v-bind="rootAttrs"
    class="card-blog"
    :class="[`card-blog--${config.layout}`, { 'card-blog--clickable': isCardLink }]"
  >
    <div class="card-blog__media">
      <UiPicture
        class="card-blog__media-image"
        :src="images"
        :alt="title"
        :loading="loadingMode"
        :width="imageSize.width"
        :height="imageSize.height"
      />
    </div>

    <div class="card-blog__info">
      <time class="card-blog__date" :datetime="dateTime">{{ date }}</time>
      <UiTitle class="card-blog__title" :tag="config.titleTag" :title="title" />

      <p v-if="config.descr && descr" class="card-blog__descr">
        {{ descr }}
      </p>

      <div v-if="hasFooter" class="card-blog__footer">
        <NuxtLink v-if="config.footer === 'link'" :to="to" class="card-blog__link">
          {{ linkLabel }}
          <UiAppIcon name="arrow_right" width="18" height="18" />
        </NuxtLink>

        <ul v-else-if="config.footer === 'tags'" class="card-blog__tags">
          <li v-for="tag in tags" :key="tag" class="card-blog__tags-item">{{ tag }}</li>
        </ul>
      </div>
    </div>
  </component>
</template>

<script setup>
import { computed, resolveComponent } from "vue"

const props = defineProps({
  images: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
    default: "",
  },
  descr: {
    type: String,
    default: "",
  },
  tags: {
    type: Array,
    default: () => [],
  },
  to: {
    type: String,
    default: "",
  },
  linkLabel: {
    type: String,
    default: "Read more",
  },
  loadingMode: {
    type: String,
    default: "lazy",
    validator: (value) => ["eager", "lazy"].includes(value),
  },
  variant: {
    type: String,
    default: "slider",
    validator: (value) => ["slider", "list", "popular", "related"].includes(value),
  },
})

const VARIANTS = {
  slider: { layout: "vertical", titleTag: "h4", descr: true, footer: "link", clickable: false },
  list: { layout: "vertical", titleTag: "h4", descr: true, footer: "tags", clickable: true },
  popular: { layout: "horizontal", titleTag: "h5", descr: false, footer: "link", clickable: false },
  related: { layout: "horizontal", titleTag: "h5", descr: true, footer: "none", clickable: true },
}

const IMAGE_SIZE = {
  vertical: { width: 350, height: 200 },
  horizontal: { width: 210, height: 168 },
}

const config = computed(() => VARIANTS[props.variant])
const imageSize = computed(() => IMAGE_SIZE[config.value.layout])

const isCardLink = computed(() => config.value.clickable && Boolean(props.to))
const rootTag = computed(() => (isCardLink.value ? resolveComponent("NuxtLink") : "div"))
const rootAttrs = computed(() => (isCardLink.value ? { to: props.to } : {}))

const hasFooter = computed(() => {
  if (config.value.footer === "link") return Boolean(props.to)
  if (config.value.footer === "tags") return props.tags.length > 0
  return false
})
</script>

<style lang="scss" scoped>
.card-blog {
  display: inline-flex;
  flex-direction: column;
  gap: 20px;

  &:hover {
    .card-blog__media-image {
      transform: scale(1.03);
      opacity: 0.9;
    }
  }

  &--horizontal {
    flex-direction: row;
    align-items: center;
    width: 100%;
    transition:
      flex-direction var(--trs35),
      align-items var(--trs35);

    @include mobile {
      flex-direction: column;
      align-items: flex-start;
    }

    .card-blog__media {
      flex-shrink: 0;
      width: 210px;
      transition: width var(--trs35);

      @include mobile {
        width: 100%;
      }
    }

    .card-blog__descr {
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }
  }

  &--clickable {
    color: inherit;
    text-decoration: none;
  }

  &__media {
    border-radius: var(--radius-md);
    overflow: hidden;

    &-image {
      transition:
        transform var(--trs35),
        opacity var(--trs35);
      transform: scale(1);
      opacity: 1;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 8px;
  }

  &__date {
    color: var(--gray);
    font-size: var(--fs-14);
    font-weight: 400;
    line-height: 1.4;
  }

  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__descr {
    display: -webkit-box;
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);
    overflow: hidden;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    margin-top: auto;
  }

  &__link {
    display: flex;
    align-items: center;
    color: var(--primary);
    font-family: var(--ff-secondary);
    font-size: var(--fs-14);
    font-weight: 600;
    line-height: 1.6;
    text-decoration: none;
    transition: color var(--trs35);
    gap: 5px;

    &:hover {
      color: color-mix(in srgb, var(--primary) 70%, var(--black));

      svg {
        transform: translateX(4px);
      }
    }

    svg {
      padding: 1px 0 0;
      transition: transform var(--trs35);
    }
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__tags-item {
    padding: 4px 10px;
    border-radius: var(--radius-sm);
    background-color: var(--tertiary);
    color: var(--primary);
    font-size: var(--fs-14);
    line-height: 1.4;
  }
}
</style>
