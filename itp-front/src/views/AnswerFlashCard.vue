<template>
  <div id="AnswerFlashCard">
    <Header></Header>
    <MainBanner></MainBanner>
    <EachGoalBar></EachGoalBar>
    <learningProgressBar class="progress-bar"></learningProgressBar>
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
import Header from '../components/NavigationBar.vue';
import MainBanner from '../components/Goal5LearningBanner.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/LearningSideBar.vue'
import Flashcard from '../components/ReadFlashcard.vue';
import EachGoalBar from '../components/Goal5LogoBar.vue';
import learningProgressBar from '../components/learningProgressBar.vue';

export default {
name: 'AnswerFlashCard',
components: {
  Header,
  MainBanner,
  MainFooter,
  SideBar,
  Flashcard,
  EachGoalBar,
  learningProgressBar,
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
  margin: 0;
  margin-left: 60px;
  margin-right: 20px;
  flex: 1;
}

.main-container {
  display: flex; 
  margin-top: 60px;
  margin-bottom: 100px;
}

.flashcard{
  margin-left: 100px;
  margin-bottom: 20px;
}

.catton{
margin-right: 30px;
margin-left: 30px;
margin-top: 20px;
width: 200px ;
height: 650px;
background-color: hsl(0, 0%, 100%);
margin-bottom: 50px;
background-image: url('../assets/image/Goal5FlashcardDecoration.png');
background-size: cover; 
background-position: center; 
background-repeat: no-repeat;
}

</style>
  