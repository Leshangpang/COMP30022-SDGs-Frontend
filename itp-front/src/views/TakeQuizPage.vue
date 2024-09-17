<template>
    <div id="TakeQuizPage">
      <Header></Header>
      <MainBanner></MainBanner>
      <SideBar class="sidebar"></SideBar>
      <MainFooter></MainFooter>
 
      <main class="content">
        <router-view></router-view>
      </main>

    </div>
  </template>

<script>
import Header from '../components/WebHeader.vue';
import MainBanner from '../components/MainBannerLearn.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/SideBar.vue'




export default {
  name: 'TakeQuizPage',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,

  }

}
</script>

<style scoped>
#TakeQuizPage {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.sidebar {
  margin-left: 100px; /* 调整这个值来设置距离页面左边的边距 */
  margin-top: 100px;
  margin-bottom: 100px
}
  
</style>