<template>
  <section class="blog">
    <div class="container blog__container">
      <UiScrollCarousel>
        <template #header>
          <UiTitle tag="h2" title="Our blog" />
        </template>

        <li v-for="blog in blogList" :key="blog.id" class="blog__item">
          <CardBlog
            :to="getBlogPostUrl(blog.slug)"
            :images="blog.images"
            :date="blog.date"
            :date-time="blog.dateTime"
            :title="blog.title"
            :descr="blog.descr"
          />
        </li>
      </UiScrollCarousel>
    </div>
  </section>
</template>

<script setup>
import { blogList, getBlogPostUrl } from "#shared/blogList"
</script>

<style lang="scss" scoped>
.blog {
  padding: 120px 0;
  transition: padding var(--trs35);

  @include tablet {
    padding: 80px 0;
  }

  @include small-tablet {
    padding: 50px 0;
  }

  &__item {
    display: flex;
    height: 100%;

    :deep(.card-blog) {
      width: 100%;
    }
  }
}
</style>
