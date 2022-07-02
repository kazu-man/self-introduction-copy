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
        <button @click="prevCarousel">prev</button>
        <button @click="nextCarousel">next</button>
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
  height: 300px;
}
.about-text {
  height: auto;
  padding: 20px 0;
}
</style>
