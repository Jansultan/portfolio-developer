<template>
  <div class="left-sidebar">
    <div class="left-sidebar-inner">
      <b-avatar
        badge
        class="user-ava"
        badge-variant="green"
        size="150px"
      ></b-avatar>
      <h3>Zhansultan Zhagdatuly</h3>
      <span class="user-job">Font-end Developer</span>
      <div class="social-link">
        <a href="#!" style="font-size: 14px">
          <b-icon
            icon="facebook"
            class="rounded-circle"
            variant="light"
          ></b-icon>
        </a>
        <a href="#!" style="font-size: 14px">
          <b-icon
            icon="instagram"
            class="rounded-circle"
            variant="light"
          ></b-icon>
        </a>
        <a href="#!" style="font-size: 14px">
          <b-icon
            icon="twitter"
            class="rounded-circle"
            variant="light"
          ></b-icon>
        </a>
        <a href="#!" style="font-size: 14px">
          <b-icon icon="github" class="rounded-circle" variant="light"></b-icon>
        </a>
        <a href="#!" style="font-size: 14px">
          <b-icon
            icon="youtube"
            class="rounded-circle"
            variant="light"
          ></b-icon>
        </a>
        <a href="#!" style="font-size: 14px">
          <b-icon icon="globe" class="rounded-circle" variant="light"></b-icon>
        </a>
      </div>
      <div class="block-other-info">
        <div class="personal-info">
          <div class="personal-info-inner">
            <span>Age:</span>
            <p>25</p>
          </div>
          <div class="personal-info-inner">
            <span>Residence:</span>
            <p>AK</p>
          </div>
          <div class="personal-info-inner">
            <span>Freelance:</span>
            <p class="active">Available</p>
          </div>
          <div class="personal-info-inner">
            <span>Address:</span>
            <p>Almaty, Kazakhstan</p>
          </div>
        </div>
        <div class="border-line"></div>
        <div class="sidebar-column">
          <h4>Languages</h4>
          <div
            class="sidebar-column__inner"
            v-for="lang in languages"
            :key="`lang-${lang.id}`"
          >
            <div class="sidebar-column__header">
              <span>{{ lang.name }}</span>
              <p>{{ lang.value }}%</p>
            </div>
            <div class="progress-bar-border">
              <b-progress
                height="2px"
                :value="lang.value"
                variant="warning"
              ></b-progress>
            </div>
          </div>
          <div class="border-line"></div>
          <h4>Skills</h4>
          <div
            class="sidebar-column__inner"
            v-for="skill in skills"
            :key="`skill-${skill.id}`"
          >
            <div class="sidebar-column__header">
              <span>{{ skill.name }}</span>
              <p>{{ skill.value }}%</p>
            </div>
            <div class="progress-bar-border">
              <b-progress
                height="2px"
                :value="skill.value"
                variant="warning"
              ></b-progress>
            </div>
          </div>
          <div class="border-line"></div>
          <h4>Extra Skills</h4>
          <div class="extra-skills">
            <b-badge
              v-for="extraSkill in extraSkills"
              :key="`extraSkill-${extraSkill.id}`"
              pill
              variant="info"
              class="badge__info"
              >{{ extraSkill.name }}</b-badge
            >
          </div>
          <div class="border-line"></div>
        </div>
      </div>
      <b-button variant="warning" style="width: 100%">
        Download
        <b-icon icon="download" class="download-icon"></b-icon>
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { id: 1, name: "Kazakh", value: 100 },
        { id: 2, name: "English", value: 50 },
        { id: 3, name: "Russian", value: 80 },
      ],
      skills: [
        { id: 1, name: "Html", value: 100 },
        { id: 2, name: "CSS", value: 100 },
        { id: 3, name: "JavaScript", value: 90 },
        { id: 4, name: "VUE", value: 90 },
        { id: 5, name: "Git", value: 75 },
        { id: 6, name: "TypeScript", value: 70 },
      ],
      extraSkills: [
        { id: 1, name: "Bootstrap" },
        { id: 2, name: "Vuetify" },
        { id: 3, name: "Sass/Scss/Less" },
        { id: 4, name: "Gulp, Webpack Grunt" },
        { id: 5, name: "Git Knowldge" },
        { id: 6, name: "Bitbucket" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.left-sidebar {
  position: absolute;
  width: 290px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: var(--v-color-white);
  &-inner {
    padding: 50px 40px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .user-ava {
      margin-bottom: 31px;
    }
    h3 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 123.6%;
      display: flex;
      align-items: center;
      text-transform: capitalize;
      color: var(--v-color-black-800);
      margin-bottom: 15px;
    }
    span.user-job {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      text-transform: capitalize;
      font-feature-settings: "calt" off, "kern" off;
      color: var(--v-color-black-500);
      margin-bottom: 15px;
    }
    .social-link {
      display: flex;
      align-items: center;
      a {
        padding: 7px;
        -webkit-transition: all ease-in 300ms;
        transition: all ease-in 300ms;
        background-color: var(--v-color-yellow-700);
        display: inline-block;
        line-height: 0;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 100px;
        transition: all ease-in 300ms;
        & svg {
          color: var(--v-color-black-900) !important;
          transition: all ease-in 300ms;
        }
        &:hover {
          box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
          & svg {
            color: var(--v-color-white) !important;
            transition: all ease-in 300ms;
          }
        }
      }
    }

    .border-line {
      border-top: 1.5px solid var(--v-color-gray-400);
      margin: 25px 0;
    }

    .block-other-info {
      overflow: auto;
      position: relative;
      height: calc(100vh - 440px);
      width: 100%;
      scrollbar-width: none;
      border-top: 1.5px solid var(--v-color-gray-400);
      border-bottom: 1.5px solid var(--v-color-gray-400);
      margin: 15px 0 25px;
      padding: 25px 0;
      display: flex;
      flex-direction: column;
      &::-webkit-scrollbar {
        display: none;
      }
      .personal-info {
        display: flex;
        flex-direction: column;
        &-inner {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          &:last-child {
            margin-bottom: 0;
          }
          & > span {
            height: 24px;
            background: var(--v-color-yellow-900);
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
            text-transform: capitalize;
            font-feature-settings: "calt" off, "kern" off;
            color: var(--v-color-black-800);
          }

          & > p {
            margin: 0;
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
            text-align: right;
            text-transform: capitalize;
            font-feature-settings: "calt" off, "kern" off;
            color: var(--v-color-black-800);
            &.active {
              color: #7eb942;
            }
          }
        }
      }
      .sidebar-column {
        display: flex;
        width: 100%;
        flex-direction: column;
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
        &__inner {
          display: flex;
          flex-direction: column;
          margin-bottom: 10px;
          .sidebar-column__header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
            & > span,
            & > p {
              font-family: "Inter";
              font-style: normal;
              font-weight: 400;
              font-size: 15px;
              line-height: 24px;
              text-transform: capitalize;
              font-feature-settings: "calt" off, "kern" off;
              color: var(--v-color-black-500);
              margin-bottom: 0;
            }
          }
          .progress-bar-border {
            width: 100%;
            height: 6px;
            border: 0.5px solid #ffb400;
            border-radius: 30px;
            padding: 1px 1px 0;
          }
        }
        .extra-skills {
          display: flex;
          flex-wrap: wrap;
          .badge__info {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            text-transform: capitalize;
            font-feature-settings: "calt" off, "kern" off;
            color: var(--v-color-black-800);
            margin-bottom: 5px;
            margin-right: 5px;
          }
        }
      }
    }
    .download-icon {
      font-size: 14px !important;
      margin-left: 20px;
    }
  }
}
</style>
