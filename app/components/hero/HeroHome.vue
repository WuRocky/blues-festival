<script setup>
import { Navigation, Scrollbar, Pagination, Autoplay } from "swiper/modules";

const swiperConfig = {
  modules: [Navigation, Scrollbar, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    545: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
};

const data = [
  { image: "/img/bg-1.jpg" },
  { image: "/img/bg-2.jpg" },
  { image: "/img/bg-3.jpg" },
  { image: "/img/bg-4.jpg" },
  { image: "/img/bg-5.jpg" },
  { image: "/img/bg-6.jpg" },
];
</script>

<template>
  <swiper-container v-bind="swiperConfig">
    <swiper-slide v-for="(slide, index) in data">
      <NuxtImg :src="slide.image" sizes="sm:50vw md:70vw lg:auto" />
    </swiper-slide>
  </swiper-container>
</template>

<style scoped></style>
