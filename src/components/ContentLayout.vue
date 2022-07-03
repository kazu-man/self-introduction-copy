<template>
  <div id="home-wrapper">
    <div class="content">
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style>
#home-wrapper {
  width: 100%;
}
.content {
  width: 100%;
  height: auto;
  padding: 20px 0;
}
.title {
  font-family: "Pacifico", cursive;
  font-size: 2rem;
}
</style>
