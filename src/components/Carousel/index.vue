<template>
  <div class="swiper-container" ref="swiperRef">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in carouselList"
        :key="carousel.id"
      >
        <img v-lazy="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: {
    carouselList: {
      type: Array,
    },
  },
  methods: {
    initSwiper() {
      var mySwiper = new Swiper(this.$refs.swiperRef, {
        loop: true, // 循环模式选项
        autoplay: true, //可选选项，自动滑动
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        /* // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar",
        }, */
      });
    },
  },
  mounted() {},
  watch: {
    carouselList: {
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          this.initSwiper();
        });
      },
      immediate: true, // 立即监听
    },
  },
};
</script>

<style lang="less" scoped></style>
