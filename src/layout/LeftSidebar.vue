<template>
  <div class="left-sidebar-container">
    <div class="left-sidebar" :class="{ 'dark-700': $store.state.isLightmode }">
      <div class="left-sidebar-inner">
        <b-avatar
          badge
          class="user-ava"
          badge-variant="green"
          size="150px"
        ></b-avatar>
        <h3 :class="{ 'dark-700': $store.state.isLightmode }">
          Zhansultan Zhagdatuly
        </h3>
        <span class="user-job">Font-end Developer</span>
        <div class="social-link">
          <a
            v-for="link in socialLinks"
            :key="`social-link-${link.id}`"
            :href="link.url"
            target="_blank"
            style="font-size: 14px"
          >
            <b-icon
              :icon="link.icon"
              class="rounded-circle"
              :variant="link.light"
            ></b-icon>
          </a>
        </div>
        <div
          class="block-other-info"
          :style="`border-color: ${
            $store.state.isLightmode ? 'rgba(255, 255, 255, 0.2);' : ''
          }`"
        >
          <div class="personal-info">
            <div class="personal-info-inner">
              <span>Age:</span>
              <p :class="{ 'dark-700': $store.state.isLightmode }">25</p>
            </div>
            <div class="personal-info-inner">
              <span>Residence:</span>
              <p :class="{ 'dark-700': $store.state.isLightmode }">KZ</p>
            </div>
            <div class="personal-info-inner">
              <span>Freelance:</span>
              <p class="active">Available</p>
            </div>
            <div class="personal-info-inner">
              <span>Address:</span>
              <p :class="{ 'dark-700': $store.state.isLightmode }">
                Almaty, Kazakhstan
              </p>
            </div>
          </div>
          <div
            class="border-line"
            :style="`border-color: ${
              $store.state.isLightmode ? 'rgba(255, 255, 255, 0.2);' : ''
            }`"
          ></div>
          <div class="sidebar-column">
            <h4 :class="{ 'dark-700': $store.state.isLightmode }">Languages</h4>
            <div
              class="sidebar-column__inner"
              v-for="lang in languages"
              :key="`lang-${lang.id}`"
            >
              <div class="sidebar-column__header">
                <span :class="{ 'dark-color': $store.state.isLightmode }">{{
                  lang.name
                }}</span>
                <p :class="{ 'dark-color': $store.state.isLightmode }">
                  {{ lang.value }}%
                </p>
              </div>
              <div class="progress-bar-border">
                <b-progress
                  height="2px"
                  :value="lang.value"
                  variant="warning"
                ></b-progress>
              </div>
            </div>
            <div
              class="border-line"
              :style="`border-color: ${
                $store.state.isLightmode ? 'rgba(255, 255, 255, 0.2);' : ''
              }`"
            ></div>
            <h4 :class="{ 'dark-700': $store.state.isLightmode }">Skills</h4>
            <div
              class="sidebar-column__inner"
              v-for="skill in skills"
              :key="`skill-${skill.id}`"
            >
              <div class="sidebar-column__header">
                <span :class="{ 'dark-color': $store.state.isLightmode }">{{
                  skill.name
                }}</span>
                <p :class="{ 'dark-color': $store.state.isLightmode }">
                  {{ skill.value }}%
                </p>
              </div>
              <div class="progress-bar-border">
                <b-progress
                  height="2px"
                  :value="skill.value"
                  variant="warning"
                ></b-progress>
              </div>
            </div>
            <div
              class="border-line"
              :style="`border-color: ${
                $store.state.isLightmode ? 'rgba(255, 255, 255, 0.2);' : ''
              }`"
            ></div>
            <h4 :class="{ 'dark-700': $store.state.isLightmode }">
              Extra Skills
            </h4>
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
            <div
              class="border-line"
              :style="`border-color: ${
                $store.state.isLightmode ? 'rgba(255, 255, 255, 0.2);' : ''
              }`"
            ></div>
            <h4 :class="{ 'dark-700': $store.state.isLightmode }">
              UI frameworks
            </h4>
            <div class="extra-skills">
              <b-badge
                v-for="uiFrame in uiFrameworks"
                :key="`uiFrame-${uiFrame.id}`"
                pill
                variant="info"
                class="badge__info"
                >{{ uiFrame.name }}</b-badge
              >
            </div>
            <div
              class="border-line"
              :style="`border-color: ${
                $store.state.isLightmode ? 'rgba(255, 255, 255, 0.2);' : ''
              }`"
            ></div>
          </div>
        </div>
        <b-button variant="warning" style="width: 100%">
          Download
          <b-icon icon="download" class="download-icon"></b-icon>
        </b-button>
      </div>
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
        { id: 1, name: "Html5", value: 100 },
        { id: 2, name: "CSS3", value: 100 },
        { id: 3, name: "JavaScript (ES6+)", value: 90 },
        { id: 4, name: "VUE 2/3", value: 90 },
        { id: 5, name: "Git", value: 75 },
        { id: 6, name: "TypeScript", value: 70 },
      ],
      extraSkills: [
        { id: 1, name: "Bootstrap" },
        { id: 2, name: "Vuetify" },
        { id: 3, name: "Sass/Scss/Less" },
        { id: 4, name: "Webpack / Gulp / Grunt" },
        { id: 5, name: "npm / yarn" },
        { id: 6, name: "github / gitlub / bitbucket" },
        { id: 7, name: "AJAX/JSON" },
        { id: 8, name: "fetch/axios, WebSocket" },
        { id: 9, name: "vue-router" },
        { id: 10, name: "vuex" },
        { id: 11, name: "vue-cli" },
        { id: 12, name: "Composition api" },
        { id: 13, name: "flex / CSSGrid" },
        { id: 14, name: "lodash / moment" },
        { id: 15, name: "FIGMA" },
        { id: 16, name: "Jira / YouTrack" },
        { id: 17, name: "swagger RESTful web API" },
      ],
      uiFrameworks: [
        { id: 1, name: "BootstrapVue" },
        { id: 2, name: "Vuetify" },
        { id: 3, name: "Vue Material" },
        { id: 4, name: "Vue Material Kit" },
        { id: 5, name: "Element UI" },
      ],
      socialLinks: [
        { id: 1, icon: "facebook", variant: "light", url: "#!" },
        { id: 2, icon: "instagram", variant: "light", url: "#!" },
        { id: 3, icon: "twitter", variant: "light", url: "#!" },
        {
          id: 4,
          icon: "github",
          variant: "light",
          url: "https://github.com/zhaks96",
        },
        { id: 5, icon: "youtube", variant: "light", url: "#!" },
        { id: 6, icon: "globe", variant: "light", url: "#!" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.left-sidebar-container {
  width: 290px;
  position: absolute;
  right: 0;
  z-index: 9999;
  left: 0px;
  top: 0px;
  .left-sidebar {
    position: fixed;
    width: 290px;
    height: 100%;
    background: var(--v-color-white);
    transition: all 300ms ease-in 0s;
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
              padding: 0 4px;
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
}
</style>
