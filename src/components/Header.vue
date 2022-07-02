<template>
  <div id="header" style="background: rgba(255, 0, 0, 0.3)">
    <div class="header-content-wrapper">
      <div
        class="header-content border"
        v-for="(option, key) in headerOption.list"
        :key="key"
        :style="{ animationDelay: key * 100 + 'ms' }"
      >
        <transition-group name="border" appear>
          <div
            class="border-dummy-top"
            v-if="headerOption.target === key"
          ></div>
          <div
            class="border-dummy-right"
            v-if="headerOption.target === key"
          ></div>
          <div
            class="border-dummy-left"
            v-if="headerOption.target === key"
          ></div>
          <div
            class="border-dummy-bottom"
            v-if="headerOption.target === key"
          ></div>
        </transition-group>
        <div class="item">
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["headerOption"],
  setup(props) {
    const test = ref("test -tate a-sdf-asdf asfsdf");
    const test2 = ref(2);
    console.log(props);

    return {
      test,
      test2,
    };
  },
};
</script>

<style>
#header {
  width: 100%;
  padding: 10px 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  z-index: 999;
}
.header-content-wrapper {
  display: flex;
  justify-content: space-around;
  width: 80%;
  max-width: 550px;
  margin: auto;
}

.header-content {
  position: relative;
  display: inline-block;
  animation: content-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
  color: white;
  text-align: center;
  overflow: hidden;
}
.item {
  margin: 10px;
  font-weight: bold;
}

@keyframes content-in {
  0% {
    transform: translate(0, -20px);
    opacity: 0;
  }
}

.border-draw {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: -2px -1.5px;
}

.border-dummy-bottom,
.border-dummy-right,
.border-dummy-top,
.border-dummy-left {
  content: "";
  position: absolute;
  background: white; /*線の色*/
}

/* 下のボーダー */
.border-dummy-bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
}
/* 右のボーダー */
.border-dummy-right {
  bottom: 0;
  right: 0;
  width: 2px;
  height: 100%;
}
/* 上のボーダー */
.border-dummy-top {
  top: 0;
  right: 0;
  width: 100%;
  height: 2px;
}
/* 左のボーダー */
.border-dummy-left {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
}

/* right */
.border-enter-from.border-dummy-right,
.border-leave-to.border-dummy-right {
  bottom: 0;
  right: 0;
  width: 2px;
  height: 100%;
}
.border-enter-active.border-dummy-right {
  animation: bottomAnim 0.5s linear 0s forwards;
}
.border-enter-to.border-dummy-right,
.border-leave-from.border-dummy-right {
  bottom: 0px;
}

.border-leave-active.border-dummy-right {
  animation: bottomAnim 0.5s linear 0s forwards;
  animation-direction: reverse;
}

/* left */
.border-enter-from.border-dummy-left,
.border-leave-to.border-dummy-left {
  top: 0;
  left: 0;
  width: 1px;
  height: 100%;
}
.border-enter-active.border-dummy-left {
  animation: topAnim 0.5s linear 0s forwards;
}
.border-enter-to.border-dummy-left,
.border-leave-from.border-dummy-left {
  top: 0px;
}

.border-leave-active.border-dummy-left {
  animation: topAnim 0.5s linear 0s forwards;
  animation-direction: reverse;
}

/* top */
.border-enter-from.border-dummy-top,
.border-leave-to.border-dummy-top {
  top: 0;
  right: 0;
  width: 100%;
  height: 1px;
}
.border-enter-active.border-dummy-top {
  animation: rightAnim 0.5s linear 0s forwards;
}
.border-enter-to.border-dummy-top,
.border-leave-from.border-dummy-top {
  right: 0px;
}

.border-leave-active.border-dummy-top {
  animation: rightAnim 0.5s linear 0s forwards;
  animation-direction: reverse;
}

/* bottom */
.border-enter-from.border-dummy-bottom,
.border-leave-to.border-dummy-bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
}
.border-enter-active.border-dummy-bottom {
  animation: leftAnim 0.5s linear 0s forwards;
}
.border-enter-to.border-dummy-bottom,
.border-leave-from.border-dummy-bottom {
  left: 0px;
}

.border-leave-active.border-dummy-bottom {
  animation: leftAnim 0.5s linear 0s forwards;
  animation-direction: reverse;
}

/* 各アニメーション */
@keyframes topAnim {
  0% {
    top: -200px;
  }
  100% {
    top: 0px;
  }
}
@keyframes bottomAnim {
  0% {
    bottom: -200px;
  }
  100% {
    bottom: 0px;
  }
}
@keyframes rightAnim {
  0% {
    right: -200px;
  }
  100% {
    right: 0px;
  }
}
@keyframes leftAnim {
  0% {
    left: -200px;
  }
  100% {
    left: 0px;
  }
}
</style>
