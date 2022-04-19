<template>
  <div class="portfolio-container">
    <h1>Portfolio</h1>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <b-tabs active-nav-item-class="active-tab" lazy class="tabs-block">
      <b-tab
        v-for="(tab, i) in tabs"
        :key="`tab-${tab.id}`"
        :title="tab.title"
        :active="i === 0"
      >
        <div class="tab-content-wrapper">
          <div
            class="tab-image"
            v-for="image in getImages(tab.type)"
            :key="`image-${image.id}`"
          >
            <a href="#!">
              <b-img-lazy
                v-bind="mainProps"
                :src="image.url"
                :alt="`${image.name}-${image.id}`"
                class="img-block"
              ></b-img-lazy>
              <div class="img-opacity">
                <b-icon
                  icon="plus"
                  scale="4"
                  animation="throb"
                  variant="dark"
                ></b-icon>
              </div>
            </a>
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { id: 1, title: "All categories", type: "all" },
        { id: 2, title: "UI Design", type: "ui_design" },
        { id: 3, title: "Web Templates", type: "web_tempaltes" },
        { id: 4, title: "Logo", type: "logo" },
        { id: 5, title: "Branding", type: "branding" },
      ],
      mainProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: "#bbb",
        width: 310,
        height: 300,
      },
      images: [
        {
          id: 1,
          type: "branding",
          name: "branding",
          url: "https://picsum.photos/310/300/?image=1",
        },
        {
          id: 2,
          type: "ui_design",
          name: "ui_design",
          url: "https://picsum.photos/310/300/?image=2",
        },
        {
          id: 3,
          type: "web_tempaltes",
          name: "web_tempaltes",
          url: "https://picsum.photos/310/300/?image=3",
        },
        {
          id: 4,
          type: "logo",
          name: "logo",
          url: "https://picsum.photos/310/300/?image=4",
        },
        {
          id: 5,
          type: "web_tempaltes",
          name: "web_tempaltes",
          url: "https://picsum.photos/310/300/?image=5",
        },
        {
          id: 6,
          type: "logo",
          name: "logo",
          url: "https://picsum.photos/310/300/?image=6",
        },
        {
          id: 7,
          type: "web_tempaltes",
          name: "web_tempaltes",
          url: "https://picsum.photos/310/300/?image=7",
        },
        {
          id: 8,
          type: "branding",
          name: "branding",
          url: "https://picsum.photos/310/300/?image=8",
        },
        {
          id: 9,
          type: "ui_design",
          name: "ui_design",
          url: "https://picsum.photos/310/300/?image=9",
        },
      ],
      indexImg: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    getImages(typeCategoria) {
      if (typeCategoria === "all") {
        return this.images;
      }
      return this.images.filter((i) => i.type === typeCategoria);
    },
    getImageUrl(imageId) {
      const { width, height } = this.mainProps;
      return `https://picsum.photos/${width}/${height}/?image=${imageId}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.portfolio-container {
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
  ::v-deep .nav-tabs .nav-link.active-tab {
    color: #ffb400;
  }
  .tabs-block {
    width: 100%;
    ::v-deep .nav-tabs {
      border: none !important;
      justify-content: center;
      margin-bottom: 36px;
      .nav-item .nav-link {
        background-color: transparent !important;
        border: none !important;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 123.6%;
        text-transform: capitalize;
        color: var(--v-color-black-800);
        transition: all 200ms ease-in 0s;
        &:hover {
          color: var(--v-color-yellow-900) !important;
        }
        &.active-tab {
          color: var(--v-color-yellow-900) !important;
        }
      }
    }
    .tab-content-wrapper {
      display: flex;
      flex-wrap: wrap;
      .tab-image {
        width: 310px !important;
        height: 300px !important;
        position: relative;
        overflow: hidden;
        margin: 10px !important;
        &:hover .img-opacity {
          opacity: 0.8;
          transform: translateY(-100%);
        }
        .img-block {
          margin: 0 !important;
        }
        .img-opacity {
          content: "";
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 310px;
          height: 300px;
          background-color: var(--v-color-yellow-900);
          opacity: 0;
          transition: all 0.4s ease-in-out 0s;
          transform: translateY(-20%);
        }
      }
    }
  }
}
</style>
