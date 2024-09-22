<template>
    <div id="AnswerQuestion">
      <Header></Header>
      <Goal5LearningBanner></Goal5LearningBanner>
      <div class="sidebar-container">
        <SideBar class="sidebar"></SideBar>
        <div class="questions-detail">
          <!-- 嵌入 QuestionDetail 组件 -->
          <QuestionDetail :questionId="$route.params.id"></QuestionDetail>
        </div>
      </div>
  
      <MainFooter></MainFooter>
  
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
  import Goal5LearningBanner from '../components/Goal5LearningBanner.vue';
  import MainFooter from '../components/MainFooter.vue';
  import SideBar from '../components/LearningSideBar.vue';
  import QuestionDetail from '../components/CommunityChallengeQuestionDetail.vue';
  import Header from '../components/NavigationBar.vue';
  
  export default {
    name: 'AnswerQuestion',
    components: {
      Header,
      Goal5LearningBanner,
      MainFooter,
      SideBar,
      QuestionDetail
    }
  }
  </script>
  
  <style>
  #AnswerQuestion {
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
    margin: 0;
    margin-left: 100px;
    flex: 1;
  }
  
  .questions-detail {
    flex: 2;
    margin-left: 170px;
  }
  </style>
  