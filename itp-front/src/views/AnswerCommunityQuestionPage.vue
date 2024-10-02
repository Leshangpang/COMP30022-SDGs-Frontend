<template>
    <div id="AnswerQuestion">
      <Header></Header>
      <Goal5LearningBanner></Goal5LearningBanner>
      <Goal5LogoBar></Goal5LogoBar>
      <learningProgressBar></learningProgressBar>
      <div class="sidebar-container">
        <SideBar class="sidebar"></SideBar>
        <div class="s-questions-detail">
          <!-- integrate QuestionDetail component -->
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
  import learningProgressBar from '../components/learningProgressBar.vue';
  import Goal5LogoBar from '../components/Goal5LogoBar.vue';
  
  export default {
    name: 'AnswerQuestion',
    components: {
      Header,
      Goal5LearningBanner,
      MainFooter,
      SideBar,
      QuestionDetail,
      learningProgressBar,
      Goal5LogoBar,
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
    margin-top: 40px;
    margin-bottom: 100px;
  }
  
  .sidebar {
    margin: 0;
    margin-left: 60px;
    flex: 1;
  }
  
  .s-questions-detail {
    flex: 2;
    margin-left: 130px;
    margin-right: 40px;
  }
  </style>
  