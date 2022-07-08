<template>
  <ContentLayout :title="'About me'">
    <div class="about-slide">
      <Carousel
        ref="myCarousel"
        :itemsToShow="3"
        :wrapAround="true"
        :autoplay="10000"
        :touchDrag="false"
      >
        <Slide v-for="(data, index) in carouselData" :key="index">
          <SvgIcon
            :showIcon="currentSlide.value == index"
            :targetImageUrl="data.image"
          />
          <transition name="explosion" appear>
            <img
              v-if="currentSlide.value == index"
              src="../../public/images/explosion.svg"
              id="svg"
              style="width: 80%; position: absolute; opacity: 0"
            />
          </transition>
        </Slide>
      </Carousel>
      <div class="i-love-area">I LOVE SOMETHING</div>
      <div class="arrows">
        <font-awesome-icon
          icon="arrow-left"
          class="slider-arrow"
          @click="prevCarousel"
        />
        <font-awesome-icon
          icon="arrow-right"
          class="slider-arrow"
          @click="nextCarousel"
        />
      </div>
    </div>
    <div class="about-text">
      Hi I am a web developer & designer based in Vancouver in Canada. I believe
      working in a multi-disciplined approach brings creative inspiration to my
      work. I am passionate about creating websites and web apps that
      incorporate interactive design and modern technologies. I specialize in
      front-end development but also love experimenting with new backend
      technologies, with the aim to improve productivity, quality, performance
      and speed.
    </div>
    <!-- </div> -->
  </ContentLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import ContentLayout from "./ContentLayout";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import SvgIcon from "./SvgIcon";

export default {
  components: { ContentLayout, Carousel, Slide, SvgIcon },
  setup() {
    const carouselData = ref([
      { title: "a", image: "/images/explosion-flame.svg" },
      { title: "b", image: "/images/tuna.svg" },
      { title: "c", image: "/images/pig.png" },
      { title: "c", image: "/images/wolf.svg" },
      { title: "c", image: "/images/mo-taku-to.svg" },
    ]);
    const myCarousel = ref(null);

    const nextCarousel = () => {
      myCarousel.value.next();
    };
    const prevCarousel = () => {
      myCarousel.value.prev();
    };
    let currentSlide = ref(0);
    onMounted(() => {
      currentSlide.value = myCarousel.value.data.currentSlide;
    });

    return {
      carouselData,
      nextCarousel,
      myCarousel,
      prevCarousel,
      currentSlide,
    };
  },
};
</script>

<style>
.about-slide {
  margin-bottom: 10px;
}
.about-text {
  height: auto;
  padding: 10px 0;
  width: 50%;
  max-width: 500px;
  margin: auto;
  font-size: 1.8rem;
  color: white;
  font-weight: bold;
}
.slider-arrow {
  color: #fff;
  font-size: 3em;
  opacity: 0.7;
  margin: 0.2rem;
  cursor: pointer;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}
.arrows {
  font-size: 0.6rem;
  margin-top: 5px;
}
.i-love-area {
  text-align: center;
  font-size: 3em;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: 20px;
}

.explosion-enter-from {
  opacity: 0;
  transform: scale(0.1);
}
.explosion-enter-active {
  animation: explosion 1s ease-in;
}
.explosion-enter-to {
  opacity: 0;
  transform: scale(0.1);
  width: 0;
}
@keyframes explosion {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  10% {
    transform: rotate(0deg);
    transform: scale(0.8);
    opacity: 1;
  }

  95% {
    transform: rotate(180deg);
  }
  99% {
  }
  100% {
    opacity: 0;
    width: 0;
  }
}
</style>
