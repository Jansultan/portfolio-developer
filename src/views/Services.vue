<template>
  <div class="services-container">
    <h1>my services</h1>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="services-container__info">
      <div class="services-info__block">
        <div class="services-info__block__inner">
          <div class="info__block-box">
            <coding class="icon" />
            <h4>web development</h4>
            <span>blog, e-commerce</span>
          </div>
          <div class="info__block-box-back">
            <h4>Web Development</h4>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.</span
            >
            <p>
              <a href="#!"
                >ORDER NOW <b-icon icon="arrow-right-short" scale="1.3"></b-icon
              ></a>
            </p>
          </div>
        </div>
      </div>
      <div class="services-info__block">
        <div class="services-info__block__inner">
          <div class="info__block-box">
            <uiux class="icon" />
            <h4>uI/uX design</h4>
            <span>Mobile app, website design</span>
          </div>
          <div class="info__block-box-back">
            <h4>uI/uX design</h4>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.</span
            >
            <p>
              <a href="#!"
                >ORDER NOW <b-icon icon="arrow-right-short" scale="1.3"></b-icon
              ></a>
            </p>
          </div>
        </div>
      </div>
      <div class="services-info__block">
        <div class="services-info__block__inner">
          <div class="info__block-box">
            <microphone class="icon" />
            <h4>sound design</h4>
            <span>Voice Over, Beat Making</span>
          </div>
          <div class="info__block-box-back">
            <h4>sound design</h4>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.</span
            >
            <p>
              <a href="#!"
                >ORDER NOW <b-icon icon="arrow-right-short" scale="1.3"></b-icon
              ></a>
            </p>
          </div>
        </div>
      </div>
      <div class="services-info__block">
        <div class="services-info__block__inner">
          <div class="info__block-box">
            <gameDevelopment class="icon" />
            <h4>game design</h4>
            <span>Character Design, Props & Objects</span>
          </div>
          <div class="info__block-box-back">
            <h4>game design</h4>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.</span
            >
            <p>
              <a href="#!"
                >ORDER NOW <b-icon icon="arrow-right-short" scale="1.3"></b-icon
              ></a>
            </p>
          </div>
        </div>
      </div>
      <div class="services-info__block">
        <div class="services-info__block__inner">
          <div class="info__block-box">
            <photographer class="icon" />
            <h4>photography</h4>
            <span>portrait, product photography</span>
          </div>
          <div class="info__block-box-back">
            <h4>photography</h4>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.</span
            >
            <p>
              <a href="#!"
                >ORDER NOW <b-icon icon="arrow-right-short" scale="1.3"></b-icon
              ></a>
            </p>
          </div>
        </div>
      </div>
      <div class="services-info__block">
        <div class="services-info__block__inner">
          <div class="info__block-box">
            <addPopUp class="icon" />
            <h4>advertising</h4>
            <span>Voice Over, Beat Making</span>
          </div>
          <div class="info__block-box-back">
            <h4>advertising</h4>
            <span
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              nulla diam in ac dictum a urna viverra morbi.</span
            >
            <p>
              <a href="#!"
                >ORDER NOW <b-icon icon="arrow-right-short" scale="1.3"></b-icon
              ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coding from "../icons/coding.vue";
import uiux from "../icons/uiux.vue";
import microphone from "../icons/microphone.vue";
import gameDevelopment from "../icons/gameDevelopment.vue";
import photographer from "../icons/photographer.vue";
import addPopUp from "../icons/addPopUp.vue";

export default {
  components: {
    coding,
    uiux,
    microphone,
    gameDevelopment,
    photographer,
    addPopUp,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.services-container {
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
  }
  &__info {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-left: -10px;
    .services-info__block {
      width: 310px;
      height: 225px;
      transform-style: preserve-3d;
      margin: 10px;
      &:hover {
        .services-info__block__inner {
          transform: rotateX(180deg);
          .info__block-box {
            position: absolute;
            transition: all 400ms ease-in 0s;
            visibility: hidden;
            overflow: hidden;
          }
          .info__block-box-back {
            display: flex;
          }
        }
      }
      &__inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s ease 0s;
        transform-style: preserve-3d;
        .info__block-box {
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          transition: all 400ms ease-in 0s;
          background: var(--v-color-white);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 25px;
          .icon {
            margin-bottom: 33px;
          }
          & > h4 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 123.6%;
            text-transform: capitalize;
            color: var(--v-color-black-800);
            margin-bottom: 15px;
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
            margin-bottom: 0;
          }
        }
        .info__block-box-back {
          width: 100%;
          height: 100%;
          transform: rotateX(180deg);
          position: inherit;
          display: none;
          transition: all 400ms ease-in 400ms;
          background: var(--v-color-white);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px 25px;
          & > h4 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 123.6%;
            text-transform: capitalize;
            color: var(--v-color-black-800);
            margin-bottom: 22px;
          }
          & > span {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
            text-align: center;
            text-transform: capitalize;
            font-feature-settings: "calt" off, "kern" off;
            color: var(--v-color-black-500);
            margin-bottom: 22px;
          }
          & > p {
            font-family: "Roboto";
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 14px;
            color: var(--v-color-yellow-900);
            margin-bottom: 0;
            a {
              transition: all 0.15s linear 0s;
              text-decoration: none;
              color: var(--v-color-yellow-900);
            }
          }
        }
      }
    }
  }
}
</style>
