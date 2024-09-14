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
      <div class="conversation">
        <div class="alice"></div>
        <div class="content_cov">
          <div class="words">Alice: Mr. Rabbit, why are you always running around? Why doesn't the Queen of Wonderland help you?</div>
          <div class="words" style="color: black;">White Rabbit: Oh, the Queen says I'm a boy rabbit, so it's my job to handle these tasks.</div>
          <div class="words">Alice: That's not fair! Whether you're a boy or a girl, everyone should have an equal opportunity to choose what they want to do, not be defined by their gender.</div>
          <div class="words" style="color: black;">White Rabbit: You're right, Alice! Gender shouldn't determine our roles.</div>
          <div class="words">Alice: Exactly! Let's work together to make Wonderland more equal for everyone!</div>
        </div>
          <div class="rabbit"></div>
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
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 100px;
}
.main-content {
  display: flex; 
}

.flashcard{
    margin-left: 120px;
    margin-top: 100px;
}

.conversation{
  width: 100%;
  height: 600px;
  background-color: #fff;
  display: flex;
}

.alice{
  margin-left: 100px; 
  margin-top: 100px;
  height: 295px;
  width: 150px;
  background-image: url('../assets/image/alice.png');
  background-size: cover; 
  background-position: left; 
  background-repeat: no-repeat;
  transform: rotateY(180deg);
}
.rabbit{
  margin-right: 100px; 
  margin-top: 100px;
  height: 310px;
  width: 250px;
  background-image: url('../assets/image/rabbit.png');
  background-size: cover; /* 使图片覆盖整个div */
  background-position: left; /* 居中显示图片 */
  background-repeat: no-repeat;
}
.content_cov{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  height: 520px;
  width: 80px;
  flex: 1;
  background-color: hwb(187 38% 21% / 0.547);
  border-radius: 60px;
  margin-left: 20px;
  margin-right: 20px;
}
.words{
  margin-right: 45px;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  transition: all 0.5s;
  cursor: pointer;
  margin-left: 20px;
  margin-top: 20px; 
  font-size: 20px;
  font-weight: bold;
}
  
</style>
  