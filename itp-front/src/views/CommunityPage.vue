<template>
    <div id="CommunityChallenge">
      <Header></Header>
      <MainBanner></MainBanner>
      <LearningProgressBar class="progress-bar"></LearningProgressBar>
      <div class="sidebar-container">
        <SideBar class="sidebar"></SideBar>
        <div class="questions-container">
        <QuestionList :question="'What percentage of women globally experience physical or sexual violence in their lifetime?'" :initialRating="4" :questionId="1" class="question-list"></QuestionList>
        <QuestionList :question="'How would you rate this service?'" :questionId="2" class="question-list"></QuestionList>
        <QuestionList :question="'xxxx'" :questionId="3" class="question-list"></QuestionList>
        <QuestionList :question="'another question....'" class="question-list"></QuestionList>
        <QuestionList :question="'another question....'" class="question-list"></QuestionList>
        <QuestionList :question="'another question....？'" class="question-list"></QuestionList>
      </div>
      </div>
      
      <MainFooter></MainFooter>
 
      <main class="content">
        <router-view></router-view>
      </main>

    </div>
  </template>

<script>
import MainBanner from '../components/MainBannerLearn.vue'
import MainFooter from '../components/MainFooter.vue';
import SideBar from '../components/SideBar.vue';
import QuestionList from '../components/QuestionList.vue'
import Header from '../components/Header.vue';
import LearningProgressBar from '../components/LearningProgressBar.vue';




export default {
  name: 'CommunityChallenge',
  components: {
    Header,
    MainBanner,
    MainFooter,
    SideBar,
    QuestionList,
    LearningProgressBar,
  }

}
</script>

<style scoped>
#CommunityChallenge {
    display: grid;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}



.sidebar-container {
  display: flex;
  margin-top: 100px;
  margin-bottom: 100px;
}
.sidebar {
  margin:0;
  margin-left: 100px; /* 调整这个值来设置距离页面左边的边距 */
  
  flex: 1; /* 侧边栏占据左侧的空间 */
}
.questions-container {
  display: flex;
  flex-direction: column; /* 让问题在右侧垂直排列 */
  margin-left: 70px;
  flex: 2; /* 控制右侧问题部分的宽度 */
  max-height: 400px; /* 控制右侧问题列表的最大高度 */
  overflow-y: auto; /* 让问题列表可垂直滚动 */
  padding-right: 10px; /* 防止滚动条遮挡内容 */
}

.question-list {
  margin-bottom: 20px; /* 每个问题之间的间距 */
}

.progress-bar{
  border-radius: 5px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 20px auto;
  padding: 10px 0;
}
</style>
  