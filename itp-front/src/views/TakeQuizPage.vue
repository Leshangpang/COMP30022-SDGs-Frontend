<template>
  <div id="TakeQuizPage">
    <Header></Header>
    <MainBanner></MainBanner>
    <EachGoalBar></EachGoalBar>
    <div class="main-container">
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

.main-container{
  display: flex;
}

.sidebar {
margin-left: 100px; /* 调整这个值来设置距离页面左边的边距 */
margin-top: 100px;
margin-bottom: 100px
}

.catton{
margin-right: 40px;
margin-left: 40px;
margin-top: 0px;
width: 200px;
background-color: hsl(0, 0%, 100%);
margin-bottom: 50px;
background-image: url('../assets/image/Goal5_Decor.jpg');
background-size: cover; 
background-position: center;
background-repeat: no-repeat;
transform: rotateY(180deg);
}
</style>