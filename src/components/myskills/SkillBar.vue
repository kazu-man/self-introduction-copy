<template>
  <div class="skill-bar-wrapper">
    <div class="skill-title">
      {{ skill.title }}
    </div>
    <div class="bar">
      <transition :name="direction">
        <div
          v-if="show"
          class="bar color-bar"
          :class="{ left: direction === 'left', right: direction === 'right' }"
          :style="{ width: skill.value + '%' }"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skill", "direction", "show"],
  setup() {},
};
</script>

<style>
.skill-bar-wrapper {
  padding: 0 10px;
}
.skill-title {
  color: white;
  text-align: right;
  font-size: 1.5rem;
}
.bar {
  position: relative;
  background: #fff;
  height: 3rem;
  border-radius: 3px;
  overflow: hidden;
}
.color-bar {
  position: absolute;
  background: #f18276;
  height: 3rem;
  border-radius: 3px;
  /* width: 80%; */
}
.left {
  right: 0;
}
.right {
  left: 0;
}
.left-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.left-enter-to {
  opacity: 1;
}
.left-enter-active {
  transition: all 3s;
}
.right-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.right-enter-to {
  opacity: 1;
}
.right-enter-active {
  transition: all 3s;
}
</style>
