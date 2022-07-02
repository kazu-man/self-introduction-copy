<template>
  <Header :headerOption="headerOption" />
  <!-- <button @click="changeTarget">change target</button> -->
  <Home />
  <About />
  <MySkill />
  <Work />
  <Contact />
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
    const headerOption = ref({
      color: "red",
      list: ["HOME", "ABOUT", "SKILL", "WORK", "CONTACT"],
      target: 0,
    });

    // const changeTarget = () => {
    //   headerOption.value.target =
    //     headerOption.value.target < headerOption.value.list.length - 1
    //       ? headerOption.value.target + 1
    //       : 0;
    // };

    return {
      headerOption,
      // changeTarget,
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
