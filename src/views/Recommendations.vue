<template>
  <div class="recommend-container">
    <h1>recommendations</h1>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="recommend-carousel">
      <carousel
        :per-page="3"
        paginationActiveColor="#FFB400"
        paginationPadding="5"
        autoplay
        loop
        autoplayTimeout="5000"
        speed="2000"
      >
        <slide v-for="feedback in feedbacks" :key="`rec-${feedback.id}`">
          <div class="recommend-slide">
            <b-form-rating
              id="rating-no-border"
              no-border
              :value="feedback.rating"
              readonly
              color="#FFB400"
              style="width: 130px"
            ></b-form-rating>
            <h4>{{ feedback.title }}</h4>
            <span>{{ feedback.text }}</span>
            <div class="recommend-slide-footer">
              <b-avatar size="80px" :src="feedback.user.ava"></b-avatar>
              <div class="recommend-slide-footer__info">
                <h4>{{ feedback.user.fio }}</h4>
                <p>{{ feedback.user.job }}</p>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: { Carousel, Slide },
  data() {
    return {
      feedbacks: [
        {
          id: 1,
          rating: 5,
          title: "Great Quality!",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
          user: { ava: "", fio: "James Gouse", job: "Graphic Designer" },
        },
        {
          id: 2,
          rating: 5,
          title: "Amazing work!",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
          user: { ava: "", fio: "Tiana Philips", job: "Photographer" },
        },
        {
          id: 3,
          rating: 5,
          title: "Great Quality!",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
          user: { ava: "", fio: "Talan Westervelt", job: "Business man" },
        },
        {
          id: 4,
          rating: 5,
          title: "Great Quality-1!",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
          user: { ava: "", fio: "James Gouse", job: "Graphic Designer" },
        },
        {
          id: 5,
          rating: 5,
          title: "Great Quality-2!",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
          user: { ava: "", fio: "Tiana Philips", job: "Photographer" },
        },
        {
          id: 6,
          rating: 5,
          title: "Great Quality-3!",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
          user: { ava: "", fio: "Talan Westervelt", job: "Business man" },
        },
        {
          id: 7,
          rating: 5,
          title: "Great Quality-4!",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....",
          user: { ava: "", fio: "James Gouse", job: "Graphic Designer" },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recommend-container {
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
  .recommend-carousel {
    width: 100%;
    margin-bottom: 20px;
    .recommend-slide {
      width: 310px;
      height: 323px;
      background: var(--v-color-white);
      padding: 25px;
      display: flex;
      flex-direction: column;
      ::v-deep .form-control {
        padding: 0 !important;
        height: 24px !important;
        &:focus {
          color: #495057;
          background-color: #fff !important;
          border-color: #fff !important;
          outline: 0;
          box-shadow: none !important;
        }
      }
      & > h4 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 123.6%;
        text-transform: capitalize;
        color: var(--v-color-black-800);
        margin-top: 16px;
      }
      & > span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;
        text-transform: capitalize;
        font-feature-settings: "calt" off, "kern" off;
        color: var(--v-color-black-500);
        margin-top: 18px;
      }
      &-footer {
        display: flex;
        align-items: center;
        margin-top: 30px;
        &__info {
          margin-left: 13px;
          display: flex;
          flex-direction: column;
          & > h4 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 123.6%;
            text-transform: capitalize;
            color: var(--v-color-black-800);
            margin-bottom: 0;
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
            margin-top: 5px;
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
