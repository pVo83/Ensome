<template>
  <section class="blog-post-list">
    <UiTitle tag="h4" :title="title" />

    <ul class="blog-post-list__list">
      <li v-for="post in posts" :key="post.id">
        <CardBlog
          :variant="variant"
          :to="getBlogPostUrl(post.slug)"
          :images="post.images"
          :date="post.date"
          :date-time="post.dateTime"
          :title="post.title"
          :descr="post.descr"
        />
      </li>
    </ul>
  </section>
</template>

<script setup>
import { getBlogPostUrl } from "#shared/blogList"

defineProps({
  title: {
    type: String,
    required: true,
  },
  posts: {
    type: Array,
    required: true,
  },
  variant: {
    type: String,
    default: "popular",
    validator: (value) => ["popular", "related"].includes(value),
  },
})
</script>

<style lang="scss" scoped>
.blog-post-list {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
