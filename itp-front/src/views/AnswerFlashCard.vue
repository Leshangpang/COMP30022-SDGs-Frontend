<template>
    <div id="AnswerFlashCard">
      <Header></Header>
      <MainBanner></MainBanner>
      <!-- 使用一个容器包裹 Sidebar 和 Flashcard --> 
      <EachGoalBar></EachGoalBar>
      <LearningProgressBar class="progress-bar"></LearningProgressBar>
      <div class="main-content">
        <SideBar class="sidebar"></SideBar>
        <Flashcard class="flashcard"></Flashcard>
        <div class="catton"></div>
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
import LearningProgressBar from '../components/LearningProgressBar.vue';



export default {
  name: 'AnswerFlashCard',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
    Flashcard,
    EachGoalBar,
    LearningProgressBar,
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
  margin-left: 100px; 
  margin-top: 40px;
  margin-bottom: 100px;
  /* margin-right: 100px; */
}
.main-content {
  display: flex; 
}

.flashcard{
    margin-left: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.catton{
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 40px;
  width: 200px ;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 50px;
  background-image: url('../assets/image/Goal5_flash_dec.png');
  background-size: cover; /* 使图片覆盖整个div */
  background-position: center; /* 居中显示图片 */
  background-repeat: no-repeat;
}

.progress-bar{
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 20px auto;
  padding: 10px 0;
}

</style>
  