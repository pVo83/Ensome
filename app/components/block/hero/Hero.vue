<template>
  <section class="hero">
    <div class="container hero__container">
      <div class="hero__top">
        <UiTitle tag="h1">
          Find true power in your data with <span class="accent">Ensome</span>
        </UiTitle>
        <p class="hero__text">
          We help companies collect, analyze, and visualize data — turning complex metrics into
          clear insights that drive smarter business decisions.
        </p>
      </div>
    </div>

    <div class="hero__bottom">
      <div class="container hero__circle-anchor">
        <NuxtLink to="/about" class="hero__circle"> Learn more </NuxtLink>
      </div>

      <div class="hero__media">
        <UiPicture
          src="/img/hero/hero-media.jpg"
          alt="Ensome data analytics platform on a modern workspace"
          :width="1920"
          :height="590"
          cover
          loading="eager"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;

  &__top {
    display: grid;
    align-items: center;
    padding: 68px 0 92px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
    transition:
      padding var(--trs35),
      gap var(--trs35);

    @include tablet {
      padding: 48px 0 72px;
      gap: 20px;
    }

    @include small-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding: 38px 0 62px;
    }

    @include mobile {
      padding: 20px 0 46px;
    }
  }

  &__text {
    width: 100%;
    margin-left: auto;
    color: var(--gray);
    font-size: var(--fs-16);
    font-weight: 400;
    line-height: 1.6;
    max-width: 350px;
    transition:
      max-width var(--trs35),
      margin-left var(--trs35),
      font-size var(--trs35);

    @include small-tablet {
      max-width: initial;
      margin-left: inherit;
      font-size: var(--fs-14);
    }
  }

  &__media {
    position: relative;
    z-index: 1;
    height: 590px;
    transition: height var(--trs35);

    @include tablet {
      height: 400px;
    }

    @include small-tablet {
      height: 300px;
    }

    @include mobile {
      height: 230px;
    }
  }

  &__circle-anchor {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 2;
  }

  &__circle {
    position: absolute;
    left: calc(50% + 12rem);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 140px;
    border: 10px solid var(--white);
    border-radius: 50%;
    background-color: var(--primary);
    color: var(--white);
    font-family: var(--ff-secondary);
    font-size: var(--fs-14);
    font-weight: 600;
    transition:
      left var(--trs35),
      width var(--trs35),
      height var(--trs35),
      border var(--trs35);
    transform: translateY(-50%);
    pointer-events: auto;

    @include small-tablet {
      left: calc(50% + 7rem);
      width: 120px;
      height: 120px;
      border: 8px solid var(--white);
      font-size: var(--fs-12);
    }

    @include mobile {
      left: calc(50% + 4.5rem);
      width: 100px;
      height: 100px;
      border: 5px solid var(--white);
    }

    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 105px;
      height: 105px;
      border: 1px solid var(--white);
      border-radius: 50%;
      transition:
        width var(--trs35),
        height var(--trs35);
      transform: translate(-50%, -50%);
      content: "";

      @include small-tablet {
        width: 90px;
        height: 90px;
      }

      @include mobile {
        width: 80px;
        height: 80px;
      }
    }

    &:hover {
      &::before {
        width: 110px;
        height: 110px;

        @include small-tablet {
          width: 95px;
          height: 95px;
        }

        @include mobile {
          width: 83px;
          height: 83px;
        }
      }
    }
  }
}
</style>
