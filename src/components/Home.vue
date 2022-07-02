<template>
  <ContentLayout>
    <div class="home-content">
      <div class="home-title">
        <div class="dummy-bg"></div>
        <div class="my-name">
          <h2>MY NAME</h2>
        </div>
        <div class="sub-title">WEB DEVELOPER & DESIGNER</div>
      </div>
    </div>
  </ContentLayout>
</template>

<script>
import ContentLayout from "./ContentLayout";

export default {
  components: { ContentLayout },
};
</script>

<style>
.home-content {
  color: white;
  background: rgb(241, 175, 175);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-title {
  margin-top: -100px;
}
.my-name {
  font-family: "Pacifico", cursive;
}
.my-name h2 {
  font-size: 1.5rem;
}
.sub-title {
  font-size: 1.2rem;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}
.dummy-bg {
  width: 100%;
  height: 100%;
  background: rgb(241, 175, 175);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
