<template>
    <div id="AnswerFlashCard">
      <Header></Header>
      <MainBanner></MainBanner>
      <!-- 使用一个容器包裹 Sidebar 和 Flashcard --> 
      <EachGoalBar></EachGoalBar>
      <div class="main-content">
        <SideBar class="sidebar"></SideBar>
        <Flashcard class="flashcard"></Flashcard>
      </div>
  
      <MainFooter></MainFooter>
  
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
  </template>
  

<script>
import Header from '../components/Header.vue';
import MainBanner from '../components/MainBannerLearn.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/SideBar.vue'
import Flashcard from '../components/ReadFlashcard.vue';
import EachGoalBar from '../components/EachGoalBar.vue';



export default {
  name: 'AnswerFlashCard',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
    Flashcard,
    EachGoalBar
}

}
</script>

<style scpoed>

#AnswerFlashCard {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.sidebar {
  margin-left: 100px; /* 调整这个值来设置距离页面左边的边距 */
  margin-top: 100px;
  margin-bottom: 100px
}
.main-content {
  display: flex; /* 使用 flexbox 布局 */
  
}

.flashcard{
    margin-left: 100px;
    margin-top: 100px;
}
  
</style>
  