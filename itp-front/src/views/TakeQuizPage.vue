<template>
    <div id="TakeQuizPage">
      <Header></Header>
      <MainBanner></MainBanner>
      <EachGoalBar></EachGoalBar>
      <div class="main-content">
        <SideBar class="sidebar"></SideBar>
        <MultipleChoice></MultipleChoice>
      </div>
      <MainFooter></MainFooter>
 
      <main class="content">
        <router-view></router-view>
      </main>

    </div>
  </template>

<script>
import EachGoalBar from '@/components/EachGoalBar.vue';
import Header from '../components/Header.vue';
import MainBanner from '../components/MainBannerLearn.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/SideBar.vue'
import MultipleChoice from '@/components/MultipleChoice.vue';




export default {
  name: 'TakeQuizPage',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
    EachGoalBar,
    MultipleChoice
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