<template>
  <div id="TakeQuizPage">
    <Header></Header>
    <MainBanner></MainBanner>
    <Goal5LogoBar></Goal5LogoBar>
    <learningProgressBar></learningProgressBar>
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
import Header from '../components/NavigationBar.vue';
import MainBanner from '../components/Goal5LearningBanner.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/LearningSideBar.vue'
import MultipleChoice from '@/components/MultipleChoice.vue';
import learningProgressBar from '../components/learningProgressBar.vue';
import Goal5LogoBar from '../components/Goal5LogoBar.vue';

export default {
name: 'TakeQuizPage',
components: {
  Header,
  MainBanner,
  MainFooter,
  SideBar,
  MultipleChoice,
  learningProgressBar,
  Goal5LogoBar,
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
  margin-top: 40px;
  margin-bottom: 100px;
}

.sidebar {
  margin: 0;
  margin-left: 60px;
  margin-right: 40px;
  flex: 1;
}

.catton{
margin-right: 10px;
margin-left: 10px;
margin-top: 40px;
width: 200px;
height:450px;
background-color: hsl(0, 0%, 100%);
margin-bottom: 50px;
background-image: url('../assets/image/Goal5QuizDecoration.jpg');
background-size: cover; 
background-position: center;
background-repeat: no-repeat;
transform: rotateY(180deg);
}
</style>