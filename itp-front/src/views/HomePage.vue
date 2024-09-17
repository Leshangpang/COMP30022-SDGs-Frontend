<template>
  <div id="HomePage">
    <Header></Header>
    <MainBanner></MainBanner>
    <swiper-list></swiper-list>
    <ask-menu></ask-menu>
    <MainFooter></MainFooter>
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "../components/WebHeader.vue";
import MainBanner from "../components/MainBannerHome.vue";
import SwiperList from "../components/SwiperList.vue";
import AskMenu from "../components/AskMenu.vue";
import MainFooter from "../components/MainFooter.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    MainBanner,
    MainFooter,
    SwiperList,
    AskMenu,
  },
};
</script>

<style>
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
</style>