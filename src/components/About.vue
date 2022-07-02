<template>
  <ContentLayout>
    <div class="about-content">
      <div class="about-title">
        <h2>About Me</h2>
      </div>
      <div class="about-slide">
        <Carousel
          ref="myCarousel"
          :itemsToShow="3"
          :wrapAround="true"
          :autoplay="10000"
          :touchDrag="false"
        >
          <Slide v-for="(data, index) in carouselData" :key="index">
            <img :src="data.image" style="width: 75%" />
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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint saepe
        ipsum maxime corrupti? Voluptatum consequuntur voluptate quibusdam, qui
        quam eligendi odio tenetur non perspiciatis veritatis ad quia dolore,
        harum ullam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Excepturi enim dicta est voluptatem? Quis, earum, vel laudantium quos
        dolores repellendus illo nostrum mollitia, asperiores repellat
      </div>
    </div>
  </ContentLayout>
</template>

<script>
import { ref } from "vue";
import ContentLayout from "./ContentLayout";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  components: { ContentLayout, Carousel, Slide },
  setup() {
    const carouselData = ref([
      { title: "a", image: "/images/sample.png" },
      { title: "b", image: "/images/sample.png" },
      { title: "c", image: "/images/sample.png" },
      { title: "c", image: "/images/sample.png" },
      { title: "c", image: "/images/sample.png" },
      { title: "c", image: "/images/sample.png" },
      { title: "c", image: "/images/sample.png" },
      { title: "c", image: "/images/sample.png" },
      { title: "c", image: "/images/sample.png" },
    ]);
    const myCarousel = ref(null);

    const nextCarousel = () => {
      myCarousel.value.next();
    };
    const prevCarousel = () => {
      myCarousel.value.prev();
    };

    return {
      carouselData,
      nextCarousel,
      myCarousel,
      prevCarousel,
    };
  },
};
</script>

<style>
.about-content {
  width: 100%;
  height: auto;
  background: rgb(200, 193, 236);
  padding-top: 20px;
}
.about-title {
  font-family: "Pacifico", cursive;
}
.about-slide {
  margin-bottom: 10px;
}
.about-text {
  height: auto;
  padding: 10px 0;
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
  font-size: 1.5em;
  color: #fff;
  text-transform: uppercase;
  font-family: "Oswald", Calibri;
  font-weight: bold;
  margin-top: 5px;
}
</style>
