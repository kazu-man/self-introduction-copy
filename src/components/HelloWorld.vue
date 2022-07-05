<template>
  <Loading
    v-if="loading"
    :loading="loading"
    @loadingStop="loadingStop"
  ></Loading>
  <transition mode="in-out">
    <div v-show="!loading">
      <Header
        :headerOption="headerOption"
        @clickHeaderOption="scrollContentTo"
      />
      <div style="background: white" ref="mainWrapper">
        <div ref="homeComponent">
          <Home />
        </div>
        <div ref="aboutComponent">
          <About />
        </div>
        <div ref="mySkillComponent">
          <MySkill />
        </div>
        <div ref="workComponent">
          <Work />
        </div>
        <div ref="contactComponent">
          <Contact />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref } from "vue";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import MySkill from "./myskills/MySkill";
import Work from "./Work";
import Contact from "./Contact";
import gsap from "gsap";
import Loading from "./Loading";

export default {
  name: "HelloWorld",
  components: { Header, Home, About, MySkill, Work, Contact, Loading },
  setup() {
    const homeComponent = ref(null);
    const aboutComponent = ref(null);
    const mySkillComponent = ref(null);
    const workComponent = ref(null);
    const contactComponent = ref(null);
    const mainWrapper = ref(null);
    const loading = ref(true);

    const headerOption = ref({
      color: "red",
      list: [
        {
          name: "HOME",
          component: homeComponent,
          background: "rgba(229, 196, 212, 0.84)",
        },
        {
          name: "ABOUT",
          component: aboutComponent,
          background: "rgba(131, 212, 250, 0.996)",
        },
        {
          name: "SKILL",
          component: mySkillComponent,
          background: "rgb(248, 207, 101)",
        },
        {
          name: "WORK",
          component: workComponent,
          background: "rgb(239, 236, 233)",
        },
        {
          name: "CONTACT",
          component: contactComponent,
          background: "rgb(87, 244, 208)",
        },
      ],
      target: "HOME",
    });

    const bgChange = (color) => {
      gsap.to(mainWrapper.value, {
        background: color,
        delay: 0,
        duration: 2,
      });
    };

    const handleScroll = () => {
      headerOption.value.list.forEach((list, index) => {
        if (
          list.component.getBoundingClientRect().top <
          window.innerHeight - 300
        ) {
          headerOption.value.target = headerOption.value.list[index].name;
          bgChange(headerOption.value.list[index].background);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    const scrollContentTo = (option) => {
      option.component.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const loadingStop = () => {
      loading.value = false;
      bgChange(headerOption.value.list[0].background);
    };

    return {
      headerOption,
      homeComponent,
      aboutComponent,
      mySkillComponent,
      workComponent,
      contactComponent,
      scrollContentTo,
      mainWrapper,
      loading,
      loadingStop,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/* .v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: all 0.1s;
}
.v-enter-to {
  opacity: 1;
} */
</style>
