<template>
  <div class="blog">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />
      <UiHeading
        text="Blog"
        title="Discover new things with Ensome blog"
        descr="Articles on data analytics, engineering best practices, compliance, and modern IT solutions from the Ensome team."
      />

      <div class="blog__content">
        <ul class="blog__list">
          <li v-for="blog in visibleBlogList" :key="blog.id" class="blog__item">
            <CardBlog
              variant="list"
              :to="getBlogPostUrl(blog.slug)"
              :images="blog.images"
              :date="blog.date"
              :date-time="blog.dateTime"
              :title="blog.title"
              :descr="blog.descr"
              :tags="blog.tags"
            />
          </li>
        </ul>
        <div v-if="!showAll && blogList.length > INITIAL_COUNT" class="blog__bottom">
          <UiButton title="More articles" variant="primary" size="small" @click="showAll = true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { blogList, getBlogPostUrl } from "#shared/blogList"

const INITIAL_COUNT = 4
const showAll = ref(false)

const visibleBlogList = computed(() =>
  showAll.value ? blogList : blogList.slice(0, INITIAL_COUNT),
)

usePageSeo({
  title: "Blog",
  description:
    "Read the Ensome blog for insights on data analytics, engineering best practices, compliance, and modern IT solutions.",
})

const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Blog" }]
</script>

<style lang="scss" scoped>
.blog {
  &__content {
    display: flex;
    flex-direction: column;
    padding: 120px 0;
    gap: 80px;
    transition: padding var(--trs35);

    @include tablet {
      padding: 80px 0;
    }

    @include small-tablet {
      padding: 50px 0;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  &__bottom {
    display: flex;
    justify-content: center;
  }
}
</style>
