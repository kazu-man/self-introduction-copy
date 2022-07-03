<template>
  <ContentLayout>
    <div class="home-content">
      <div class="home-title">
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
  font-size: 4rem;
  margin-bottom: 0;
}
.sub-title {
  font-size: 2rem;
  font-family: "Oswald", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
