<template>
  <div style="margin: 10%; position: relative">
    <div style="display: flex; justify-content: center; align-items: center">
      <transition name="icon" appear>
        <img
          v-if="targetIconShow"
          :src="targetImageUrl"
          id="svg"
          style="width: 80%"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { ref, watch, toRefs } from "vue";

export default {
  props: ["showIcon", "targetImageUrl"],
  setup(props) {
    const { showIcon } = toRefs(props);

    const targetIconShow = ref(true);

    watch(showIcon, (newVal) => {
      if (newVal) {
        targetIconShow.value = false;
        setTimeout(() => {
          targetIconShow.value = showIcon;
        }, 1000);
      }
    });

    return {
      targetIconShow,
    };
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}

.icon-enter-from {
  opacity: 0;
  width: 0;
  height: 0;
}
.icon-enter-active {
  animation: scale 0.3s;
}
.icon-enter-to {
  opacity: 1;
  width: 80%;
}

@keyframes scale {
  0% {
    width: 0;
    height: 0;
    opacity: 0;
  }
  0% {
    width: 0;
    height: 0;
    opacity: 0.5;
  }

  70% {
    width: 80%;
    height: 80%;
  }
  80% {
    width: 70%;
    height: 70%;
  }
  85% {
    width: 75%;
    height: 75%;
  }
  90% {
    width: 73%;
    height: 73%;
  }
  100% {
    opacity: 1;
    width: 80%;
  }
}
</style>
