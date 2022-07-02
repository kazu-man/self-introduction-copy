<template>
  <ContentLayout :title="'My Skills'">
    <div class="skill-wrapper" id="skill-wrapper" ref="skillWrapper">
      <div class="center-line"></div>
      <div class="backend">
        <div class="bar-title">BACKEND SKILLS</div>
        <SkillBar
          v-for="(skill, index) in backend"
          :key="index"
          :skill="skill"
          :direction="'left'"
          :show="show"
        />
      </div>
      <div class="frontend">
        <div class="bar-title">FRONTEND SKILLS</div>
        <SkillBar
          v-for="(skill, index) in frontend"
          :key="index"
          :skill="skill"
          :direction="'right'"
          :show="show"
        />
      </div>
    </div>
  </ContentLayout>
</template>

<script>
import { ref } from "vue";
import ContentLayout from "../ContentLayout";
import SkillBar from "./SkillBar";

export default {
  components: { ContentLayout, SkillBar },
  setup() {
    const show = ref(false);
    const skillWrapper = ref(null);

    const handleScroll = () => {
      show.value =
        skillWrapper.value.getBoundingClientRect().top < window.innerHeight;
    };

    window.addEventListener("scroll", handleScroll);
    const frontend = ref([
      {
        title: "Java Script",
        value: 60,
      },
      {
        title: "Vue.js",
        value: 90,
      },

      {
        title: "Next.js",
        value: 50,
      },
      {
        title: "Java Script",
        value: 60,
      },
      {
        title: "Vue.js",
        value: 90,
      },

      {
        title: "Next.js",
        value: 50,
      },
    ]);
    const backend = ref([
      {
        title: "Java",
        value: 90,
      },
      {
        title: "PHP",
        value: 70,
      },
      {
        title: "Python",
        value: 50,
      },
      {
        title: "Java",
        value: 90,
      },
      {
        title: "PHP",
        value: 70,
      },
      {
        title: "Python",
        value: 50,
      },
    ]);

    return {
      frontend,
      backend,
      show,
      skillWrapper,
    };
  },
};
</script>

<style>
.skill-wrapper {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(50px, auto);
  margin: 30px 0;
}
.center-line {
  position: absolute;
  top: 0;
  left: 50%;
  width: 0.5em;
  height: 100%;
  margin-left: -3px;
  background: #fff;
}
.bar-title {
  color: white;
  font-size: 2rem;
  font-weight: bold;
}
</style>
