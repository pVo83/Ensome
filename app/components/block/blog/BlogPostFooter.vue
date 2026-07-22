<template>
  <footer class="blog-post-footer">
    <UiMetaItem icon="data_line" :text="`${post.views} Views`" />

    <div class="blog-post-footer__group">
      <div class="blog-post-footer__label">
        <UiAppIcon name="share" width="18" height="18" />
        <span>Share:</span>
      </div>

      <ul class="blog-post-footer__list">
        <li v-for="social in socialList" :key="social.id">
          <UiSocial
            :icon-social="social.iconSocial"
            :label="social.label"
            :link="social.link"
            :hover-color="social.hoverColor"
            :width="20"
            :height="20"
          />
        </li>
      </ul>
    </div>

    <div v-if="post.tags?.length" class="blog-post-footer__group">
      <div class="blog-post-footer__label">
        <UiAppIcon name="tag" width="18" height="18" />
        <span>Tags:</span>
      </div>

      <ul class="blog-post-footer__list">
        <li v-for="tag in post.tags" :key="tag">
          <NuxtLink class="blog-post-footer__link" :to="getBlogTagUrl(tag.toLowerCase())">
            <UiTag :tag="tag" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script setup>
import { socialList } from "#shared/socialList"
import { getBlogTagUrl } from "#shared/blogTagList"

defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.blog-post-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  &__group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--gray);
    font-family: var(--ff-secondary);
    font-size: var(--fs-12);
    font-weight: 400;
    line-height: 1.4;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__link {
    display: flex;
    height: 100%;
    border-radius: 4px;
  }
}
</style>
