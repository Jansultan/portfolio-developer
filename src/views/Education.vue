<template>
  <div class="education-container">
    <h1>Education</h1>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="education-body">
      <div
        class="education-body__inner"
        v-for="education in educations"
        :key="`education-${education.id}`"
      >
        <div class="education-block1">
          <h4>{{ education.place }}</h4>
          <div class="education-study">
            <p>{{ education.type }}</p>
            <span>{{ education.date }}</span>
          </div>
        </div>
        <div class="education-block2">
          <h4>{{ education.date }}</h4>
          <p>{{ education.dscr }}</p>
        </div>
      </div>
    </div>
    <h1 style="margin-top: 70px">Work History</h1>
    <p>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. lorem ipsum
    </p>
    <div class="education-body">
      <div
        class="education-body__inner"
        v-for="work in works"
        :key="`work-${work.id}`"
      >
        <div class="education-block1">
          <h4>{{ work.place }}</h4>
          <div class="education-study">
            <p>{{ work.type }}</p>
            <span>{{ work.date }}</span>
          </div>
        </div>
        <div class="education-block2">
          <h4>{{ work.date }}</h4>
          <p>{{ work.dscr }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      educations: [
        {
          id: 1,
          place: "University of Toronto",
          csert: "Certificate of web training",
          date: "Jan 1016 - Dec 2021",
          type: "Student",
          dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        },
        {
          id: 2,
          place: "Programming Course",
          csert: "Certificate of web training",
          date: "Jan 1016 - Dec 2021",
          type: "Student",
          dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        },
        {
          id: 3,
          place: "Web developer courses",
          csert: "Certificate of web training",
          date: "Jan 1016 - Dec 2021",
          type: "Student",
          dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        },
      ],
      works: [
        {
          id: 1,
          place: "Lead Web Designer",
          csert: "Certificate of web training",
          date: "Jan 1016 - Dec 2021",
          type: "Student",
          dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        },
        {
          id: 2,
          place: "Junior Web Designer",
          csert: "Certificate of web training",
          date: "Jan 1016 - Dec 2021",
          type: "Student",
          dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        },
        {
          id: 3,
          place: "Senior Web Designer",
          csert: "Certificate of web training",
          date: "Jan 1016 - Dec 2021",
          type: "Student",
          dscr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.education-container {
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
  .education-body {
    width: 100%;
    margin-bottom: 20px;
    background: var(--v-color-white);
    padding: 40px 30px;
    display: flex;
    flex-direction: column;
    &__inner {
      display: flex;
      padding-bottom: 16px;
      border-bottom: 1.5px solid var(--v-color-gray-400);
      margin-bottom: 16px;
      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
      h4 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 123.6%;
        text-transform: capitalize;
        color: var(--v-color-black-800);
        margin-bottom: 25px;
      }
      .education-block1 {
        width: 35%;
        display: flex;
        flex-direction: column;
        .education-study {
          display: flex;
          align-items: center;
          & > p {
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 15px;
            line-height: 24px;
            text-transform: capitalize;
            font-feature-settings: "calt" off, "kern" off;
            color: var(--v-color-black-800);
            margin-right: 20px;
            margin-bottom: 0;
          }
          & > span {
            height: 22px;
            font-family: "Inter";
            font-style: normal;
            font-weight: 400;
            font-size: 10px;
            color: var(--v-color-white);
            background: var(--v-color-yellow-900);
            border-radius: 1px;
            padding: 4px 7px;
          }
        }
      }
      .education-block2 {
        width: 65%;
        display: flex;
        flex-direction: column;
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
    }
  }
}
</style>
