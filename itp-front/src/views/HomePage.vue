<template>
  <div id="HomePage">
    <Header></Header>
    <MainBanner></MainBanner>
    <swiper-list></swiper-list>
    <HomePageQnA></HomePageQnA>
    <MainFooter></MainFooter>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import MainBanner from "../components/HomePageBanner.vue";
import SwiperList from "../components/SwiperList.vue";
import HomePageQnA from "../components/HomePageQnA.vue";
import MainFooter from "../components/MainFooter.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    MainBanner,
    MainFooter,
    SwiperList,
    HomePageQnA,
  },
};
</script>

<style scoped>
#HomePage {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.navbar-area.is-sticky {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  position: fixed;
  -webkit-box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.09);
  -webkit-animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
  animation: 500ms ease-in-out 0s normal none 1 running fadeInDown;
}

.edumim-nav .navbar {
  position: inherit;
  padding: 0;
}
.pic {
  width: 100%;
  height: 800px;
  background-color: #f0ffffb3;
  display: flex;
  justify-content: space-between; /* Space between image and text */
  align-items: center;
}

.pic img {
  height: 65%; /* Make image height match the container height */
  width: 700px;  /* Maintain aspect ratio of the image */
}

.pic .text{
  width: 700px;
  height:70%;
  background-color: rgba(130, 201, 137, 0.461);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 100px;
  border: solid 10px hwb(113 60% 9% / 0.702);
  border-radius: 50px;
}

.pic iframe {
  width: 100%; /* Make the iframe take full width of the .text */
  height: 100%; /* Ensure the height is constrained by .text */
  border-radius: 50px;
}


</style>