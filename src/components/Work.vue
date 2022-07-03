<template>
  <ContentLayout :title="'Work'">
    <div class="work-wrapper" ref="workWrapper">
      <div class="image-area">
        <transition-group
          @before-enter="imagesBeforeEnter"
          @enter="imagesEnter"
        >
          <div
            v-for="(work, index) in works"
            :key="work.url"
            :data-index="index"
            v-show="show"
          >
            <a :href="work.url" target="_blank">
              <img :src="work.image" class="work-image" alt="" />
            </a>
          </div>
        </transition-group>
      </div>
    </div>
  </ContentLayout>
</template>

<script>
import { ref } from "vue";
import ContentLayout from "./ContentLayout";
import gsap from "gsap";

export default {
  components: { ContentLayout },
  setup() {
    const show = ref(false);
    const workWrapper = ref(null);

    const handleScroll = () => {
      if (!show.value) {
        show.value =
          workWrapper.value.getBoundingClientRect().top < window.innerHeight;
      }
    };

    window.addEventListener("scroll", handleScroll);

    const works = ref([
      {
        image:
          "http://manato.ca/assets/dist/img/works/wwm/wwm_thumb.jpg?1494207797",
        url: "http://manato.ca/",
      },
      {
        image:
          "http://manato.ca/assets/dist/img/works/wwm/wwm_thumb.jpg?1494207797",
        url: "http://manato.ca/",
      },
      {
        image:
          "http://manato.ca/assets/dist/img/works/wwm/wwm_thumb.jpg?1494207797",
        url: "http://manato.ca/",
      },
      {
        image:
          "http://manato.ca/assets/dist/img/works/wwm/wwm_thumb.jpg?1494207797",
        url: "http://manato.ca/",
      },
    ]);
    const imagesBeforeEnter = (el) => {
      gsap.set(el, {
        y: -30,
        opacity: 0,
      });
    };
    const imagesEnter = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.5 + el.dataset.index * 0.2,
        onComplete: done,
      });
    };
    return { works, imagesBeforeEnter, imagesEnter, workWrapper, show };
  },
};
</script>

<style>
.work-wrapper {
  width: 100%;
}
.image-area {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 2%;
  margin: 0 2%;
}
.work-image {
  width: 100%;
  cursor: pointer;
}
.image-enter-from {
  opacity: 0;
}
.image-enter-active {
  transition: all 2s ease;
}
.image-enter-to {
  opacity: 1;
}
</style>
