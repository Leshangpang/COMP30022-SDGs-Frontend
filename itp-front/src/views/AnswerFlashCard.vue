<template>
  <div id="AnswerFlashCard">
    <Header></Header>
    <MainBanner></MainBanner>
    <EachGoalBar></EachGoalBar>
    <div class="main-container">
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
margin-left: 100px; 
margin-top: 40px;
margin-bottom: 100px;
}

.main-container {
display: flex; 
}

.flashcard{
  margin-left: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.catton{
margin-right: 30px;
margin-left: 30px;
margin-top: 20px;
width: 200px ;
height: 450px;
background-color: hsl(0, 0%, 100%);
margin-bottom: 50px;
background-image: url('../assets/image/Goal5_flash_dec.png');
background-size: cover; 
background-position: center; 
background-repeat: no-repeat;
}

</style>
  