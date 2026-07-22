<template>
  <div class="blog-post">
    <div class="container">
      <UiBreadcrumbs :items="breadcrumbs" />

      <div class="blog-post__layout">
        <div class="blog-post__main">
          <article class="blog-post__article">
            <div class="blog-post__media">
              <UiPicture
                :src="post.images"
                :alt="post.title"
                loading="eager"
                :width="1110"
                :height="500"
              />
            </div>

            <div class="blog-post__content">
              <div class="blog-post__meta">
                <UiMetaItem icon="calendar" :text="post.date" />
                <UiMetaItem icon="person" :text="post.author" />
              </div>

              <UiTitle tag="h3" :title="post.title" />

              <template v-for="(block, index) in post.content" :key="index">
                <p v-if="block.type === 'paragraph'" class="blog-post__text">
                  {{ block.text }}
                </p>
                <UiBlockquote v-else-if="block.type === 'quote'" :text="block.text" />
              </template>

              <p v-if="!post.content?.length" class="blog-post__text">{{ post.descr }}</p>

              <BlockBlogPostFooter :post="post" />
            </div>
          </article>

          <BlockBlogPostList
            class="blog-post__related"
            title="Related Post"
            :posts="relatedPosts"
            variant="related"
          />
        </div>

        <aside class="blog-post__aside">
          <BlockBlogSearch />
          <BlockBlogPostList title="Popular posts" :posts="popularPosts" variant="popular" />
          <BlockBlogCategories title="Categories" />

          <div class="blog-post__tags">
            <UiTitle tag="h4" title="Tags" />

            <ul class="blog-post__tags-list">
              <li v-for="tag in blogTagList" :key="tag.id">
                <NuxtLink class="blog-post__tags-link" :to="getBlogTagUrl(tag.slug)">
                  <UiTag :tag="tag.label" :active="activeTag === tag.slug" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { blogList, getPopularPosts, getRelatedPosts } from "#shared/blogList"
import { blogTagList, getBlogTagUrl } from "#shared/blogTagList"

const route = useRoute()
const activeTag = computed(() => route.query.tag ?? "")
const post = blogList.find((item) => item.slug === route.params.slug)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: "Post not found" })
}

usePageSeo({
  title: post.title,
  description: post.descr,
})

const popularPosts = getPopularPosts(blogList, 4, post.slug)
const relatedPosts = getRelatedPosts(blogList, post)

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: post.title },
]
</script>

<style lang="scss" scoped>
.blog-post {
  &__layout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 445px;
    gap: 30px;
    align-items: start;
    transition: padding var(--trs35);

    @include tablet {
      grid-template-columns: 1fr;
    }
  }

  &__related {
    @include tablet {
      display: none;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    min-width: 0;
    gap: 60px;
    padding: 0 0 120px;

    @include tablet {
      padding: 0;
    }
  }

  &__aside {
    display: flex;
    flex-direction: column;
    gap: 40px;
    transition: padding var(--trs35);

    @include tablet {
      padding: 0 0 80px;
    }

    @include small-tablet {
      padding: 0 0 50px;
    }
  }

  &__article {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  &__media {
    border-radius: var(--radius-md);
    overflow: hidden;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__tags {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__tags-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__tags-link {
    display: inline-flex;
    border-radius: 4px;
    text-decoration: none;
  }

  &__text {
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    transition: font-size var(--trs35);

    @include small-tablet {
      font-size: var(--fs-14);
    }
  }
}
</style>
