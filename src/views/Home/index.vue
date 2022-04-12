<template>
  <div class="home-container">
    <div class="home-container-block">
      <div class="inner-block">
        <div class="container-animattion">
          <div class="cube" v-for="i in 8" :key="`cube-${i}`"></div>
          <div class="triangle" v-for="i in 2" :key="`triangle-${i}`">
            <div class="empty"></div>
          </div>
        </div>
        <div class="block-user">
          <div class="user-info">
            <h1>
              I’m Zhansultan Shagdatuly
              <span style="color: var(--v-color-yellow-700)">Front-end</span>
              Developer
            </h1>
            <span class="info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              volutpat feugiat placerat lobortis. Natoque rutrum semper sed
              suspendisse nunc lectus.
            </span>
            <b-button variant="warning" class="btn-check-contact">
              HIRE ME <b-icon icon="arrow-right-short"></b-icon>
            </b-button>
          </div>
          <b-img
            right
            :src="require('../../assets/your_photo.svg')"
            alt="Right image"
            class="user-img"
          ></b-img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home-container {
  margin-bottom: 50px;
  width: 100%;
  &-block {
    align-items: end;
    overflow: hidden;
    background-color: rgb(255, 255, 255);
    transition: all 0.4s ease-in-out 0s;
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    min-height: 500px;
    position: relative;
    .inner-block {
      width: calc(100% - 100px);
      z-index: 1;
      color: #fff;
      word-break: break-word;
      margin: 0 50px;
      .container-animattion {
        z-index: -1;
        .cube {
          position: absolute;
          bottom: -15px;
          left: 28vw;
          width: 10px;
          height: 10px;
          border: 1px solid rgb(5, 255, 0);
          transform-origin: left top;
          transform: scale(0) rotate(0deg) translate(-50%, -50%);
          animation: 12s ease-in 0s infinite normal forwards running cube;
          &:nth-of-type(2) {
            animation-delay: 2s;
            border-radius: 100%;
            left: 23vw;
          }
          &:nth-of-type(2n) {
            border-color: #ffb400;
          }
          &:nth-of-type(3) {
            animation-delay: 4s;
            left: 50vw;
            border-color: #0047ff;
          }
          &:nth-of-type(4) {
            animation-delay: 6s;
            left: 6vw;
          }
          &:nth-of-type(5) {
            animation-delay: 8s;
            left: 14vw;
            border-color: #ff2e00;
          }
          &:nth-of-type(6) {
            animation-delay: 10s;
            left: 47vw;
          }
          &:nth-of-type(7) {
            animation-delay: 12s;
            left: 7vw;
            border-color: #05ff00;
            border-radius: 100%;
          }
          &:nth-of-type(8) {
            animation-delay: 14s;
            left: 62vw;
          }
        }
        .triangle {
          position: absolute;
          width: 0;
          bottom: -15px;
          left: 10vw;
          border-bottom: solid 10px #05ff00;
          border-right: solid 6px transparent;
          border-left: solid 6px transparent;
          transform-origin: left top;
          transform: scale(0) rotate(0deg) translate(-50%, -50%);
          animation: 12s ease-in 0s infinite normal forwards running cube;
          animation-delay: 8s;
          .empty {
            position: absolute;
            top: 2px;
            left: -4px;
            width: 0;
            border-bottom: solid 7px white;
            border-right: solid 4px transparent;
            border-left: solid 4px transparent;
          }
          &:last-child {
            animation-delay: 12s;
            left: 50vw;
            position: absolute;
            width: 0;
            bottom: -15px;
            border-bottom: solid 10px #ff2e00;
            border-right: solid 6px transparent;
            border-left: solid 6px transparent;
            transform-origin: left top;
            transform: scale(0) rotate(0deg) translate(-50%, -50%);
            animation: 12s ease-in 0s infinite normal forwards running cube;
          }
        }
      }
      .block-user {
        display: flex;
        flex-wrap: nowrap;
        .user-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-basis: 65%;
          h1 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 48px;
            line-height: 123.6%;
            color: var(--v-color-black-800);
            margin-bottom: 18px;
            z-index: 1;
          }
          .info {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            font-feature-settings: "calt" off, "kern" off;
            color: var(--v-color-black-500);
            margin-bottom: 25px;
            z-index: 1;
          }
          .btn-check-contact {
            width: 154px;
            height: 51px;
            z-index: 1;
          }
        }
        .user-img {
          width: 300px;
          height: 459.09px;
          display: flex;
          flex-basis: 35%;
          object-fit: cover;
          margin-left: 25px;
          z-index: 1;
        }
      }
    }
  }
}
@keyframes cube {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  100% {
    transform: translateY(-700px) rotate(560deg);
  }
}
</style>
