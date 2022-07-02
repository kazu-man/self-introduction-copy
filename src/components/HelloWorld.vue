<template>
  <Header :headerOption="headerOption" @clickHeaderOption="scrollContentTo" />
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
</template>

<script>
import { ref } from "@vue/reactivity";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import MySkill from "./myskills/MySkill";
import Work from "./Work";
import Contact from "./Contact";

export default {
  name: "HelloWorld",
  components: { Header, Home, About, MySkill, Work, Contact },
  setup() {
    const homeComponent = ref(null);
    const aboutComponent = ref(null);
    const mySkillComponent = ref(null);
    const workComponent = ref(null);
    const contactComponent = ref(null);

    const headerOption = ref({
      color: "red",
      list: [
        {
          name: "HOME",
          component: homeComponent,
        },
        {
          name: "ABOUT",
          component: aboutComponent,
        },
        {
          name: "SKILL",
          component: mySkillComponent,
        },
        {
          name: "WORK",
          component: workComponent,
        },
        {
          name: "CONTACT",
          component: contactComponent,
        },
      ],
      target: "HOME",
    });

    const handleScroll = () => {
      headerOption.value.list.forEach((list, index) => {
        if (
          list.component.getBoundingClientRect().top <
          window.innerHeight - 300
        ) {
          headerOption.value.target = headerOption.value.list[index].name;
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

    return {
      headerOption,
      homeComponent,
      aboutComponent,
      mySkillComponent,
      workComponent,
      contactComponent,
      scrollContentTo,
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
</style>
