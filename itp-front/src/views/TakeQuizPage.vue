<template>
    <div id="TakeQuizPage">
      <Header></Header>
      <MainBanner></MainBanner>
      <EachGoalBar></EachGoalBar>
      <LearningProgressBar class="progress-bar"></LearningProgressBar>
      <div class="main-content">
        <SideBar class="sidebar"></SideBar>
        <MultipleChoice></MultipleChoice>
        <div class="catton"></div>
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
import LearningProgressBar from '../components/LearningProgressBar.vue';



export default {
  name: 'TakeQuizPage',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
    EachGoalBar,
    MultipleChoice,
    LearningProgressBar,
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

.catton{
  margin-right: 10px;
  margin-left: 10px;
  margin-top: 40px;
  width: 200px ;
  background-color: hsl(0, 0%, 100%);
  margin-bottom: 50px;
  background-image: url('../assets/image/Goal5-mc_dec.png');
  background-size: cover; 
  background-position: center;
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