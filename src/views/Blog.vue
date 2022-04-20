<template>
  <div class="blog-container">
    <h1 :class="{ 'dark-700': $store.state.isLightmode }">Blog</h1>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="blog-content">
      <b-card
        v-for="blog in blogs"
        :key="`blog-${blog.id}`"
        :img-src="blog.imgSrc"
        img-alt="Image"
        img-top
        tag="article"
        style="width: 310px"
        class="mr-2 ml-2"
        :class="{ 'dark-700': $store.state.isLightmode }"
      >
        <div class="blog-content__body">
          <h4 :class="{ 'dark-color': $store.state.isLightmode }">
            {{ blog.title }}
          </h4>
          <p>{{ blog.text }}</p>
          <span>
            <a :href="blog.url"
              >Learn more <b-icon icon="arrow-right-short" scale="1.3"></b-icon
            ></a>
          </span>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          imgSrc: "https://picsum.photos/310/300/?image=1",
          title: "How to make web tempates",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
          url: "!#",
        },
        {
          id: 2,
          imgSrc: "https://picsum.photos/310/300/?image=2",
          title: "make Business card",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
          url: "!#",
        },
        {
          id: 3,
          imgSrc: "https://picsum.photos/310/300/?image=3",
          title: "How to make Flyer Design",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
          url: "!#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
  & > h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 123.6%;
    text-transform: capitalize;
    color: var(--v-color-black-800);
    margin-bottom: 25px;
  }
  & > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    text-transform: capitalize;
    font-feature-settings: "calt" off, "kern" off;
    color: var(--v-color-black-500);
    max-width: 438px;
    margin-bottom: 50px;
  }
  .blog-content {
    display: flex;
    &__body {
      display: flex;
      flex-direction: column;
      h4 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 123.6%;
        text-transform: capitalize;
        color: var(--v-color-black-800);
        margin-bottom: 8px;
      }
      & > p {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        text-transform: capitalize;
        font-feature-settings: "calt" off, "kern" off;
        color: var(--v-color-black-500);
        margin-bottom: 9px;
      }
      & > span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 123.6%;
        text-transform: capitalize;
        color: var(--v-color-yellow-900);
        a {
          transition: all 0.15s linear 0s;
          text-decoration: none;
          color: var(--v-color-yellow-900);
        }
      }
    }
  }
}
</style>
