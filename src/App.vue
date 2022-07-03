<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Pacifico&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Oswald:wght@200&family=Pacifico&display=swap");
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
html {
  font-size: min(2vw, 18px);
  font-family: "Oswald", Calibri;
}
</style>
