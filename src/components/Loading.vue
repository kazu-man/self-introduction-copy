<template>
  <div v-if="loading" class="fullview" ref="loaderWrapper">
    <vue-element-loading
      :active="loadingActive"
      :spinner="'line-scale'"
      :color="'white'"
      :background-color="'rgba(0, 0, 0, 0)'"
    />
  </div>
</template>

<script>
import VueElementLoading from "vue-element-loading";
import gsap from "gsap";
import { ref } from "vue";

export default {
  name: "loading",
  props: ["loading"],
  emit: ["loadingStop"],
  components: {
    VueElementLoading,
  },
  setup(props, context) {
    const loaderWrapper = ref(null);
    const loadingActive = ref(true);
    setTimeout(() => {
      loadingActive.value = false;
      gsap.to(loaderWrapper.value, {
        x: "80%",
        y: "-80%",
        borderRadius: " 200% 0",
        rotateY: "20%",
        rotateX: "20%",
        delay: 0,
        duration: 1,
        opacity: 0.5,
        onComplete: () => {
          context.emit("loadingStop");
        },
      });
    }, 3000);

    return {
      loaderWrapper,
      loadingActive,
    };
  },
};
</script>

<style>
.fullview {
  width: 100%;
  height: 100%;
  background: rgba(229, 196, 212, 1);
  position: fixed !important;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  z-index: 2000;
}
.loading-spacer {
  height: 30%;
}
</style>
